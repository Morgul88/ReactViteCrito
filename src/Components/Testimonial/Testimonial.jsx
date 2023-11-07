import React from 'react'
import img_four from '../../assets/images/Image (4).svg'
import img_three from '../../assets/images/Image (3).svg'
import img_two from '../../assets/images/Image (2).svg'

const Testimontial = () => {
  return (
    <section className="testimonial">

    <div className="container">

        <div className="section-title">
            <p>Testimonial</p>
            <h2>What our Client say</h2>
        </div>
        <div className="grid-content">
            <div className="box1">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                
            </div>
            <div className="box2">
                <div className="liten-box">
                    <img src={img_four} alt="Picture of Cassandra Warren"/>
                    <div className="small-content">
                        <h4>Cassandra Warren</h4>
                        <p>Buisness Manager, Dorfus</p>
                    </div>
                </div>
            </div>
            <div className="box3">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                
            </div>
            <div className="box4">
                <div className="liten-box">
                    <img src={img_three} alt="Picture of Amanda Tulling"/>
                    <div className="small-content">
                        <h4>Amanda Tulling</h4>
                        <p>Senior developer, Square</p>
                    </div>
                    
                </div>
            </div>
            <div className="box5">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                
            </div>
            <div className="box6">
                <div className="liten-box">
                    <img src={img_two} alt="Picture of Jack McDogglas"/>
                    <div className="small-content">
                        <h4>Jack Mcdogglas</h4>
                        <p>Key account Manager, Gobona</p>
                    </div>
                    
                </div>
            </div>

        </div>
        <div className="knapp">
            <a className="btn-yellow" target="_blank" href="projects.html">All Reviews <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>

    </div>
</section> 
  )
}

export default Testimontial