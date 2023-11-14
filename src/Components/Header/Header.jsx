
import React, { useState } from 'react'
import img_logo from '../../assets/images/Logo (2).svg'
import Button from '../Generics/Buttons'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MenuMobile from './menumobile'


const Header = () => {

    const [showmenu, setShowmenu] = useState(false)
    const [changeMode, setChangeMode] = useState(false)

  return (
    
    <>
        {showmenu ? (<MenuMobile/>) : (<></>) }
        <header>
            <div className="container">
                <button onClick={() => setShowmenu(!showmenu)} className="btn-menubars"> 
                    {showmenu ? <i className="fa-solid fa-bars"style={{color : 'white'}} ></i> : <i className="fa-solid fa-bars"style={{color : 'black'}} ></i>}  
                </button>
                <div className="logotype">
                    <Link to="index.html" className="logotype"><img src={img_logo} alt="logo"/></Link>
                </div>
                <div className="contactinformation-bar">
                    <div className="content-box">
                        <i className="fa-regular fa-phone-volume"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="content-box">
                        <i className="fa-regular fa-envelope"></i>
                        Info@crito.com
                    </div>
                    <div className="content-box last">
                        <i className="fa-sharp fa-light fa-location-dot"></i>
                        Sveavägen 31,111 34 STOCKKHOLM
                    </div>
                    
                </div>
                <div className="socialmedia-bar">
                    
                    <Link to="http://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="http://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="http://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="http://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
                <div className="menu">
                    
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Service</NavLink>
                        <NavLink to="/News">News</NavLink>
                        <NavLink to="/Contacts">Contact</NavLink>
                        
                    </nav>

                    
                    <div className="loginknapp">
                        <Button type="yellow" text="Login" url="/login" />
                    </div> 
                    
                </div>
                
            </div>
        </header>
    </>
    
  )
}

export default Header