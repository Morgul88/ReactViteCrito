import React from 'react'
import img_backgroundlines from '../../assets/images/background-lines - Copy.svg'
import img_maninsuit from '../../assets/images/showcase-image.svg'
import Button from '../Generics/Buttons'



const Showcase = () => {
  return (
    <section className="showcase">
            
        <img className="waves" src={img_backgroundlines} alt="waves"/>
        
        <div className="container">
            <div className="content">
                <h1>We provide The Best business solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Button text="Get Consulting" url="/services/get-consulting"/>
                <Button text="Learn more" url="/services/learn-more"/>
                
            </div>
            <img src={img_maninsuit} alt="Image of a man in a suit with a tablet"/>
        </div>
    </section>
  )
}

export default Showcase