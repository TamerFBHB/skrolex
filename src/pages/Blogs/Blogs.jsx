import React from 'react';
import "./Blogs.scss"
import Hena from "../../image/hena.png"
import like from "../../image/blog-img-1.jpg";
import wordpress from "../../image/blog-img-2.jpg";
import tablet from "../../image/blog-img-3.jpg"

const Blogs = ({ Blog, state }) => {
    return (
        <div ref={Blog} className='blog '>

            <div className='container'>
                <div className={`title-blog ${state === 5 || state > 5 ? "zoomIn" : ""}`}>
                    <h1>Our latest blogs will keep</h1>
                    <h1>everyone updated</h1>
                </div>

                <div className='All-cards '>

                    <div className='blog-card'>
                        <div className='blog-head'>
                            <img src={like} alt='' />
                        </div>
                        <div className='body-card'>
                            <div className='date'>
                                <h4>October 29, 2020</h4>
                            </div>
                            <h2>Web design is fun</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit, ab eligendi commodi facilis</p>
                            <div className='designer'>
                                <img src={Hena} alt='' />
                                <i>Hena Sward</i>
                            </div>
                        </div>
                    </div>

                    <div className='blog-card'>
                        <div className='blog-head'>
                            <img src={wordpress} alt='' />
                        </div>
                        <div className='body-card'>
                            <div className='date'>
                                <h4>October 29, 2020</h4>
                            </div>
                            <h2>Web design is fun</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit, ab eligendi commodi facilis</p>
                            <div className='designer'>
                                <img src={Hena} alt='' />
                                <i>Tena Walker</i>
                            </div>
                        </div>
                    </div>

                    <div className='blog-card'>
                        <div className='blog-head'>
                            <img src={tablet} alt='' />
                        </div>
                        <div className='body-card'>
                            <div className='date'>
                                <h4>October 29, 2020</h4>
                            </div>
                            <h2>Web design is fun</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit, ab eligendi commodi facilis</p>
                            <div className='designer'>
                                <img src={Hena} alt='' />
                                <i>David Villas</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Blogs;
