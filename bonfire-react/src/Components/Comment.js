// import React from 'react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const CommentComponent = (props) => {
    const [comment, setComment] = useState([])
   
    const pathName = props.history.location.pathname;

    const getComment = async () => {
        const postPath = await fetch(`http://localhost:8000${pathName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedPost = await postPath.json()

        setPost(parsedPost)
        console.log(setPost)
        console.log(parsedPost)
    }
    
    
    useEffect(()=>{
        getPost()
    },[])

    return (
        <div>
            
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
            <hr/>
            <CommentComponent />
        </div>
    )
}

export default CommentComponent

