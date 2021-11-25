import React from 'react'
import MobileNavbar from './MobileNavbar'
import NormalNavbar from './NormalNavbar'
import classes from './NavBar.module.css'

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <NormalNavbar />
            <MobileNavbar />
        </div>
    )
}

export default Navbar
