import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuMobile = () => {
  return (
    <>
        <div className='menubar-mobile'>
            <NavLink onClick={() => setShowmenu(!showmenu)} to="/">Home</NavLink>
            <NavLink onClick={() => setShowmenu(!showmenu)} to="/services">Service</NavLink>
            <NavLink onClick={() => setShowmenu(!showmenu)} to="/News">News</NavLink>
            <NavLink onClick={() => setShowmenu(!showmenu)} to="/Contacts">Contact</NavLink>
        </div>
    </>
  )
}

export default MenuMobile