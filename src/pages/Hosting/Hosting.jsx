import React, { useEffect, useState } from 'react';
import "./Hosting.scss";
import reliable from "../../image/parallax-bg.jpg";
import videoHost from "../../image/video-img.jpg";
import { CiPlay1 } from "react-icons/ci";

import { Flat } from '@alptugidin/react-circular-progress-bar';



const Hosting = ({ Host, setstate, state, moveprice }) => {

    //to apear youtube
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (state === 0) { setShow(false) };
        if (state === 2) { setShow(false) };
    }, [state])

    // youtube ############

    return (
        <div ref={Host}>

            <div className={`backYouTube  ${show ? "sea" : "hidden"}`} onClick={() => { setShow(false) }}>
                <iframe className={`youtube `}
                    src={`${show ? "https://www.youtube-nocookie.com/embed/7e90gBu4pas?si=kR-S31H8gACV2mLH" : " "}`}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='container ' >
                <div className=' host' >
                    <div className={`video ${state === 1 || state > 1 ? "FadeIn-0" : ""}`} >
                        <div className='backvideo '></div>
                        <img src={videoHost} alt='' className='movie' />
                        <div className='circle' onClick={() => { setShow(true) }}>
                            <div className='shadow'></div>
                            <CiPlay1 className='iconPlay' />
                        </div>
                    </div>

                    <div className={`inform ${state === 1 || state > 1 ? "ApearFromRight" : ""}`} >
                        <h2>Have Questions?</h2>
                        <h1>Hosting Video Tutorials</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci mollitia ipsa consequatur similique </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam voluptas ut, quaerat optio, deleniti perspiciatis fugiat quos est, eaque libero vitae eos consequatur? Eligendi, aperiam. Aliquid rem eaque molestias!</p>
                        <div className='btnn' onClick={moveprice}>Learn More</div>
                    </div>
                </div>
            </div>

            <div className='container counter' >
                <div className='number '>
                    < div className='prog'>
                        <Flat
                            progress={257}
                            sx={{
                                strokeColor: '#00BBFF',
                                bgColor: { value: '#dedede', transparency: '20' },
                                bgStrokeColor: '#bcbcbc',
                                barWidth: 5,
                                valueColor: '#00BBFF',
                                valueSize: 22,
                            }}
                        />
                    </div>
                    <h2>Reliability</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className='number'>
                    < div className='prog'>
                        <Flat
                            progress={96}
                            sx={{
                                strokeColor: '#002d64',
                                barWidth: 5,
                                valueColor: '#002d64',
                                valueSize: 22,
                            }}
                        />
                    </ div>
                    <h2>Up Time</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className='number '>
                    <div className='prog'>
                        <Flat
                            progress={317}
                            sx={{
                                strokeColor: '#00BBFF',
                                barWidth: 5,
                                valueColor: '#00BBFF',
                                valueSize: 22,
                            }}
                        />
                    </div>
                    <h2>Clients Worldwide</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div className='reliable ' >
                <img src={reliable} alt='' />
                <div className={`information ${state === 1 || state > 1 ? "ApearFromBottom" : ""}`} >
                    <h1 >Looking for reliable hosting <br />for your website?</h1>
                    <div className='btnn'>Learn More</div>
                </div>
            </div>
        </div>
    );
}

export default Hosting;
