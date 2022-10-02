import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp,faVolumeMute } from '@fortawesome/free-solid-svg-icons'

import logo__white from '../logo-white.svg';
import logo__black from '../logo-black.svg';

import './Header.css'

const styles: {[key: string]: React.CSSProperties} = {
    black: {
        color: "#000",
        fontWeight: 500
    },
    white: {
        color: "#fff",
        fontWeight: 300
    }
}


export default function Header() {
    const [navColor, setNavColor] = useState('')
    const [clicked,setClicked] = useState(false)
    const [currentLang,setCurrentLang] = useState("")
    const [newLang,setNewLang] = useState("")
    const location = useLocation()
    
    
    useEffect(() => {
        //set language
        if (document.documentElement.lang === 'en') {setCurrentLang('en'); setNewLang('ja')}
        else {setCurrentLang('ja'); setNewLang('en')}

        //set nav color
        const urlHash = window.location.hash;
        if (urlHash.substring(0,6) === "#/post") {setNavColor('black')} else {setNavColor('white')}
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
        <header id='header' style={{color:`${navColor}`}}>
            <NavLink to='/' className='header__logo'>
                {navColor === "white" && 
                    <img src={logo__white} className='logo-svg'/>
                }
                {navColor === "black" && 
                    <img src={logo__black} className='logo-svg'/>
                }
            </NavLink>

            <div className='menu-icon' onClick={() => setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <nav className={clicked ? 'header__menu active' : 'header__menu'}>
                {navColor === "black" && 
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <Link to='/#hp_about'  className='nav__link' onClick={() => setClicked(false)} style={styles.black}>About</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/#hp_storyPosts'  className='nav__link' onClick={() => setClicked(false)} style={styles.black}>Posts</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/#hp_gallery'  className='nav__link' onClick={() => setClicked(false)} style={styles.black}>Gallery</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/#hp_contact'  className='nav__link' onClick={() => setClicked(false)} style={styles.black}>Contact</Link>
                        </li>
                    </ul>
                }
                {navColor === "white" && 
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <Link to='/#hp_about'  className='nav__link' onClick={() => setClicked(false)} style={styles.white}>About</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/#hp_storyPosts'  className='nav__link' onClick={() => setClicked(false)} style={styles.white}>Posts</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/#hp_gallery'  className='nav__link' onClick={() => setClicked(false)} style={styles.white}>Gallery</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/#hp_contact'  className='nav__link' onClick={() => setClicked(false)} style={styles.white}>Contact</Link>
                        </li>
                    </ul>
                }
            </nav>

        {window.innerWidth > 960 &&
            <div className='header__options'>
                <div className='options__sound'>
                    <FontAwesomeIcon icon={faVolumeUp} />
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