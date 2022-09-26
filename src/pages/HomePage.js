import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import './Pages.css'
import HP_Topview from '../sections/HP_Topview';
import HP_About from '../sections/HP_About';
import HP_Posts from '../sections/HP_Posts';
import HP_Gallery from '../sections/HP_Gallery';
import HP_Contact from '../sections/HP_Contact';


export default function HomePage(props) {
    
    useEffect(() => {document.documentElement.lang = props.lang})

  return (
    <div id='home-page' className='dark-theme'>
        <HP_Topview/>
        <HP_About/>
        <HP_Posts/>
        <HP_Gallery/>
        <HP_Contact/>
    </div>
  )
}
