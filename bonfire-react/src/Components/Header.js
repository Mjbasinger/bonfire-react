import React from 'react'
import {Link} from 'react-router-dom'

// import AddPost from '../Screens/AddPost'


function HeaderComponent() {
    return (
        <div>
            <h1>The Bonfire</h1>
                <nav>
                    <ul>
                       <Link to='/home'><li>Home</li></Link>
                        <a><li>Games</li></a>
                        <a><li>Videos</li></a>
                        <Link to='/add-post'><li>New Post</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                        <Link to='/sign-up'><li>Sign Up</li></Link>
                    </ul>
                </nav>
        </div>
    )
}

export default HeaderComponent 
