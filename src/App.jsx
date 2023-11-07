import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Home from './Views/Home';
import News from './Views/News';
import './App.css';
import NotFound from './Views/Notfound'
import Footer from './Components/Footer/Footer';
import AutoScroll from './Components/AutoScrollToTop/AutoScroll';
import FixedHead from './Components/FixHead/FixedHead';
import Header from './Components/Header/Header';
import Contact from './Views/Contacts';
import ScrollToTopArrow from './Components/ScrollToTopArrow/ScrollToTopArrow';
import Newsdetailbox from './Components/NewsdetailBox/Newsdetailbox';

function App() {
  

  return (
  <React.StrictMode>
    
    <BrowserRouter>
      <AutoScroll/>
      <ScrollToTopArrow/>
      <FixedHead/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contact/>} />
        <Route path='/News' element={<News />} />
        <Route path='/Newsdetailbox/:id' element={<Newsdetailbox />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
  )
}

export default App
