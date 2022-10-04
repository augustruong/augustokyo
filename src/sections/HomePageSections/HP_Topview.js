import React from 'react';
import Lottie from 'react-lottie';
import coverPC from '../../data/cover-pc.json'
import coverTB from '../../data/cover-tb.json'
import coverMB from '../../data/cover-mb.json'

import './HP_Topview.css'

export default function HP_Topview() {
    const defaultOptions_pc = {
        renderer: 'svg',
        loop: true,
        autoplay: true, 
        animationData: coverPC
    }
    const defaultOptions_tb = {
        renderer: 'svg',
        loop: true,
        autoplay: true, 
        animationData: coverTB
    }
    const defaultOptions_mb = {
        renderer: 'svg',
        loop: true,
        autoplay: true, 
        animationData: coverMB
    }
    const lang = document.documentElement.lang;

    return (
        <section className='hp_topview' id='hp_topview'>
            <div className='home__cover'>
                {window.innerWidth > 640 &&
                <Lottie options={defaultOptions_pc} isClickToPauseDisabled={true} />
                }
                {(window.innerWidth <= 640 && window.innerWidth > 440) &&
                <Lottie options={defaultOptions_tb} isClickToPauseDisabled={true} />
                }
                {window.innerWidth <= 440 &&
                <Lottie options={defaultOptions_mb} isClickToPauseDisabled={true} />
                }
            </div>

            <img className='home__title'
                src={process.env.PUBLIC_URL + `./images/augustintokyo.svg`}/>

            {window.innerWidth > 640 &&
                <div>
                    <img className='home__tokyo'
                        src={process.env.PUBLIC_URL + `./images/東京.svg`}/>
                    <img className='home__hachigatsu'
                        src={process.env.PUBLIC_URL + `./images/八月.svg`}/>
                </div>
            }
            
            <div className='scroll-down'>
                <span className='scroll-text'>scroll</span>
                <span className='arrow-down'></span>
            </div>
            
            {lang === 'en' &&
                <>
                {window.innerWidth > 560 &&
                    <div className='body-text'>
                        “ More than any other city, Tokyo demonstrates <br/>
                        that ‘city’ is a verb and not a noun. ” <br/>
                        Venture Tokyo through August’s point of view.
                    </div>
                }
                {window.innerWidth <= 560 &&
                    <div className='body-text'>
                        “ More than any other city, Tokyo demonstrates
                        that ‘city’ is a verb and not a noun. ” <br/>
                        Venture Tokyo through August’s point of view.
                    </div>
                }
                </>
            }
            {lang === 'ja' &&
                <div className='body-text'>
                    「他のどの都市よりも、東京は動詞であり、<br/>
                    &nbsp;  名詞ではないことを証明している」<br/>
                    &nbsp;  Augustの視点で東京を冒険しよう。
                </div>
            }
        </section>
    )
}

