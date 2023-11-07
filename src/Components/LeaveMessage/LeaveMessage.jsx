import React from 'react'

const Leavemessage = () => {
  return (
    <section className="leave-message">
    <div className="container">
        <a href="#" className="box1">
            <div className="rund-ruta">
                <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
            </div>
            <div className="content">
                <h2>Visit us</h2>
                <p>Sveavägen 31</p>
                <p>111 34 STOCKHOLM</p>
            </div>
        </a>
        <a href="#" className="box1">
            <div className="rund-ruta">
                <div className="icon"><i className="fa-solid fa-phone"></i></div>
            </div>
            <div className="content">
                <h2>Call us</h2>
                <p>+46 (8) 121 470 50</p>
                <p>+46 (8) 121 470 51</p>
            </div>
        </a>
        <a href="#" className="box1">
            <div className="rund-ruta">
                <div className="icon"><i className="fa-sharp fa-solid fa-envelope"></i></div>
            </div>
            <div className="content">
                <h2>Email us</h2>
                <p>info@crito.com</p>
                <p>support@crito.com</p>
            </div>
        </a>
        
    </div>
</section> 
  )
}

export default Leavemessage