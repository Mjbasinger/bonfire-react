import React from 'react'
import { directive } from '@babel/types'
import { Link, Image } from 'semantic-ui-react'
import Bonfire from '../image/bonfire.png'
import FacebookIcon from '../image/facebookIcon.png'
import TwitterIcon from '../image/twitterIcon.png'
import InstagramIcon from '../image/instagramIcon.png'

function FooterComponent() {
    return (
        <div>
            
            <hr/>
            <img className='ui small bottom aligned image' src={Bonfire}/>
            <a href='#'>Contact</a> 
            <a href='#'>About</a> 
            <a href='#'>Resources</a> 
            <img src={FacebookIcon}/>
            <img src={TwitterIcon}/>
            <img src={InstagramIcon}/>
        </div>
    )
}

export default FooterComponent
