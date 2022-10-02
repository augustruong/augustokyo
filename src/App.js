import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import AllPostPage from './pages/AllPostPage';
import GalleryPage from './pages/GalleryPage';
import PostPage from './pages/PostPage';

import './App.css';
import './keyframes.css';

export default function App() {  
  return (
    <>
    
      <Router>
        <Header navColor={'white'}/>

        <Routes>
          <Route path='/' element={<HomePage lang='en'/>} />

          <Route path='/allpost' element={<AllPostPage/>} />
          <Route path='/gallery' element={<GalleryPage/>}/>    

          <Route path='/post-0' element={<PostPage index={0}/>} />    
          <Route path='/post-1' element={<PostPage index={1}/>} />    
          <Route path='/post-2' element={<PostPage index={2}/>} />    
          <Route path='/post-3' element={<PostPage index={3}/>} />    
          <Route path='/post-4' element={<PostPage index={4}/>} />    
          <Route path='/post-5' element={<PostPage index={5}/>} />    
          <Route path='/post-6' element={<PostPage index={6}/>} />    
          <Route path='/post-7' element={<PostPage index={7}/>} />    
          <Route path='/post-8' element={<PostPage index={8}/>} />    
          <Route path='/post-9' element={<PostPage index={9}/>} />    
          <Route path='/post-10' element={<PostPage index={10}/>} />    

        </Routes>

        {/* <small className='copyright'>Copyright © 2022 August. All rights reserved.</small> */}
      </Router>
    </>
  );
}
