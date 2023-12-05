import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sara from "../../image/testimonial-1.png"
import stev from "../../image/testimonial-2.png"
import natasha from "../../image/testimonial-3.png"
import { FaQuoteRight } from "react-icons/fa";


const DemoCarousel = () => {
    return (

        <Carousel autoPlay infiniteLoop centerMode ariaLabel className="Carousel">
            <div className='quote'>
                <FaQuoteRight />
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, possimus quaerat! Voluptatem commodi incidunt ab tempora itaque, cupiditate reiciendis iusto debitis, ducimus, non quidem id consectetur sit distinctio voluptatum ad."</p>
                <img src={sara} alt=' ' className='foto' />
                <h2 className='name'>Sara Williams</h2>
            </div>

            <div className='quote'>
                <FaQuoteRight />
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, possimus quaerat! Voluptatem commodi incidunt ab tempora itaque, cupiditate reiciendis iusto debitis, ducimus, non quidem id consectetur sit distinctio voluptatum ad."</p>
                <img src={stev} alt=' ' className='foto' />
                <h2 className='name'>Stev Shershel</h2>
            </div>

            <div className='quote'>
                <FaQuoteRight />
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, possimus quaerat! Voluptatem commodi incidunt ab tempora itaque, cupiditate reiciendis iusto debitis, ducimus, non quidem id consectetur sit distinctio voluptatum ad."</p>
                <img src={natasha} alt=' ' className='foto' />
                <h2 className='name'>Natacha Lee</h2>
                </div>
        </Carousel>
    );
}
export default DemoCarousel

