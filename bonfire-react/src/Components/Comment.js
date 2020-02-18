import React, { useState } from 'react'

import { useInputValue } from '../helpers/customHooks'

const CommentComponent = (props) => {
    const title = useInputValue('')
    // console.log(title.value)
    const body = useInputValue('')
    // console.log(body.value)

    const handleSubmit = async (e) => {

        const comment = {
            title: title.value,
            body: body.value
        }
        // console.log(post)
        const newComment = await fetch('http://localhost:8000/comments/new', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // console.log()

        // const parsedNewPost = await newPost.json()
        props.history.push('/{props.pathname}')
    }



    return (
        <form onSubmit={handleSubmit}>
            <label>Post</label>
            <textarea {...body}></textarea>
            <br />
            <button type='submit'>Submit</button>
        </form>

    )
}

export default CommentComponent
