import React from 'react';
import { NavLink } from 'react-router-dom';

import './HP_Contact.css'


export default function HP_Contact() {
    const lang = document.documentElement.lang;

    return(
        <section id='hp_contact'>
            <div className='wrapper'>
                <div className='section-title'>Drop me a <span className='yellow'>'Konichiwa' </span>!</div>
                <button>
                    <NavLink to='/'>
                        Konichiwa
                    </NavLink>
                </button>
                <img src={process.env.PUBLIC_URL + `./images/homePage-footer.jpg`} />
            </div>
        </section>
    )
}