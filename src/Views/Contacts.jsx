import React from 'react'

import LetsContact from '../Components/LetsContact/LetsContact'
import Leavemessage from '../Components/LeaveMessage/LeaveMessage'
import LeaveMessageCard from '../Components/LeaveMessageCard/LeaveMessageCard'
import Map from '../Components/Map/Map'

const Contact = () => {
  return (
    <div className="wrapper">
        
        <main>
          <LetsContact/>
          <Leavemessage/>
          <LeaveMessageCard/>
          <Map/>
        </main>
        
    </div>
  )
}

export default Contact