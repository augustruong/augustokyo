import React from 'react';
import { NavLink } from 'react-router-dom';

import './HP_Posts.css'
import PostThumb from '../components/PostThumb';


export default function HP_Posts() {
    const lang = document.documentElement.lang;

    return(
        <section id='storyPosts'>
            <div className='wrapper'>
                <div className='section-title'>Story Posts</div>

                <div className='l-post-wrapper'>
                    <div className='content'>
                        <div className='title'>The first day ever in Tokyo</div>
                        <div className='subtitle'>So... I made it. I finally landed in Tokyo, the city I have been always dreaming of. </div>
                        <div className='time'>Sep 10, 2018</div>
                    </div>
                </div>

                <div className='s-posts'>
                    <PostThumb index={1}/>
                    <PostThumb index={2}/>
                    {window.innerWidth > 640 && <PostThumb index={3}/> }
                </div>

                <button>
                    <NavLink to='/post'>
                        See all posts
                    </NavLink>
                </button>
            </div>
        </section>
    )
}