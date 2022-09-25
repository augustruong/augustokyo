import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import GalleryPage from './pages/GalleryPage';


import './App.css';
import './keyframes.css';


export default function App() {
  const [navColor, setNavColor] = useState('white');

  return (
    <>
      <HashRouter>
        <NavBar navColor={navColor}/>

        <Routes>
          <Route path='/' element={<HomePage lang='en'/>} />
          <Route path='/ja' element={<HomePage lang='ja'/>} />

          <Route path='/post' element={<PostPage lang='en'/>} />
          <Route path='/ja/post' element={<PostPage lang='ja'/>} />

          <Route path='/gallery' element={<GalleryPage lang='en'/>} />    
          <Route path='/ja/gallery' element={<GalleryPage lang='ja'/>} />

        </Routes>

        {/* <small className='copyright'>Copyright © 2022 August. All rights reserved.</small> */}
      </HashRouter>
    </>
  );
}
