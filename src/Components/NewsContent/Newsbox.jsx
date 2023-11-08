import React from 'react'
import { useState,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Newsbox = () => {
    const [value, setValue] = useState([]);
    
    useEffect(() => {
        
        ChangePost()
    },[])

    const ChangePost = async () => {
        
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        const data = await result.json()
        setValue(data)
      
    }
    
    const convertDay = (value) => {

        let newResult = new Date(value);
        const resultDay=  newResult.getDate();
        console.log(resultDay)
        return resultDay;
        
    }
    const convertMonth = (value) => {

        const date = new Date(value);
        const month = date.toLocaleString('default', { month: 'long' });
        console.log(month)
        return month;
        
    }

    return (
        <section className="article-and-news">
            
            <div className="container">

                <div className="content-group">
                    <div className="head">
                        <p>Article & News</p>
                    </div>
                    <div className="content-buttom">
                        <h2>Get Every Single Article & News</h2>
                        <a className="btn-yellow" target="_blank" href="Browse-team.html">Browse Team <i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>

                <div className="flex-content">
                    
                    {value.map((items,index) => {
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
                                                    <h4>{convertDay(items.published)}</h4>
                                                    <p className="month">{convertMonth(items.published)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                
                            );
                        }
                        // return null; // Om id inte finns i listan, returnera inget
                    })}
                    

                </div>
                <div className="dots more">
                    <Link to="#"><i className="fa-solid fa-circle fa-xs"></i></Link >
                    <Link  to="#"><i className="fa-solid fa-circle fa-xs"></i></Link >
                    <Link  to="#"><i className="fa-solid fa-circle fa-xs"></i></Link >
                    <Link  to="#"><i className="fa-solid fa-circle fa-xs"></i></Link >
                    <Link  to="#"><i className="fa-solid fa-circle fa-xs"></i></Link >
                </div>

            </div>

        </section>
        
    );
}

export default Newsbox