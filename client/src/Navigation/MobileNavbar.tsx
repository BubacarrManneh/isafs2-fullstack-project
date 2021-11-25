import React,{useState} from 'react'
import {CgMenuRound} from 'react-icons/cg'
import {RiCloseCircleLine} from 'react-icons/ri'
import NavLinks from './NavLinks'
import classes from './NavBar.module.css'

const MobileNavbar = () => {
    const [open, setOpen] = useState(false)

    const HamburgerIcon = <CgMenuRound className={classes.Hamburger} size="50px" color='white' onClick={(() => setOpen(!open))} />
    const closeIcon = <RiCloseCircleLine className={classes.Hamburger} size="50px" color="white" onClick={() => setOpen(!open)} />
    // const closeMobileMenu = setOpen(false)
    return (
        <nav className={classes.MobileNavbar}>
            
            {open ? closeIcon : HamburgerIcon}
            {open && <NavLinks />}
        </nav>
    )
}

export default MobileNavbar
