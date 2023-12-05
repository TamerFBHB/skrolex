import React from 'react';
import "./Reviews.scss";
import DemoCarousel from './Carousel';
// import sara from "../../image/testimonial-1.png"
// import stev from "../../image/testimonial-2.png"
// import natasha from "../../image/testimonial-3.png"
// import { FaQuoteRight } from "react-icons/fa";



const Reviews = ({ Customers, state }) => {
    return (
        <div className='customer' ref={Customers}>
            <div className={`happy-customer  ${state === 4 || state > 4 ? "ApearFromLeft-R" : ""}`}>
                <h1>We have some</h1>
                <h1>Happy Customers</h1>
            </div>

            <div className={`page  ${state === 4 || state > 4 ? "ApearFromRight-R" : ""}`}>

                <DemoCarousel />
            </div>
        </div>
    );
}

export default Reviews;
