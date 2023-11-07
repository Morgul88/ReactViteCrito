import React from 'react'
import img_right_lines from '../../assets/images/background-lines-right - Copy.svg'

const Footer = () => {
  return (
        <footer>
        <section className="footer-content">
            
            <img className="right-wave" src={img_right_lines} alt="waves"/>
            
            <div className="container">
                <div className="flex-content">
                    <div className="logo-content">
                        <img src="images/Logo (3).svg" alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div className="links-content company">
                        <h2>Company</h2>
                        <a className="hover" href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Works</a>
                        <a href="#">Career</a>
                    </div>
                    <div className="links-content help">
                        <h2>Help</h2>
                        <a href="#">Costumer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="links-content resourses">
                        <h2>Resourses</h2>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                    <div className="links-content link">
                        <h2>Link</h2>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                </div>
            </div>

        </section>
            
            
        <section className="copyright-content">

            <div className="container">

                <div className="copyright">
                <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved. </p>
                    <div className="socialmedia-bar">
                
                        <a href="http://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="http://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                        <a href="http://instagram" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="http://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>

            </div>

        </section>
        
    </footer>   
  )
}

export default Footer