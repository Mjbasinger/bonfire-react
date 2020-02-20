import React, {component} from 'react'
import {Table} from 'semantic-ui-react'

function PostRow(props) {
    
    
    const posts = props.posts.map((post)=> {
    return (
        // <div class='grid container' style={{marginLeft:'2%', marginBottom:'1%'}}>
        // <h1 key={post.id}
        // onClick={()=> props.redirect(post._id)}>
        // {post.title}
        // </h1>
        // <hr/>
        // </div>

        <Table celled class='grid container' style={{marginLeft:'2%', marginBottom:'1%'}}>
        <h1 key={post.id}
        onClick={()=> props.redirect(post._id)}>
        {post.title}
        </h1>
        
        </Table>
        
    )
    })
    return (
        <div>{posts}</div>
    )
}

export default PostRow