import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import './PostThumb.css'
import PostData from '../data/PostData.json'

export default function PostThumb(props) {
    const thisPost = PostData[props.index];
    return(
        <NavLink to={`/post-${props.index}`}>
            <div className='postThumb__wrapper'>
                <div className={`postThumb__${thisPost.thumbSize}Img`}
                    style={{ 
                        backgroundImage: `url(${process.env.PUBLIC_URL + `/images/${thisPost.postId}-00.jpg`})` 
                    }}
                >
                </div>
                <div className='postThumb__content'>
                    <div className='postThumb__title'>{thisPost.title}</div>
                    <div className='postThumb__subtitle'>{thisPost.subtitle}</div>
                    <div className='postThumb__time'>{thisPost.time}</div>
                </div>
            </div>
        </NavLink>
    )
}