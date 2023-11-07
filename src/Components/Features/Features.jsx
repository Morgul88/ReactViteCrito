import React from 'react'
import FeaturesBox from './FeaturesBox'

const Features = () => {

    const boxes_first = [
        {className:"fa-solid fa-handshake", title:"We provide The Best business solutions", description:"Establish your vision and value proposition and turn them into testable prototypes."},
        {className:"fa-solid fa-chart-mixed-up-circle-dollar", title:"We provide The Best business solutions", description:"Establish your vision and value proposition and turn them into testable prototypes."},
    ]
    const boxes_second = [
        {className:"fa-regular fa-lightbulb", title:"We provide The Best business solutions", description:"Establish your vision and value proposition and turn them into testable prototypes."},
        {className:"fa-light fa-folder-gear", title:"We provide The Best business solutions", description:"Establish your vision and value proposition and turn them into testable prototypes."},
    ]
  return (
   
            
        <section className="features">
            <div className="container">
                <div className="content-lada">
                    <p className="highlight-text">Features</p>
                    <h5>Our Accounting is trusted by thousand of companies</h5>
                    
                    <a className="btn-long long" href="consulting.html">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
                    
                </div>
                <div className="content">
                    
                    {
                        boxes_first.map((boxes_first,index) => (
                            <FeaturesBox key={index} className={boxes_first.className} title={boxes_first.title} description={boxes_first.description}/>
                        ))
                    }
               
                </div>
                <div className="content">

                   
                    
                    {
                        boxes_second.map((boxes_second,index) => (
                            <FeaturesBox key={index} className={boxes_second.className} title={boxes_second.title} description={boxes_second.description}/>
                        ))
                    }
                
                </div> 
            </div>
        </section>
     
  
  )
}

export default Features