import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import logo from '../logo.svg';

import './NavBar.css'

export default class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            menuIcon:"",
            color: false,
            show: true,
            logoShow: true,
            scrollPos: 0
        }
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    closeMobileMenu = () => {
        this.setState({clicked: false})
    }
    handleResize = () => {
        if (window.innerWidth <= 960) {this.setState({menuIcon: true})}
        else {this.setState({menuIcon: false})}
    }

    handleScroll = () => {
        // show/hide logo mob
        if (window.scrollY >= 100) {
            this.setState({logoShow:false})
        } else {
            this.setState({logoShow:true})
        }

        //close mobile menu 
        this.setState({clicked: false})
    }

    changeDisplay = () => {this.setState({show: true})}

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("scroll", this.closeMobileMenu);

        window.addEventListener("resize",this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);

        window.addEventListener("resize",this.handleResize);
    }

    render() {
        return(
                    <header id='header'>
                        <NavLink to='/' className={this.state.logoShow ? 'header__logo show' : 'header__logo hidden'}>
                            <img src={logo} className='logo-svg'/>
                        </NavLink>

                        <div className='menu-icon' onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        

                        <nav className={this.state.clicked ? 'header__menu active' : 'header__menu'}>
                            <ul className='nav__list'>
                                <li className='nav__item'>
                                    <Link to='aboutMe' className='nav__link' activeClassName="active" spy={true} offset={50} duration={500}>
                                        About
                                    </Link>
                                </li>
                                <li className='nav__item'>
                                    <Link to='storyPosts' className='nav__link' activeClassName="active" spy={true} offset={50} duration={500}>
                                        Posts
                                    </Link>
                                </li>
                                <li className='nav__item'>
                                    <Link to='gallery' className='nav__link' activeClassName="active" spy={true} offset={50} duration={500}>
                                        Gallery
                                    </Link>
                                </li>
                                <li className='nav__item'>
                                    <Link to='contact' className='nav__link' activeClassName="active" spy={true} offset={50} duration={500}>
                                        Contact
                                    </Link>
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
                                <div className='options__lang'>
                                    <div className='current__lang'>
                                        <a href='/'>EN</a>
                                    </div>
                                </div>
                            </div>
                        }
                    </header>
                
        )
    }
}