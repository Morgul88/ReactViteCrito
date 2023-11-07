import React, { useState, useEffect } from 'react';
import { Link,NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const ArticleAndNews = () => {
    const [value, setValue] = useState([]);
    const location = useLocation()

    useEffect(() => {
        ChangePost()

    },[])

    const ChangePost = async () => {
        
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        const data = await result.json()
        setValue(data)
        
    }

    return (
        <section className="article-and-news" style={{ backgroundColor: location.pathname === '/NewsDetail' ? '#f0efe9' : '' }}>
            
            <div className="container">

                <div className="content-group">
                    <div className="head">
                        <p>Article & News</p>
                    </div>
                    <div className="content-buttom">
                        <h2>Get Every Single Article & News</h2>
                        <Link className="btn-yellow" target="_blank" to="Browse-team.html">Browse Team <i className="fa-regular fa-arrow-up-right"></i></Link>
                    </div>
                </div>

                <div className="flex-content">
                   
                    {value.slice(0,3).map((items,index) => {
                        
                        {
                            return (
                                    
                                    <NavLink to={`/Newsdetailbox/${items.id}`} className="no-underline" key={index}>
                                        <div className="box1">
                                            <div className="image">
                                                <img className="pictures" src={items.imageUrl} alt="Women sitting on a chair next to a table" />
                                                <p>{items.category}</p>
                                                <h2>{items.title}</h2>
                                                <p>{items.content}</p>
                                                <div className="date">
                                                    <h4>25</h4>
                                                    <p className="month">mars</p>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                
                            );
                        }
                        
                        
                    })}

                </div>
                <div className="dots more">
                    <Link to="#"><i className="fa-solid fa-circle fa-xs"></i></Link>
                    <Link to="#"><i className="fa-solid fa-circle fa-xs"></i></Link>
                    <Link to="#"><i className="fa-solid fa-circle fa-xs"></i></Link>
                    <Link to="#"><i className="fa-solid fa-circle fa-xs"></i></Link>
                    <Link to="#"><i className="fa-solid fa-circle fa-xs"></i></Link>
                </div>

            </div>

        </section>
    );
}

export default ArticleAndNews;