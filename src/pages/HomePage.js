import React, { useState,useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import './Pages.css'
import HP_Topview from '../sections/HomePageSections/HP_Topview';
import HP_About from '../sections/HomePageSections/HP_About';
import HP_Posts from '../sections/HomePageSections/HP_Posts';
import HP_Gallery from '../sections/HomePageSections/HP_Gallery';
import HP_Contact from '../sections/HomePageSections/HP_Contact';

export default function HomePage(props) {    
  useEffect(() => {document.documentElement.lang = props.lang})
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='dark-theme'>
      <div id='home-page'>
          <HP_Topview/>
          <HP_About/>
          <HP_Posts/>
          <HP_Gallery/>
          <HP_Contact/>

      </div>
    </div>
  )
}
