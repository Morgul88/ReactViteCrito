import React from 'react'
import img_damerna from '../../assets/images/damerna.png'
const WhyChooseUs = () => {
  return (
    <section className="Why-choose-us">
            
    <div className="container">
        <div className="box1">
            <div className="huvud-text">
                <h2>Why choose us</h2>
                <h1>Why We Are The <br/>Best Business Consulting Agency</h1>
            </div>
                
            <a href="#" className="process">
                <div className="text-under-content">
                    
                    <div className="content">
                        <div className="circle">
                            <i className="fa-regular fa-thumbs-up fa-2xl no-anim"></i>
                            <i className="fa-regular fa-thumbs-up fa-bounce fa-2xl anim"></i>
                        </div>
                        
                        <div className="text-content">
                            <h6>Process Excellence</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="process">
                <div className="text-under-content">
                    
                    <div className="content">
                        <div className="circle">
                            <i className="fa-light fa-gem fa-2xl no-anim"></i>
                            <i className="fa-light fa-gem fa-shake fa-2xl anim"></i>
                        </div>
                        
                        <div className="text-content">
                            <h6>Strategic planning</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="process">
                <div className="text-under-content">
                    
                    <div className="content">
                        <div className="circle">
                            <i className="fa-sharp fa-regular fa-pen-nib fa-2xl no-anim"></i>
                            <i className="fa-sharp fa-regular fa-pen-nib fa-shake fa-2xl anim"></i>
                        </div>
                        
                        <div className="text-content">
                            <h6>Experience Design</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="process">
                <div className="text-under-content">
                    
                    <div className="content">
                        <div className="circle">
                            <i className="fa-light fa-head-side-gear fa-2xl no-anim"></i>
                            <i className="fa-light fa-head-side-gear fa-spin fa-2xl anim"></i>
                        </div>
                        
                        <div className="text-content">
                            <h6>Artificial Intelligence</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div className="box2">
            
            <img className="bild" src={img_damerna} alt="Picture of two women talking in front of tablet"/>
            
            <div className="under">
        
            </div>
        </div> 
    </div>
      
</section>
  )
}

export default WhyChooseUs