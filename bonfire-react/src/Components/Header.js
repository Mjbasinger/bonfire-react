import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem, List, Segment, Header } from 'semantic-ui-react'
import Bonfire from '../image/bonfire.png'

// import AddPost from '../Screens/AddPost'


function HeaderComponent() {
    return (
        <div>
            <Segment textAlign='center'>
            <Header as ='h1'>The</Header> 
            <img className='ui small image centered' src={Bonfire}/>
            <h1>Bonfire</h1>
            </Segment>
            <nav className='ui inverted to attached menu'>

            <div class="divider"></div>
                <Link to='/home' class='item'>Home</Link>
                <Link to='/add-post' class='item'>New Post</Link>
                <Link class='item'>Games</Link>
                <Link class='item'>Videos</Link>
                <Link to='/login' class='item'>Login</Link>
                <Link to='/sign-up' class='item'>Sign Up</Link>

                <div class="ui right aligned category search item">
                    <div class="ui inverted icon input" >
                        <input type="text" placeholder="Search " />
                        <i class="search link icon"></i>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default HeaderComponent 
