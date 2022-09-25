import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import './HomePage.css'
import HP_Topview from '../sections/HP_Topview';
import HP_About from '../sections/HP_About';
import HP_Posts from '../sections/HP_Posts';


export default function HomePage(props) {
    
    useEffect(() => {document.documentElement.lang = props.lang})

  return (
    <div id='home-page' className='dark-theme'>
        <HP_Topview/>
        <HP_About/>
        <HP_Posts/>

        <section id='gallery'>
            <div className='wrapper'>
                <div className='section-title'>Gallery</div>
                <div className='grid__wrapper'>
                    <div className='grid__item p1'></div>
                    <div className='grid__item p2'></div>
                    <div className='grid__item p3'></div>
                    <div className='grid__item p4'></div>
                    <div className='grid__item p5'>
                        <button>See all posts</button>
                    </div>
                </div>
            </div>
        </section>

        <section id='contact'>
            <div className='wrapper'>
                <div className='section-title'>Drop me a <span className='yellow'>‘Konichiwa’</span>!</div>
                <button>Konichiwa</button>
                <img src={process.env.PUBLIC_URL + `./images/homePage-footer.jpg`} />
            </div>
        </section>

    </div>
  )
}
