
import comput from "../../image/comp.png";
import { BsRCircle } from "react-icons/bs";
import { PiLaptop } from "react-icons/pi";
import { LiaServerSolid } from "react-icons/lia";
import "./Home.scss";


const Home = ({ state }) => {

    return (
        <div >
            <div className="home"  >
                <div className="container  home-page" >

                    <div className={`details ${state === 0 || state > 0 ? "ApearFromLeft" : ""}`}  >
                        <h1>Affordable</h1>
                        <h1>Hosting at $3.50</h1>
                        <p>
                            Donec quis nunc mollis, tincidunt mi vel, pellentesque arcu. Nam nec tristique ex,
                            vitae posuere enim. Nunc vulputate metus id ex pretium fermentum.
                        </p>
                        <div className='btn'>get started now</div>
                    </div>
                    <div className={`image  ${state === 0 || state > 0 ? "ApearFromRight" : ""}`} >
                        <img src={comput} alt='' />
                    </div>
                </div>


                <div className=' taps '>
                    <div className=' container'>
                        <div className=' tap '>
                            <div className={`lap ${state === 0 || state > 0 ? "FadeIn-0" : " "}`} >
                                <PiLaptop className="icon" />
                                <h1>Web Hosting</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className={`lap ${state === 0 || state > 0 ? "FadeIn-1" : " "}`} >
                                <LiaServerSolid className="icon" />
                                <h1>Vps Server</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className={`lap ${state === 0 || state > 0 ? "FadeIn-2" : " "}`} >
                                <BsRCircle className="icon" />
                                <h1>Domain Registration</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
