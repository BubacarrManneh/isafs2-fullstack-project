import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {TiSocialTwitter} from 'react-icons/ti'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialInstagram} from 'react-icons/ti'
import classes from './Footer.module.css'

const FooterLinks = () => {
    return (
        <div className={classes.Footer}>
            <footer className={classes.footer}>
                <span className="classes.copyright"><AiOutlineCopyrightCircle/>2021</span>
                <span className={classes.socialMedia}><TiSocialFacebook /></span>
                <span className={classes.socialMedia}><TiSocialTwitter/></span>
                <span className={classes.socialMedia}><TiSocialInstagram/></span>
                <address className={classes.address}>
                    <h2 className={classes.text}>Find Us</h2>
                    <p>Peace Road 15
                       palace building,
                       9915JS, Kingdom 
                    </p>
                </address>
            </footer>
        </div>
    )
}

export default FooterLinks
