import React, { useState } from 'react'
import { useInputValue } from '../helpers/customHooks'

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input {...name}></input>
                <br />
                <label>Username</label>
                <input {...username}></input>
                <br />
                <label>Email</label>
                <input {...email}></input>
                <br />
                <label>Password</label>
                <input {...password}></input>
                <br />
                <label>Needs</label>
                <input {...needs}></input>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignUp
