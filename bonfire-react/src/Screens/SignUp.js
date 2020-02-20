import React, { useState } from 'react'
import { useInputValue } from '../helpers/customHooks'
import { Form, Button, Header, TextArea, Input } from 'semantic-ui-react'

const SignUp = (props) => {
    const name = useInputValue('')
    const username = useInputValue('')
    const email = useInputValue('')
    const password = useInputValue('')
    const needs = useInputValue('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value,
            needs: needs.value
        }
        const newUser = await fetch('http://localhost:8000/users/sign-up', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(newUser)
        props.history.push('/home')
    }
    return (
        <div class='ui form ' style={{marginLeft:'2%', marginBottom:'1%'}}>
            <Form onSubmit={handleSubmit}>
                <div className='field'>
                <input {...name} placeholder="Name"></input>                
                <input {...username} placeholder="username"></input>
                <input {...email} type='email' placeholder="email"></input>
                <input {...password} type='password' placeholder="pasword"></input>
                <input {...needs} placeholder="needs"></input>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </div>
    )
}

export default SignUp
