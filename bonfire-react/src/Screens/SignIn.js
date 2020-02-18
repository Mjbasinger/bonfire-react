import React, { useState } from 'react'
import { useInputValue } from '../helpers/customHooks'

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
        console.log(foundUser)
        const parsedUserResponse = await foundUser.json()
        console.log(parsedUserResponse);
        console.log(username)
        if (parsedUserResponse && parsedUserResponse.username === username.value) {
            // props.loggedStatus();
            props.history.push('/home')
        } else {
            console.log('login failed: ', parsedUserResponse);
            
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input {...username}></input>
                <br />
                <label>Password</label>
                <input {...password}></input>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignIn
