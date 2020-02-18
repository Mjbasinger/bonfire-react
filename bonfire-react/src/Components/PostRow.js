import React, {component} from 'react'

function PostRow(props) {
    
    
    const posts = props.posts.map((post)=> {
    return (
        <div>
        <h1 key={post.id}
        onClick={()=> props.redirect(post._id)}>
        {post.title}
        </h1>
        </div>
        
    )
    })
    return (
        <div>{posts}</div>
    )
}

export default PostRow