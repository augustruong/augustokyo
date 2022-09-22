import React from 'react'

import './HomePage.css'

export default function HomePage() {
  return (
    <div id='home-page' className='dark-theme'>
        <section className='topview'>
            <img className='home__cover'
                src={process.env.PUBLIC_URL + `./images/homePage-cover.jpg`}/>
            <img className='home__title'
                src={process.env.PUBLIC_URL + `./images/augustintokyo.svg`}/>
            <img className='home__textArc'
                src={process.env.PUBLIC_URL + `./images/text-arc.svg`}/>
            <img className='home__tokyo'
                src={process.env.PUBLIC_URL + `./images/東京.svg`}/>
            <img className='home__hachigatsu'
                src={process.env.PUBLIC_URL + `./images/八月.svg`}/>

            <div className='scroll-down'>
                <span className='scroll-text'>scroll</span>
                <span className='arrow-down'></span>
            </div>

            <div className='body-text'>
                “ More than any other city, Tokyo demonstrates <br/>
                that ‘city’ is a verb and not a noun. ” <br/>
                Venture Tokyo through August’s point of view.
            </div>
        </section>

        <section className='aboutMe' id='about'>
            <div className='wrapper'>
                <div className='ava__wrapper'>
                    <img className='ava__textArc'
                         src={process.env.PUBLIC_URL + `./images/text-arc-2.svg`}/>
                    <img className='ava__img'
                         src={process.env.PUBLIC_URL + `./images/avatar.png`}/>
                </div>
                <div className='content__wrapper'>
                    <div className='section-title'>About <span className='yellow'>me</span></div>
                    <div className='body-text'>
                        Hi, I’m August. I’m Vietnamese living in Tokyo, <br/>
                        pursuing undergraduate study at Digital Hollywood University since 2019.<br/>
                        I am majoring in Web Direction and Design Seminar, <br/>
                        fusing with UX/UI Design and Graphic Design.<br/>
                    </div>
                    <button>Check out my Portfolio</button>
                </div>
            </div>
        </section>

        <section className='aboutPage'>
            <div className='wrapper'>
                <div className='section-title'>About <span className='yellow'>‘augustintokyo’</span></div>
                <div className='body-text'>
                    <strong>‘augustintokyo’</strong><br/>
                    ‘August’ is my name, and ‘Tokyo’ is the city where I’m currently living in. <br/>
                    In Kanji, ‘August’ is 「八月」and ‘Tokyo’ is 「東京」, <br/>I think it would be nice
                    to make a square logo combining of the 4 kanji.<br/>
                    <br/>
                    <strong>What can you find here? </strong><br/>
                    ・My recommended spots in Tokyo to visit<br/>
                    ・A growing-up process of a foreign student in Tokyo<br/>
                    ・Some inspiration or empathy through words and pictures<br/>
                    <br/>
                    <strong>The background</strong><br/>
                    I started created this in the last year of university, in a rush of seeking for jobs and working on graduation project. There was a time I kept thinking that I should have prepared things earlier. It was a mess! <br/> Then I realized that I need to slow down for a moment, through back and reflect myself in the past few years I spent here, Tokyo. <br/>In the fog of memories, I created this blog to rearrange my mind, by writing everything down.
                </div>
            </div>
        </section>

        <section className='storyPosts'>
            <div className='wrapper'>
                <div className='section-title'>Story Posts</div>

                <div className='l-post-wrapper'>
                    <div className='l-post-content'>
                        <div className='post-title'>The first day ever in Tokyo</div>
                        <div className='post-subtitle'>So... I made it. I finally landed in Tokyo, the city I have been always dreaming of. </div>
                        <div className='post-time'>Sep 10, 2018</div>
                    </div>
                </div>

                <div className='s-posts flex-row-ct'>
                    <div className='wrapper'>
                        <div className='s-post-img'></div>
                        <div className='s-post-content'>
                            <div className='post-title'>TeamLab Borderless</div>
                            <div className='post-subtitle'>It was the most unreal experience ever in my life. The urge of becoming an UX/UI designer.</div>
                            <div className='post-time'>Sep 10, 2018</div>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='s-post-img'></div>
                        <div className='s-post-content'>
                            <div className='post-title'>TeamLab Borderless</div>
                            <div className='post-subtitle'>It was the most unreal experience ever in my life. The urge of becoming an UX/UI designer.</div>
                            <div className='post-time'>Sep 10, 2018</div>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='s-post-img'></div>
                        <div className='s-post-content'>
                            <div className='post-title'>TeamLab Borderless</div>
                            <div className='post-subtitle'>It was the most unreal experience ever in my life. The urge of becoming an UX/UI designer.</div>
                            <div className='post-time'>Sep 10, 2018</div>
                        </div>
                    </div>
                </div>

                <button>See all posts</button>
            </div>
        </section>

        <section className='gallery'>
            <div className='wrapper'>
                <div className='section-title'>Gallery</div>
                <div className='grid__wrapper'>
                    <div className='grid__item p1'></div>
                    <div className='grid__item p2'></div>
                    <div className='grid__item p3'></div>
                    <div className='grid__item p4'></div>
                    <div className='grid__item p5'>
                        <button>See all posts</button>
                    </div>
                </div>
            </div>
        </section>

        <section className='contact' id='contact'>
            <div className='wrapper'>
                <div className='section-title'>Drop me a <span className='yellow'>‘Konichiwa’</span>!</div>
                <button>Konichiwa</button>
                <img src={process.env.PUBLIC_URL + `./images/homePage-footer.jpg`} />
            </div>
        </section>

    </div>
  )
}
