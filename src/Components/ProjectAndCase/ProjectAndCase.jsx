import React from 'react'
import { Link } from 'react-router-dom'
import img_imagefour from '../../assets/images/Image (4).png'
import img_imagewfive from '../../assets/images/Image (5).png'
import img_imageSix from '../../assets/images/Image (6).png'
import img_imageSeven from '../../assets/images/Image (7).png'

const ProjectAndCase = () => {
  return (
    <section className="project-and-case">

    <div className="container">

        <div className="section-title">
            <p>Project & Case Studies</p>
            <h2>Let’s Looks Our Global Projects</h2>
        </div>
        <div className="project-and-cases">
            <Link className="project" href="#">
                <img src={img_imagefour} alt="A man reading a newspaper"/>
                <h3>Grow your buisness</h3>
                <div className="readmore">Read more<i className="fa-regular fa-arrow-up-right"></i></div>
                
            </Link>
            <Link className="project" href="#">
                <img src={img_imagewfive} alt="Pink apple products on a desk"/>
                <h3>Why your client needs a responsive website</h3>
                <div className="readmore">Read more<i className="fa-regular fa-arrow-up-right"></i></div>
            </Link>
            <Link className="project" href="#">
                <img src={img_imageSix} alt="Desk with office supplies"/>
                <h3>Educate your employees to get better results</h3>
                <div className="readmore">Read more<i className="fa-regular fa-arrow-up-right"></i></div>
            </Link>
            <Link className="project" href="#">
                <img src={img_imageSeven} alt="Laptop with business intelligence insight"/>
                <h3>Business insights is a important piece of your business</h3>
                <div className="readmore">Read more<i className="fa-regular fa-arrow-up-right"></i></div>
            </Link>
        </div>
        <div className="knapp">
            <Link className="btn-yellow" target="_blank" href="projects.html">All recent projects <i className="fa-regular fa-arrow-up-right"></i></Link>
        </div>
        
    </div>
</section> 
  )
}

export default ProjectAndCase