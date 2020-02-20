import React, { useState } from 'react'
import { Button, TextArea, Form } from 'semantic-ui-react'

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
        <Form  onSubmit={handleSubmit}>
            <label>Post</label>
            <TextArea placeholder='Write your comment here'  {...body}></TextArea>
            <br />
            <Button type='submit'>Submit</Button>
        </Form>

    )
}

export default CommentComponent
