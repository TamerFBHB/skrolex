
import "./MenuBar.scss";
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const MenuBar = ({ contact , Blog , Customers, Host, price, Servers,setstate, state, showSideBar, setShowSideBar }) => {

    // function to move betweeen section
    const scrollToSection = (SectionRef,num) => {
        window.scrollTo({
            top: SectionRef.current.offsetTop - 100,
            behavior: 'smooth',
        });
        setstate(num)
        setShowSideBar(false);
    }

    // scroll to Top to homePage
    const moveHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setShowSideBar(false);
    };

    return (
        <div className={`allPage `}>
            <div className={`backgroundSideBar ${showSideBar ? "apearBackground " : "hideBackground"}`} onClick={() => { setShowSideBar(false) }}></div>
            <div className={`menuBar ${showSideBar ? "apearMenuBar " : "hideMenuBar"}`}>
                <div className='container '>
                    <div className='headBar '>
                        <div className="LogoT"> <h1>T</h1> </div>
                        <div className={`close`} onClick={() => { setShowSideBar(false) }}>
                            <div className='bar one'></div>
                            <div className='bar two'></div>
                        </div>
                    </div>
                    <div className='BodyBar  '>
                        <ul className='linkMenuBar'>
                            <li><NavLink onClick={moveHome} 
                            className={`${showSideBar ? "fromBottom" : " "}`}>home</NavLink></li>

                            <li><NavLink onClick={() => { scrollToSection(Host,1) }}
                            className={`${showSideBar ? "fromBottom1" : " "}`}>hostimg</NavLink ></li>

                            <li><NavLink onClick={() => { scrollToSection(price,2) }} 
                            className={`${showSideBar ? "fromBottom2" : " "} }`}>pricing</NavLink></li>

                            <li><NavLink onClick={() => { scrollToSection(Servers,3) }} 
                            className={`${showSideBar ? "fromBottom3" : " "} `}>vps service</NavLink></li>

                            <li><NavLink onClick={() => { scrollToSection(Customers,4) }} 
                            className={`${showSideBar ? "fromBottom4" : " "}`}>reviews</NavLink></li>

                            <li><NavLink onClick={() => { scrollToSection(Blog , 5) }}
                            className={`${showSideBar ? "fromBottom5" : " "}`}>blogs</NavLink></li>

                            <li><NavLink onClick={() => { scrollToSection(contact , 6) }}
                            className={`${showSideBar ? "fromBottom6" : " "}`}>contact us</NavLink></li>
                        </ul>
                    </div>
                    <div className='FooterMenuBar'>
                        <div className='social'>
                            <span className='iconBackground'>
                                <FaFacebookF className="iconSocial" />
                            </span >
                            <span className='iconBackground'>
                                <FaXTwitter className="iconSocial" />
                            </span>
                            <span className='iconBackground'>
                                <FaLinkedinIn className="iconSocial" />
                            </span >
                            <span className='iconBackground'>
                                <FaInstagram className="iconSocial" />
                            </span >
                        </div>
                        <div>
                            <div className='madeBy'>
                                <p >© 2023 . Made With Love by  </p>
                                <Link to="https://tamer-portfolio-30533.web.app/" target="_blank">Tamer Fouad</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
