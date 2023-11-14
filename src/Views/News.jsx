import React from 'react'
import Subscribe from '../Components/Subscribe/Subscribe'
import Newsbox from '../Components/NewsContent/Newsbox'
import NewsAndArticleBar from '../Components/ArticleAndNews/NewsAndArticleBar'

const News = () => {
  return (
    <div className="wrapper">
        
        <main>
            <NewsAndArticleBar/>
            <Newsbox/>
            <Subscribe/>
        </main>
        
    </div>
  )
}

export default News