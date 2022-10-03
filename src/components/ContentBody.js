import React from 'react'
import PostData from '../data/PostData.json'
import { NavLink } from 'react-router-dom';

export default function ContentBody(props) {
    const thisPost = PostData[props.index];

    return(
        <div className='content-body'>
            {props.index === 0 &&
                <>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1}`}}></div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2}`}}></div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt3}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb3}`}}></div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt4}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb4}`}}></div>
                </>
            }
            {props.index === 1 &&
                <>
                <img className='content-img' src={process.env.PUBLIC_URL + `./images/01-04.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1}`}}></div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2a}`}}></div>
                <img className='content-img' src={process.env.PUBLIC_URL + `./images/01-02.jpg`}/>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2b}`}}></div>
                <div className='content-img flex'>
                    <img className='' src={process.env.PUBLIC_URL + `./images/01-05.jpg`}/>
                    <img className='' src={process.env.PUBLIC_URL + `./images/01-06.jpg`}/>
                </div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt3}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb3}`}}></div>
                </>
            }
            {props.index === 2 &&
                <>
                <img className='content-img' src={process.env.PUBLIC_URL + `./images/02-01.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1}`}}></div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2}`}}></div>
                <img className='content-img' src={process.env.PUBLIC_URL + `./images/02-02.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt3}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb3}`}}></div>
                </>
            }
            {props.index === 3 &&
                <>
                <img className='content-img' src={process.env.PUBLIC_URL + `./images/03-01.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1}`}}></div>
                <div className='content-img flex'>
                    <img className='' src={process.env.PUBLIC_URL + `./images/03-02.jpg`}/>
                    <img className='' src={process.env.PUBLIC_URL + `./images/03-03.jpg`}/>
                </div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb3}`}}></div>
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/4GmS3sCRvfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </>
            }

            {props.index === 5 &&
                <>
                <div className='content-vid flex'>
                    <video autoplay="autoplay" controls>
                        <source src={process.env.PUBLIC_URL + `./videos/05-02.mp4`} type="video/mp4"/>
                    </video>
                    <video autoplay="autoplay" controls>
                        <source src={process.env.PUBLIC_URL + `./videos/05-01.mp4`} type="video/mp4"/>
                    </video>
                </div>
                </>
            }
            <button className='black-btn'>
                <NavLink to='/allpost'>
                    Back to List
                </NavLink>
            </button>
            
        </div>
    )
}