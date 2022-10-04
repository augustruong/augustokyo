import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ContactModal } from '../../components/ContactModal'

import './HP_Contact.css'


export default function HP_Contact() {
    const lang = document.documentElement.lang;
    const [showModal, setShowModal] = useState(false);

    return(
        <section id='hp_contact'>
            <div className='wrapper'>
                <div className='section-title'>Drop me a <span className='yellow'>'Konichiwa' </span>!</div>
                <button>
                    <div onClick={() => setShowModal(!showModal)}>
                        Konichiwa
                    </div>
                </button>
                <img src={process.env.PUBLIC_URL + `./images/homePage-footer.jpg`} />
            </div>
            <ContactModal showModal={showModal} setShowModal={setShowModal} />
        </section>
    )
}