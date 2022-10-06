import React from 'react'
import './Pages.css'
import PostData from '../data/PostData.json'
import ContentBody from '../components/ContentBody';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function PostPage(props) {
    const thisPost = PostData[props.index];

    return(
        <div className='light-theme'>
        <div id='post-page'>
            <section className='cover-wrapper'
                style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL + `/images/${thisPost.postId}-00.jpg`})` 
                    
                }}>
            </section>
            <section className='content-wrapper'>
                <div className='content-header'>
                    <div className='title'>{thisPost.title}</div>
                    <div className='subtitle'>{thisPost.subtitle}</div>
                    <div className='time'>{thisPost.time}</div>
                </div>
                <ContentBody index={props.index}/>
            </section>
            <a href={`${thisPost.mapUrl}`} target="_blank" className='location-btn'>
                <FontAwesomeIcon icon={faLocationDot} fontSize={22}/>
            </a>
        </div>
        </div>
    )
}