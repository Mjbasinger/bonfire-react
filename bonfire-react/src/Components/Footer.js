import React from 'react'
import { directive } from '@babel/types'
import { Link, Image, Footer, Grid, Segment } from 'semantic-ui-react'
import Bonfire from '../image/bonfire.png'
import FacebookIcon from '../image/facebookIcon.png'
import TwitterIcon from '../image/twitterIcon.png'
import InstagramIcon from '../image/instagramIcon.png'



function FooterComponent() {
    return (
        <Segment textAlign='center' style={{ position: "absolute", bottom: 0, width: "100vw" }}>
            <div class='ui grid'>
                {/* <div class="column" style={{position: "absolute", bottom: 0, width: "100vw"}}> */}
                <div className='column'>
                    <img className='ui small bottom left aligned image' src={Bonfire} />
                </div>
                <div className='column'>
                    <a href='#'>Contact</a>
                </div>
                <div className='column'>
                    <a href='#'>About</a>
                </div>
                <div className='column'>
                    <a href='#'>Resources</a>
                </div>
                
                    <div className='column'>
                        <img class=" ui mini image" src={FacebookIcon} />
                    </div>
                    <div className='column'>
                        <img class=" ui mini image" src={TwitterIcon} />
                    </div>
                    <div className='column'>
                        <img class=" ui mini image" src={InstagramIcon} />
                    
                </div>
            </div>
        </Segment>

    )
}

export default FooterComponent
