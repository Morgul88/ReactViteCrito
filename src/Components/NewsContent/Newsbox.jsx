import React from 'react'
import { useState,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useArticles } from '../../Context/ArticleContext';

const Newsbox = () => {

    const { articles } = useArticles()
    
    
    const convertDay = (value) => {

        let newResult = new Date(value);
        console.log(newResult)
        const resultDay=  newResult.getDate();
        console.log(resultDay)
        return resultDay;
        
    }
    const convertMonth = (value) => {

        const date = new Date(value);
        const month = date.toLocaleString('default', { month: 'long' });
        
        return month;
        
    }
    
    return (
        articles.length > 0 ?
                ( <section className="article-and-news">
                            
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
                        
                        {articles.map((item,index) => (
                            <NavLink to={`/Newsdetailbox/${item.id}`} className="no-underline" key={index}>
                            <div className="box1">
                                <div className="image-box">
                                    <img className="pictures" src={item.imageUrl} alt="Women sitting on a chair next to a table" />
                                    <p>{item.category}</p>
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                    <div className="date">
                                        <h4>{convertDay(item.published)}</h4>
                                        <p className="month">{convertMonth(item.published)}</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        ))}
                        

                    </div>
                    <div className="dots more">
                        <Link to="#"><i className="fa-solid fa-circle fa-xs"></i></Link >
                        <Link  to="#"><i className="fa-solid fa-circle fa-xs"></i></Link >
                        <Link  to="#"><i className="fa-solid fa-circle fa-xs"></i></Link >
                        <Link  to="#"><i className="fa-solid fa-circle fa-xs"></i></Link >
                        <Link  to="#"><i className="fa-solid fa-circle fa-xs"></i></Link >
                    </div>

                </div>

            </section>)
            :
            (<div className='Loading-bit'><h1>Loading...</h1></div>)

        
           
    )  
        
}

export default Newsbox