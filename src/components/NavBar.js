import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

import './NavBar.css'

export default function NavBar(props) {

    return(
        <header id='header'>
            <NavLink to='/' className='header__logo'>
                <img src={logo} className='logo-svg'/>
            </NavLink>

            <nav className='header__menu'>
                <ul className='nav__list'>
                    <li>
                        <NavLink className='nav__item}'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='nav__item}'>
                            All Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='nav__item}'>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='nav__item}'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='header__options'>
                <div className='options__sound'>
                    <a className='sound-icon'>
                        <img src={process.env.PUBLIC_URL + `./assets-icons/fi_volume-on.svg`}/>
                    </a>
                </div>
                <div className='options__lang'>
                    <div className='current__lang'>
                        <a href='/'>EN</a>
                    </div>
                </div>
            </div>
        </header>
    )
}