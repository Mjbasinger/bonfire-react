import React, { useState } from 'react'
import { useInputValue } from '../helpers/customHooks'
import { Form, Button, Header, TextArea, Input } from 'semantic-ui-react'

import {handleLogged} from '../helpers/customHooks'

const SignIn = (props) => {
    const username = useInputValue('')
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            username: username.value,
            email: email.value,
            password: password.value,
        }
        const foundUser = await fetch('http://localhost:8000/users/login', {
            method: 'POST',
            CREDENTIALS: 'include',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // console.log(foundUser)
        const parsedUserResponse = await foundUser.json()
        // console.log(parsedUserResponse);
        // console.log(username)
        if (parsedUserResponse && parsedUserResponse.username === username.value) {
            // props.loggedStatus();
            props.history.push('/home')
        } else {
            // console.log('login failed: ', parsedUserResponse);
            
        }
    }
    return (
        <div class='ui form ' style={{marginLeft:'2%', marginBottom:'1%'}}>
            <Form onSubmit={handleSubmit}>
                
                <input {...username} placeholder="username"></input>
                
                
                <input {...email} type='email' placeholder="email"></input>
                
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default SignIn
