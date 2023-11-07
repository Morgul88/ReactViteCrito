
import { NavLink } from 'react-router-dom'
import React, {useEffect , useState } from 'react'

const ScrollToTopArrow = () => {
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
    
    
  return (
    <div className={position < 100 ? 'hidden-arrow' : 'scroll-up-arrow'}>
        <div>
            <NavLink className='scroll-up-arrow' onClick={scrollToTop}><i className='fa-solid fa-arrow-up fa-xl' style={{ color: '#000205' }}></i></NavLink>
        </div>
    </div>
    
  )
}

export default ScrollToTopArrow