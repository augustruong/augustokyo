import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import GalleryPage from './pages/GalleryPage';


import './App.css';
import './keyframes.css';


export default function App() {
  const [navColor, setNavColor] = useState('white')

  return (
    <>
      <HashRouter>
        <NavBar navColor={navColor}/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/post' element={<PostPage/>} />
          <Route path='/gallery' element={<GalleryPage/>} />       
        </Routes>

        {/* <p className='copyright'>Copyright © 2022 August. All rights reserved.</p> */}
      </HashRouter>
    </>
  );
}
