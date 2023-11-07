import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({title,description, url}) => {
  return (
    <div className="box1">
        <div className="streck"></div>
        <h2>{title}</h2>
         <p>{description}</p>
        <Link className="box1-knapp" to={url}><i className="fa-light fa-arrow-right"></i></Link>
    </div>
  )
}

export default ServiceBox