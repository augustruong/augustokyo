import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import logo from '../logo.svg';

import './Header.css'

export default function App() {
    const [clicked,setClicked] = useState(false)
    const [currentLang,setCurrentLang] = useState("")
    const [newLang,setNewLang] = useState("")
    const location = useLocation()
    
    //set language
    useEffect(() => {
        if (document.documentElement.lang === 'en') {setCurrentLang('en'); setNewLang('ja')}
        else {setCurrentLang('ja'); setNewLang('en')}
    })

    //scroll to section
    //https://stackoverflow.com/questions/61779236/how-to-navigate-to-another-page-with-a-smooth-scroll-on-a-specific-id-with-react
    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location,])

    return(
        <header id='header'>
            <NavLink to='/' className='header__logo'>
                <img src={logo} className='logo-svg'/>
            </NavLink>

            <div className='menu-icon' onClick={() => setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <nav className={clicked ? 'header__menu active' : 'header__menu'}>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <Link to='/#about'  className='nav__link'>About</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/#storyPosts'  className='nav__link'>Posts</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/#gallery'  className='nav__link'>Gallery</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/#contact'  className='nav__link'>Contact</Link>
                    </li>
                </ul>
            </nav>

        {window.innerWidth > 960 &&
            <div className='header__options'>
                <div className='options__sound'>
                    <a className='sound-icon'>
                        <img src={process.env.PUBLIC_URL + `./assets-icons/fi_volume-on.svg`}/>
                    </a>
                </div>
                {/* <div className='options__lang'>
                    <div className='current__lang' onClick={() => {
                        // let preLang = currentLang;
                        setCurrentLang(newLang); 
                        setNewLang(currentLang)
                    }}>
                        {newLang === 'en' && 
                            <NavLink to='/'>{newLang}</NavLink>
                        }
                        {newLang === 'ja' && 
                            <NavLink to='/ja'>{newLang}</NavLink>
                        }
                    </div>
                </div> */}
            </div>
        }
        </header>    
    )
}