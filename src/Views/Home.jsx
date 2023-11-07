import React from 'react'
import Showcase from '../Components/Showcase/Showcase'
import OurServices from '../Components/OurService/OurServices'
import Logo from '../Components/Logo/Logo'
import Features from '../Components/Features/Features'
import AboutCompany from '../Components/AboutCompany/AboutCompany'
import ProjectAndCase from '../Components/ProjectAndCase/ProjectAndCase'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import MeetOurTeam from '../Components/MeetOurTeam/MeetOurTeam'
import Testimontial from '../Components/Testimonial/Testimonial'
import ArticleAndNews from '../Components/ArticleAndNews/ArticleAndNews'
import Subscribe from '../Components/Subscribe/Subscribe'

const Home = () => {
  return (
    <div className="wrapper">
        
        <main>
            <Showcase/>
            <Logo/>
            <Features/>
            <AboutCompany/>
            <OurServices />
            <WhyChooseUs/>
            <ProjectAndCase/>
            <MeetOurTeam/>
            <Testimontial/>
            <ArticleAndNews/>
            <Subscribe/>
        </main>
        
    </div>
  )
}

export default Home