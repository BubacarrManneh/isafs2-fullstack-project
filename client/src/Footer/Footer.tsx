import React from 'react'
import classes from './Footer.module.css'
import FooterLinks from './FooterLinks'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <FooterLinks />
        </div>
    )
}

export default Footer
