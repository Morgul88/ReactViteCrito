import React from 'react'
import img_element from '../../assets/images/Element.svg'

const Subscribe = () => {
  return (
    <section className="Subscribe">

    <img className="icon" src={img_element} alt="icon-scetch"/>

    <div className="container">
        <h1>Get News Updates By Signup</h1>
        <div className="sub">
            <form action="post" className="sub-mail">
                <input className="input-content" type="email" placeholder="username@domain.com*"/>
            </form>
            <a className="btn-yellow" target="_blank" href="projects.html">Subscribe <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </div>
    
</section>  
  )
}

export default Subscribe