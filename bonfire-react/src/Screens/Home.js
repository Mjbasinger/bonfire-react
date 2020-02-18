import React, { useState, useEffect } from 'react'
import PostRow from '../Components/PostRow'


const Home = (props) => {
    const [posts, setPosts] = useState(["loading"])

    const getPosts = async () => {
        // let temp = []
        const allPosts = await fetch('http://localhost:8000/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedPosts = await allPosts.json()

        //make 'post row' component that takes in props of user and title to mapo through 
        // temp = parsedPosts.map(post=><h1>{post.title}</h1>)
        // temp = parsedPosts.map(<PostRow title={post.title}/>)

        setPosts(parsedPosts)
       
    }
       
        useEffect(() => {
            getPosts()
        }, [])
        
        const showPost = (postId)=>{
     
             props.history.push(`/posts/${postId}`)
             // console.log('this is showListig: ', this);
         } 
    return (<div><PostRow posts={posts} redirect={showPost} /></div>)


}

export default Home
