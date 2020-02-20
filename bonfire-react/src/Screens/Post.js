import React, { useState, useEffect } from 'react'
import CommentComponent from '../Components/Comment'
import { Button } from 'semantic-ui-react'
import Modal from 'react-modal'

import EditPost from '../Components/EditPost'

const Post = (props) => {
    const [post, setPost] = useState([])
    const [postToEdit, setPostToEdit] = useState({})
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const pathName = props.history.location.pathname;
    // console.log(props.history)
    // console.log(props.location)
    // console.log(props.match)

    const getPost = async () => {
        const postPath = await fetch(`http://localhost:8000${pathName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedPost = await postPath.json()

        setPost(parsedPost)
        // console.log(setPost)
        // console.log(parsedPost)
    }

    const handleEditChange = (e) => {
        e.preventDefault()
        
        const temp = {
            ...postToEdit,
            [e.target.name]: e.target.value
        }
        // console.log(temp);
        setPostToEdit(temp)
    }


    const updatePost = async (e) => {
        e.preventDefault()
        
        const updatePost = await fetch(`http://localhost:8000${pathName}`, {
            method: 'PUT',
            body: JSON.stringify(postToEdit),
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        
        await updatePost.json().then(response =>{
            console.log(response);
            
            setPost(response)
        })

    }
    const removePost = async (e) => {
        await fetch(`http://localhost:8000${pathName}`, {
            method: 'DELETE'
        })
        props.history.push('/home')

    }


    useEffect(() => {
        getPost()
    }, [])

    return (
        <div style={{marginLeft: '1%', marginRight: '1%'}}>

            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
            <Button onClick={removePost}>Delete</Button>

            <Button onClick={openModal}>Edit Post</Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <Button onClick={closeModal}>x</Button>
                <EditPost updatePost={updatePost} handleEditChange={handleEditChange} closeModal={closeModal} pathName={pathName} title={post.title} body={post.body}/>
            </Modal>
            <hr />
           <div style={{marginLeft: '1%', marginRight: '1%'}}>
            <CommentComponent pathName={pathName} />
            </div>
        </div>
    )
}

export default Post
