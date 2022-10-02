import React from 'react';
import { NavLink } from 'react-router-dom';

import PostThumb from '../components/PostThumb';

import './AllPostWrapper.css'

export default function AllPostWrapper() {
	return(
		<section className='allPost__wrapper'>
            <NavLink to='/post-0'>
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
                    <div className='s-posts'>
                        <PostThumb index={4}/>
                        <PostThumb index={5}/>
                    </div>
                    <div className='s-posts'>
                         <PostThumb index={6}/>
                         <PostThumb index={7}/>
                         <PostThumb index={8}/> 
                    </div>
                    <div className='s-posts'>
                        <PostThumb index={9}/>
                        <PostThumb index={10}/>
                    </div>
                </div>
            }
            {window.innerWidth <= 900 &&
                <div className='s-posts-wrapper'>
                     <div className='s-posts'>
                         <PostThumb index={1}/>
                         <PostThumb index={2}/>
                    </div>

                    <div className='s-posts'>
                        <PostThumb index={3}/>
                        <PostThumb index={5}/>
                    </div>
                    <div className='s-posts'>
                        <PostThumb index={4}/>
                    </div>
                    <div className='s-posts'>
                         <PostThumb index={6}/>
                         <PostThumb index={7}/>
                    </div>
                    <div className='s-posts'>
                        <PostThumb index={8}/> 
                        <PostThumb index={9}/>
                    </div>
                    <div className='s-posts'>
                        <PostThumb index={10}/>
                    </div>
                </div>

            }
           

		</section>
	)
}