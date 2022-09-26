import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import AllPostPage from './pages/AllPostPage';
import GalleryPage from './pages/GalleryPage';


import './App.css';
import './keyframes.css';

export default function App() {
  const [navColor, setNavColor] = useState('white');

  return (
    <>
      <Router>
        <Header navColor={navColor}/>

        <Routes>
          <Route path='/' element={<HomePage lang='en'/>} />
          {/*<Route path='/ja' element={<HomePage lang='ja'/>} />*/}

          <Route path='/allpost' element={<AllPostPage lang='en'/>} />
          <Route path='/gallery' element={<GalleryPage lang='en'/>} />    

        </Routes>

        {/* <small className='copyright'>Copyright © 2022 August. All rights reserved.</small> */}
      </Router>
    </>
  );
}
