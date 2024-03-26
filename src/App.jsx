import { useEffect } from 'react';
import './App.css'
import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom';
import FeaturedPage from './pages/Featured/FeaturedPage';
import Login from './components/login/Login';
import Blogcontainer from './pages/blog/Blogcontainer';
import Singleblogpage from './pages/blog/Singleblogpage';
import About from './pages/home/About';
import Aboutpage from './pages/About/Aboutpage';
import Contactpage from './pages/Contact/Contactpage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feature' element={<FeaturedPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blogcontainer />} />
        <Route path='/singleblog' element={<Singleblogpage />} />
        <Route path='/contact' element={<Contactpage/>}/>
        <Route path="/about-us" element={<Aboutpage/>} />
      </Routes>

    </>
  )
}

export default App
