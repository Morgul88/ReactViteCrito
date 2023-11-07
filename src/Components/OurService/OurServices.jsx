import React from 'react'
import ServiceBox from './ServiceBox'
import Button from '../Generics/Buttons'
import img_waves from '../../assets/images/Group 1000001426 (2).png'

const Services = () => {
  
  const services = [
    {title: "Buisness advise", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/Business/advice"},
    {title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/Startup-buisness/advice"},
    {title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/Financial Advice/advice"},
    {title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/Risk Management/advice"},
    
  ]

  return (
    <section className="our-services">

    <div className="waves">
        <img className="waves" src={img_waves} alt="picture of waves"/>
    </div>
    <div className="container">
        <div className="content-text">
            <h2>Services</h2>
            <h1>We Provide The <br />Best Service For Consulting</h1>
            
        </div>

        <div className="stor-box">
            
            {
              services.map((service, index) => (
                <ServiceBox key={index} title={service.title} description={service.description} url={service.url}/>
              ))
            }
            
            
        </div>

        <div className="ensam-knapp">
            <div className="browse-services-knapp">
                <Button type="trans" text="Browse services" url="/services"/>
            </div>
        </div>
        
    </div>
</section>    
  )
}

export default Services