import React from 'react'
import img_backgroundlines from '../../assets/images/background-lines - Copy.svg'
import { NavLink } from 'react-router-dom'

const NewsAndArticleBar = () => {
  return (
    <div>
        <section className="News-and-article-bar">
        <img className="waves-news" src={img_backgroundlines} alt="waves"/>
            <div className="container">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Contacts">Contact</NavLink>
                    
                </nav>
                
                <h1>News & Article</h1>
            </div>
        </section>
    </div>
    
  )
}

export default NewsAndArticleBar