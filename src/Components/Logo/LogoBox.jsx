import React from 'react'
import { Link } from 'react-router-dom'


const LogoBox = ({url,src,alt}) => {
  
  return (
    <div className="wrapper">
        <div className="paperz">
          <Link to={url}><img src={src} alt={alt}/></Link>
        </div>
    </div>
  )
}

export default LogoBox