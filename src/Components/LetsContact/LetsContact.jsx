import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LetsContact = () => {
  return (
    <section className="Lets-connect">
        <div className="container">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contacts'>Contact</NavLink>
            </nav>
            
            <h1>Let's Connect</h1>
        </div>
    </section>
  )
}

export default LetsContact