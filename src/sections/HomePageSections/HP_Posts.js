import React from 'react';
import { NavLink } from 'react-router-dom';

import './HP_Posts.css'
import '../AllPostWrapper.css'

import PostThumb from '../../components/PostThumb';


export default function HP_Posts() {
    const lang = document.documentElement.lang;

    return(
        <section id='hp_storyPosts'>
            <div className='allPost__wrapper'>
                <div className='section-title'>Story Posts</div>

                <NavLink to='./post-0'>
                <div className='l-post-wrapper'>
                    <div className='content'>
                        <div className='title'>The first day ever in Tokyo</div>
                        <div className='subtitle'>So... I made it. I finally landed in Tokyo, the city I have been always dreaming of. </div>
                        <div className='time'>Sep 10, 2018</div>
                    </div>
                </div>
                </NavLink>

                {window.innerWidth > 900 &&
                <div className='s-posts-wrapper'>
                     <div className='s-posts'>
                         <PostThumb index={1}/>
                         <PostThumb index={2}/>
                         <PostThumb index={3}/> 
                    </div>
                </div>
            }
            {window.innerWidth <= 900 &&
                <div className='s-posts-wrapper'>
                     <div className='s-posts'>
                         <PostThumb index={1}/>
                         <PostThumb index={2}/>
                    </div>
                </div>
            }

                <button>
                    <NavLink to='/allpost'>
                        See all posts
                    </NavLink>
                </button>
            </div>
        </section>
    )
}