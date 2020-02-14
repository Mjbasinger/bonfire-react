import React, { useState } from 'react'

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
        console.log(post)
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
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input {...title}></input>
            <br />
            <label>Post</label>
            <textarea {...body}></textarea>
            <br />
            <button type='submit'>Submit</button>
        </form>

    )
}

export default AddPost
