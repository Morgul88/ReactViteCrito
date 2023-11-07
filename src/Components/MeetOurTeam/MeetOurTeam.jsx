import React from 'react'
import img_imageSeventeen from '../../assets/images/Image (17).png'
import img_imageprov from '../../assets/images/provapng.png'
import img_imageFifteen from '../../assets/images/Image (15).png'
import img_imageSixsteen from '../../assets/images/Image (16).png'
const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">

    <div className="container">

        <div className="head-liner">
            <div className="section-title">
                <p>Meet our Team</p>
                <h2>Experience Team Member</h2>
            </div>
            <div className="knapp">
                <a className="btn-yellow" target="_blank" href="Browse-team.html">Browse Team <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
        <div className="grid-content">

            <a href="#" className="picture-content">
                <img className="bild1" src={img_imageSeventeen} alt="Picture ofKristine Palmer"/>
                <h5>Krinstine palmer</h5>
                <p>Chef Operation Officer</p>
            </a>
            <a href="#" className="picture-content">
                <img className="bild2" src={img_imageprov} alt="Picture of Mark aubri"/>
                <h5>Mark Aubri</h5>
                <p>Senior COnsultant</p>
            </a>
            <a href="#" className="picture-content">
                <img className="bild3" src={img_imageFifteen} alt="Picture of Kimberly Hansen"/>
                <h5>Kimberly Hansen</h5>
                <p>Senios Consultant</p>
            </a>
            <a href="#" className="picture-content">
                <img className="bild4" src={img_imageSixsteen} alt="Picture of Justin Willoman"/>
                <h5>Justin WIlloman</h5>
                <p>Senios Tech Consultant</p>
            </a>

        </div>
        <div className="dots">
            <a href="#"><i className="fa-solid fa-circle fa-xs"></i></a>
            <a href="#"><i className="fa-solid fa-circle fa-xs"></i></a>
            <a href="#"><i className="fa-solid fa-circle fa-xs"></i></a>
            <a href="#"><i className="fa-solid fa-circle fa-xs"></i></a>
            <a href="#"><i className="fa-solid fa-circle fa-xs"></i></a>
            
        </div>

    </div>  
</section>
  )
}

export default MeetOurTeam