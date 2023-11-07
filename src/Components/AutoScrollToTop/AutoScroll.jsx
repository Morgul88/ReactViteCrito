import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AutoScroll = () => {
   const location = useLocation();
    useEffect(() => {
        window.scrollTo({top:0 , behavior:'smooth'})
    },[location.pathname])


    return null
}

export default AutoScroll