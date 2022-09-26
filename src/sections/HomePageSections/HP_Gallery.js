import React from 'react';
import { NavLink } from 'react-router-dom';

import './HP_Gallery.css'


export default function HP_Gallery() {
    const lang = document.documentElement.lang;

    return(
        <section id='hp_gallery'>
            <div className='wrapper'>
                <div className='section-title'>Gallery</div>
                <div className='grid__wrapper'>
                    <div className='grid__item p1'></div>
                    <div className='grid__item p2'></div>
                    <div className='grid__item p3'></div>
                    <div className='grid__item p4'></div>
                    <div className='grid__item p5'>
                        <button>
                            <NavLink to='/gallery'>
                                See all pics
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}