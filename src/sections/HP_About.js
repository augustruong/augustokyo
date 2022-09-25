import React, { useEffect, useLocation } from 'react';

import './HP_About.css'

export default function HP_About() {
    const lang = document.documentElement.lang;

    return (
        <section id='about'>
            <section className='aboutMe'>
                <div className='wrapper flex-row-ct'>
                    <div className='ava__wrapper'>
                        <img className='ava__textArc'
                             src={process.env.PUBLIC_URL + `./images/text-arc-2.svg`}/>
                        <img className='ava__img'
                             src={process.env.PUBLIC_URL + `./images/avatar.png`}/>
                    </div>
                    <div className='content__wrapper'>
                        <div className='section-title'>About <span className='yellow'>me</span></div>
                        
                        {lang === 'en' &&
                            <>
                            {window.innerWidth > 960 &&
                                <div className='body-text'>
                                    Hi, I’m August. I’m Vietnamese living in Tokyo, <br/>
                                    pursuing undergraduate study at Digital Hollywood University since 2019.<br/>
                                    I am majoring in Web Direction and Design Seminar, <br/>
                                    fusing with UX/UI Design and Graphic Design.<br/>
                                </div>
                            }
                            {window.innerWidth <= 960 &&
                                <div className='body-text'>
                                    Hi, I’m August. I’m Vietnamese<br/>
                                    living in Tokyo, pursuing undergraduate<br/>
                                    study at Digital Hollywood University since 2019.<br/>
                                    I am majoring in Web Direction and Design Seminar, 
                                    fusing with UX/UI Design and Graphic Design.<br/>
                                </div>
                            }
                            </>
                        }
                        {lang === 'ja' &&
                            <>
                            {window.innerWidth > 960 &&
                                <div className='body-text'>
                                    私は東京に住んでいるベトナム人で、2019年からデジタルハリウッド大学<br/>
                                    の学部で勉強しています。Webディレクションとデザイン研究ゼミを専攻し、<br/>
                                    UX/UIデザインとグラフィックデザインと融合しています。<br/>
                                </div>
                            }
                            {window.innerWidth <= 960 &&
                                <div className='body-text'>
                                    私は東京に住んでいるベトナム人で、<br/>
                                    2019年からデジタルハリウッド大学で勉強しています。<br/>
                                    Webディレクションとデザイン研究ゼミを専攻し、<br/>
                                    UX/UIデザインとグラフィックデザインと融合しています。<br/>
                                </div>
                            }
                            </>
                        }
                        <button>
                            <a href='https://augustruong.github.io/portfolio/' target="_blank">
                                Check out my Portfolio
                            </a>
                        </button>
                    </div>
                </div>
            </section>

            <section className='aboutPage'>
                <div className='wrapper'>
                    <div className='section-title'>About <span className='yellow'>‘augustintokyo’</span></div>
                    
                    {lang === 'en' &&
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
                    }
                    {lang === 'ja' &&
                        <div className='body-text'>
                            <strong>‘augustintokyo’</strong><br/>
                            ‘August’「八月」は私の名前、「東京」は私が今住んでいる都市です。<br/>
                            この4つの漢字を組み合わせて四角いロゴを作れたらいいなと思います。<br/>
                            <br/>
                            <strong>ここには何があるのでしょう？</strong><br/>
                            ・私のおすすめ東京観光スポット<br/>
                            ・東京で学ぶ留学生の成長過程<br/>
                            ・文章や写真を通しての感動や共感<br/>
                            <br/>
                            <strong>背景</strong><br/>
                            大学の最後年、就職活動や卒業制作であわただしい中、このサイトを作り<br/>
                            始めました。もっと早くから準備しておけばよかったと思うこともありました。<br/>
                            もう、メチャクチャでした（笑）。<br/>
                            そして、この東京で過ごした数年間を振り返って、少しゆっくりしてみる必要があることに
                            気づきました。そして、このブログで、自分の頭の中を整理してみようと思いました。<br/>
                        </div>
                    }
                </div>
            </section>
        </section>
    )
}