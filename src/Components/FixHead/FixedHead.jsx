import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const FixedHead = () => {

    const [position, setPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setPosition(window.scrollY)
            

            return () => {
                
                window.removeEventListener('scroll',() => {});
              };
        })
    },[])

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }
    const changeClass = () => {
        if (position < 100) {
            
          return 'hidden';
          
        } else {
            
          return 'fixed-header';
          
        }
      };
    
  return (
    <div className={changeClass()} >
        <div>
          <nav>
              <NavLink onClick={scrollToTop} to="/">Home</NavLink>
              <NavLink onClick={scrollToTop} to="/services">Service</NavLink>
              <NavLink onClick={scrollToTop} to="/News">News</NavLink>
              <NavLink onClick={scrollToTop} to="/Contacts">Contact</NavLink>       
          </nav>
        </div>
        
        
    </div>
  )
}

export default FixedHead