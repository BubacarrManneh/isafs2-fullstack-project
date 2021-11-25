
import React from 'react'
import NavLinks from './NavLinks'
import classes from './NavBar.module.css'

const NormalNavbar = () => {
    return (
        <nav>
            <nav className={classes.NormalNavbar}>
                <NavLinks />
            </nav>
        </nav>
    )
}

export default NormalNavbar
