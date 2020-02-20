import React, { useState } from 'react'
import { Form, Button, Header, TextArea, Input } from 'semantic-ui-react'

import { useInputValue } from '../helpers/customHooks'

const AddPost = (props) => {
    const title = useInputValue('')
    console.log(title.value)
    const body = useInputValue('')
    console.log(body.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = {
            title: title.value,
            body: body.value
        }
        // console.log(post)
        const newPost = await fetch('http://localhost:8000/posts/new', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(newPost)

        // const parsedNewPost = await newPost.json()
        props.history.push('/home')
    }



    return (
        <Form onSubmit={handleSubmit}>
            <div class='grid container' style={{marginLeft:'2%', marginBottom:'1%'}}>
            <label>Title</label>
            <input {...title}></input>
            <br />
            <label>Post</label>
            <textarea {...body}></textarea>
            <br />
            <button type='submit'>Submit</button>
            </div>
        </Form>

    )
}

export default AddPost
