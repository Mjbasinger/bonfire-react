import React, { useState, useEffect } from 'react'

const User = (props) => {
    const [user, setUser] = useState([])
   
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
        </div>
    )
}

export default User
