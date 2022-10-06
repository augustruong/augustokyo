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
                    <img className='content-img' src={process.env.PUBLIC_URL + `/images/01-04.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1}`}}></div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2a}`}}></div>
                    <img className='content-img' src={process.env.PUBLIC_URL + `/images/01-02.jpg`}/>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2b}`}}></div>
                <div className='content-media flex'>
                    <img className='' src={process.env.PUBLIC_URL + `/images/01-05.jpg`}/>
                    <img className='' src={process.env.PUBLIC_URL + `/images/01-06.jpg`}/>
                </div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt3}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb3}`}}></div>
                </>
            }
            {props.index === 2 &&
            <>
                    <img className='content-img' src={process.env.PUBLIC_URL + `/images/02-01.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1}`}}></div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2}`}}></div>
                    <img className='content-img' src={process.env.PUBLIC_URL + `/images/02-02.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt3}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb3}`}}></div>
            </>
            }
            {props.index === 3 &&
            <>
                    <img className='content-img' src={process.env.PUBLIC_URL + `/images/03-01.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1}`}}></div>
                <div className='content-media flex'>
                    <img className='' src={process.env.PUBLIC_URL + `/images/03-02.jpg`}/>
                    <img className='' src={process.env.PUBLIC_URL + `/images/03-03.jpg`}/>
                </div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb3}`}}></div>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/4GmS3sCRvfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </>
            }
            {props.index === 4 &&
            <>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1}`}}></div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2a}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2b}`}}></div>
                <div className='content-media flex'>
                    <img className='' src={process.env.PUBLIC_URL + `/images/04-01.jpg`}/>
                    <img className='' src={process.env.PUBLIC_URL + `/images/04-02.jpg`}/>
                </div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2c}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2d}`}}></div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt3}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb3a}`}}></div>
                    <img className='content-img' src={process.env.PUBLIC_URL + `/images/04-03.jpg`}/>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb3b}`}}></div>
            </>
            }

            {props.index === 5 &&
            <>
                    <img className='content-img' src={process.env.PUBLIC_URL + `/images/05-01.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1}`}}></div>
                <div className='content-media flex'>
                    <img className='' src={process.env.PUBLIC_URL + `/images/05-02.jpg`}/>
                    <img className='' src={process.env.PUBLIC_URL + `/images/05-03.jpg`}/>
                </div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2a}`}}></div>
                <div className='content-media flex'>
                    <video autoplay="autoplay" controls>
                        <source src={process.env.PUBLIC_URL + `/videos/05-02.mp4`} type="video/mp4"/>
                    </video>
                    <video autoplay="autoplay" controls>
                        <source src={process.env.PUBLIC_URL + `/videos/05-01.mp4`} type="video/mp4"/>
                    </video>
                </div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2b}`}}></div>

            </>
            }

            {props.index === 6 &&
            <>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1}`}}></div>
                    <img className='content-img' src={process.env.PUBLIC_URL + `/images/06-00.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2}`}}></div>
                <div className='content-media flex'>
                    <img className='' src={process.env.PUBLIC_URL + `/images/06-01.jpg`}/>
                    <img className='' src={process.env.PUBLIC_URL + `/images/06-02.jpg`}/>
                </div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt3}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb3}`}}></div>
                    <img className='content-img' src={process.env.PUBLIC_URL + `/images/06-05.jpg`}/>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt4}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb4}`}}></div>
                <div className='content-media flex'>
                    <img className='' src={process.env.PUBLIC_URL + `/images/06-04.jpg`}/>
                    <img className='' src={process.env.PUBLIC_URL + `/images/06-09.jpg`}/>
                </div>
            </>
            }
            
            {props.index === 7 &&
            <>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt1}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1a}`}}></div>
                <div className='content-media flex'>
                    <img className='' src={process.env.PUBLIC_URL + `/images/07-01.jpg`}/>
                    <video autoplay="autoplay" controls>
                        <source src={process.env.PUBLIC_URL + `/videos/07-01.mp4`} type="video/mp4"/>
                    </video>
                </div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb1b}`}}></div>
                <div className='body-title' dangerouslySetInnerHTML={{__html: `${thisPost.pt2}`}}></div>
                <div className='body-text' dangerouslySetInnerHTML={{__html: `${thisPost.pb2}`}}></div>
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