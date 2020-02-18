import React, { useState, useEffect } from 'react'
import CommentComponent from '../Components/Comment'

const Post = (props) => {
    const [post, setPost] = useState([])
   
    const pathName = props.history.location.pathname;

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
    const [deletedPost, deletePost] = useState([props.parsedPost]);

    const removePost = async (e) => {
      const removePostResponse = await fetch(`http://localhost:8000${pathName}`, {
          method: 'DELETE'
      })
    //   e.target.getAttribute('title')
      deletePost(deletedPost.filter(post => post.title !== props.post.title))
      await removePostResponse.json();
      props.history.push('/home')
      console.log(deletedPost)
      
    }
    
    
    useEffect(()=>{
        getPost()
    },[])

    return (
        <div>
            
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
            <button onClick={removePost}>Delete</button>
            <hr/>
            <CommentComponent pathName={pathName}/>
        </div>
    )
}

export default Post
