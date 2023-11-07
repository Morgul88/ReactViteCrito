import React from 'react'

const FeaturesBox = ({className,title,description}) => {
  return (
    
        <div className="content-box">
                        
             <i className={className}></i>
                        
            <h6>{title}</h6>
             <p>{description}.</p> 
        </div>
    
  )
}

export default FeaturesBox