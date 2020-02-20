import React from 'react'
import { Form, Button, Header, TextArea, Input } from 'semantic-ui-react'





function EditPost(props) {
    const modalFunction = (e) =>{
        props.updatePost(e)
        props.closeModal()
        // props.history.push(`http://localhost:8000${props.pathName}`)
    }

    return (    

                <Form onSubmit={modalFunction}>
                    <Form.Field >
                        <label>title</label>
                        <TextArea rows="1"
                            type="text"
                            name="title"
                           
                            onChange={props.handleEditChange}
                        >{props.title}</TextArea>
                    </Form.Field>
                    <Form.Field>
                        <label>Body</label>
                        <TextArea
                            type="textarea"
                            name="body"                         
                            onChange={props.handleEditChange}
                        >{props.body}</TextArea>
                    </Form.Field>
                    <Button type='submit'>Update Post</Button>
                </Form>
           
    )
}

export default EditPost