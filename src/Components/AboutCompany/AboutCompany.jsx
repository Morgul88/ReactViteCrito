import React from 'react'
import img_element from '../../assets/images/EWlement (2).svg'
import img_third from '../../assets/images/Image (13).svg'

const AboutCompany = () => {
  return (
    
    <section className="about-company">
    
    <div className="container">
        
        <div className="left-content">

            <div className="blue-box">
                <h2>Samantha Brown, <span>Founder</span></h2>
                <p>"Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit."</p>
            </div>
            <img className="white-box" src={img_element} alt="White-icon"/>
            <img className="women" src={img_third} alt="Women walking with a tablet"/>
            
        </div>
        
        <div className="content">

            <h2>About Company</h2>
            <h1>We Are Business Consulting & Credit Repair Experts</h1>
            <p className="highlight-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. </p>
            <p className="highlight-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. </p>
            
            <div className="rap">
                <div className="learn">
                    <a className="btn-yellow learn-more" target="_blank" href="learnmore.html">Learn more <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                <div className="play-knapp">
                    <a className="liten-lada" target="_blank" href="#">
                        <i className="fa-solid fa-play knapp no-anim"></i>
                        <i className="fa-solid fa-play fa-beat fa-lg anim"></i>
                    </a>
                    <p className="text">Video Intro</p>
                </div>
            </div>
            
        </div>

        
    </div>
    

</section>  

  )
}

export default AboutCompany