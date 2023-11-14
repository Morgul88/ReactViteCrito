import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleAndNews from '../ArticleAndNews/ArticleAndNews';
import NewsAndArticleBar from '../ArticleAndNews/NewsAndArticleBar';
import { useArticles } from '../../Context/ArticleContext';
import { Link } from 'react-router-dom';
const Newsdetailbox = () => {
    const { id } = useParams();
    const { article, getArticle, clearArticle } = useArticles();
    

    useEffect(() => {
        clearArticle();

        getArticle(id);
        
        
    }, [id]);
    
    const removeTime = (value) => {
        if (!value) {
          return ''; 
        }
    
        const myTime = value;
        const timeString = 'T00:00:00';
        const stringWithout = myTime.replace(timeString, '');
        
        return stringWithout;
      };
    
  return (
    
    <section className='Newsdetail' >
        <>
        <NewsAndArticleBar/>
        </>
        
        {article.imageUrl === (undefined) ? (<div className='Loading-bit'><h1>Loading....</h1></div>) :
        (<div className='container'>
            
            <div className='content-main-box'>
                
                <div className='oneside'>
                    <h1 className='Headcontent-news'>{article.title}</h1>
                    <div className='descriptions-article'>
                        <p>{removeTime(article.published)}</p>
                        <i className="fa-solid fa-circle fa-xs"></i>
                        <p>{article.category}</p>
                        <i className="fa-solid fa-circle fa-xs"></i>
                        <p>{article.author}</p>
                    </div>
                    <img className='image-newsdetail' src={article.imageUrl} alt="Bildbeskrivning" />
                    
                    

                    <div className='text-area'>
                            <p> 
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, 
                                magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                            </p>
                            <p>
                                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. 
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. 
                                uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. 
                                Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                                sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. 
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                Proin pharetra nonummy pede. Mauris et orci.
                            </p> 
                            <p>
                                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. 
                                Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.
                                Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                        </p>

                        <div className='quoted-text'>
                            <i className="fa-solid fa-quote-right"></i>
                            <p>

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
                                purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                            </p>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
                            Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                            sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. 
                            Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et 
                            malesuada fames ac turpis egestas.
                        </p>
                    </div>
                        
                    <div className="category-boxes">
                        <div className='my-link-content'><Link className='my-link' to="#">Digitalization</Link></div>
                        <div className='my-link-content'><Link className='my-link' to="#">School</Link></div>
                        <div className='my-link-content'><Link className='my-link' to="#">IT</Link></div>
                        <div className='my-link-content'><Link className='my-link' to="#">Design</Link></div>
                        <div className='my-link-content'><Link className='my-link' to="#">Work</Link></div>
                        <div className='my-link-content'><Link className='my-link' to="#">Tech</Link></div>
                    </div>
                </div>
                <div className='Otherside'>
                    
                    <div className='search-area-box'>
                        <input className="input-content-search" type="search" placeholder="Type of search..."/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className='recent-post'>
                        <h3>Recent Posts</h3>
                        <h4>How To Blow Through Capital At An Incredible Rate</h4>
                        <p>Jan 14, 2020</p>

                        
                        <h4>Design Studios That Everyone Should Know About?</h4>
                        <p>Jan 14, 2020</p>

                        
                        <h4>Design Studios That Everyone Should Know About?</h4>
                        <p>Jan 14, 2020</p>

                        
                        <h4>Figma On Figma: How We Built Our Website Design System</h4>
                        <p className='last-post'>Jan 14, 2020</p>
                    </div>
                    <div className='category-post'>
                        <h3>Categories</h3>
                        <div className='category-objects'>
                            <h4>Technology -</h4>
                            <p>20 Posts</p>
                        </div>
                        <div className='category-objects'>
                            <h4>FreeLancing -</h4>
                            <p>07 Posts</p>
                        </div>
                        <div className='category-objects'>
                            <h4>Writing -</h4>
                            <p>16 Posts</p>
                        </div>
                        <div className='category-objects'>
                            <h4>Marketing -</h4>
                            <p>11 Posts</p>
                        </div>
                        <div className='category-objects'>
                            <h4>Business -</h4>
                            <p>35 Posts</p>
                        </div>
                        <div className='category-objects'>
                            <h4>Education -</h4>
                            <p>14 Posts</p>
                        </div>
                        
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>)
        }
        
        <>
            <ArticleAndNews/>
        </>
        
    </section>
    
  )
  
}

export default Newsdetailbox