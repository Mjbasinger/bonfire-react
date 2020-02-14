import React from 'react'

function SignUp() {
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder="name"></input>
                    <br/>
                <input type="text" name="username" placeholder="username"></input>
                    <br/>
                <input type="email" name="email" placeholder="email"></input>
                    <br/>
                <input type="password" name="password" placeholder="password"></input>
                    <br/>
                <input type="text" name="needs" placeholder="needs"></input>
                    <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignUp
