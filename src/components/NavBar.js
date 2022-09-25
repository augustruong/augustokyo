import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { Link } from 'react-scroll';
import ScrollIntoView from 'react-scroll-into-view';

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
            scrollPos: 0,
            currentLang:"",
            newLang:""
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

    switchLang = () => {
        this.setState({currentLang: this.state.newLang,newLang: this.state.currentLang})
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("scroll", this.closeMobileMenu);
        window.addEventListener("resize",this.handleResize);

        if (document.documentElement.lang === 'en') this.setState({currentLang:'en',newLang:'ja'})
            else this.setState({currentLang:'ja',newLang:'en'})

        const urlHash = window.location.hash;
        console.log(urlHash)
        if (urlHash.length) {
            const element = document.getElementById(urlHash.substring(3));
            if (element) {
                element.scrollIntoView();
            }
        }    
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.addEventListener("resize",this.handleResize);
    }

    render() {
        return(
            <header id='header'>
                <NavLink to='/' className={this.state.logoShow ? 'header__logo show' : 'header__logo hidden'}>
                    <ScrollIntoView selector='#topview'>
                        <img src={logo} className='logo-svg'/>
                    </ScrollIntoView>
                </NavLink>

                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <nav className={this.state.clicked ? 'header__menu active' : 'header__menu'}>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <Link to='/#about'  className='nav__link'>
                                <ScrollIntoView selector='#about'>
                                    About
                                </ScrollIntoView>
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/#storyPosts'  className='nav__link'>
                                <ScrollIntoView selector='#storyPosts'>
                                    Posts
                                </ScrollIntoView>
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/#gallery'  className='nav__link'>
                                <ScrollIntoView selector='#gallery'>
                                    Gallery
                                </ScrollIntoView>
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/#contact'  className='nav__link'>
                                <ScrollIntoView selector='#contact'>
                                    Contact
                                </ScrollIntoView>
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
                        <div className='current__lang' onClick={this.switchLang}>
                            {this.state.newLang === 'en' && 
                                <NavLink to='/'>{this.state.newLang}</NavLink>
                            }
                            {this.state.newLang === 'ja' && 
                                <NavLink to='/ja'>{this.state.newLang}</NavLink>
                            }
                        </div>
                    </div>
                </div>
            }
            </header>    
        )
    }
}