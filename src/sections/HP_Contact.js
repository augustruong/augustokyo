import React from 'react';

import './HP_Contact.css'


export default function HP_Contact() {
    const lang = document.documentElement.lang;

    return(
        <section id='contact'>
            <div className='wrapper'>
                <div className='section-title'>Drop me a <span className='yellow'>ÅeKonichiwaÅf</span>!</div>
                <button>Konichiwa</button>
                <img src={process.env.PUBLIC_URL + `./images/homePage-footer.jpg`} />
            </div>
        </section>
    )
}