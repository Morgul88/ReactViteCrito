import React from 'react'
import img_paperz from '../../assets/images/paperz - Copy.svg'
import img_dorfus from '../../assets/images/dorfus - Copy.svg'
import img_martinos from '../../assets/images/martino - Copy.svg'
import img_square from '../../assets/images/square - Copy.svg'
import img_gobona from '../../assets/images/gobona - Copy.svg'
import LogoBox from './LogoBox'


const Logo = () => {
    
    const logos = [

        {url:"/paperz", src: img_paperz, alt:"Picture of Paperz"},
        {url:"/Dorfus", src:img_dorfus,alt:"Picture of Dorfus"},
        {url:"/Martinos", src:img_martinos,alt:"Picture of Matinos"},
        {url:"/Square", src:img_square,alt:"Picture of Square"},
        {url:"/Gobona", src:img_gobona,alt:"Picture of Gobona"}

    ]

    
  return (
    <div className="wrapper">
         <section className="logo">
            <div className="container">
                <div className="icons-content">
        
                {
                    logos.map((logos, index) => (
                    <LogoBox key={index} url={logos.url} src={logos.src} alt={logos.alt}/>
                ))
                }
                </div>
            </div>
        </section> 
    
    </div>
  )
}

export default Logo