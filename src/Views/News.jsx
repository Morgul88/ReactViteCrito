import React from 'react'

import Subscribe from '../Components/Subscribe/Subscribe'
import Newsbox from '../Components/NewsContent/Newsbox'

const News = () => {
  return (
    <div className="wrapper">
        
        <main>
            <Newsbox/>
            <Subscribe/>
        </main>
        
    </div>
  )
}

export default News