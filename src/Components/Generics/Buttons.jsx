import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({type,text,url}) => {

    const getButtonClassName = () => {
        switch(type){
            case ('yellow'):
                return 'btn-yellow'
            case ('trans'):
                return 'btn-transparent'
            default:
                return 'btn-yellow'
        }
            
    }

  return (
    <NavLink className={getButtonClassName()} to={url}>
        {text}
        <i className="fa-regular fa-arrow-up-right"></i>
        </NavLink>
  )
}

export default Button