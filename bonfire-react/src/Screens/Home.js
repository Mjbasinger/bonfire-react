import React, { useState, useEffect } from 'react'



const Home = (props) => {
    const [posts, setPosts] = useState(["loading"])
    
    const getPosts = async () => {
        let temp = []
        console.log('get posts started')
        const allPosts = await fetch('http://localhost:8000/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log('get posts ENDED')
        const parsedPosts = await allPosts.json() 

        //make 'post row' component that takes in props of user and title to mapo through 
        temp = parsedPosts.map(post=><h1>{post.title}</h1>)
        console.log(temp);
        
        setPosts(temp)
    }
    let allPosts
    useEffect(()=>{
        getPosts()
        console.log(posts)
    },[])
   
    
return (<div>{posts}</div>)
 
    
}

export default Home
