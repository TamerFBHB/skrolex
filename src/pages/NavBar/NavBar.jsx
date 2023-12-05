
import React, { useState } from 'react';
import "./NavBar.scss";
import {  NavLink } from 'react-router-dom';




const NavBar = ({ contact, Blog, Customers, Host, price, Servers, state, setShowSideBar }) => {
    // *** start apeare navbar ****
    const [visible, setVisible] = useState(false);
    const [visib, setVisib] = useState(false);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 250) { setVisib(true); }
        else if (window.scrollY <= 250) { setVisib(false); }
        if (window.scrollY > 280) { setVisible(true); }
        else if (window.scrollY <= 280) { setVisible(false); }
    });
    // *** end apeare navbar **** 

    // scroll to Top to homePage
    const moveHome = () => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        });
    };

    // function to move betweeen section
    const scrollToSection = (Ref) => {
        window.scrollTo({
            top: Ref.current.offsetTop - 100,
            behavior: "smooth",
        });
    }


    return (
        <div className={`navBar ${visible ? "apeare" : ""}  ${visib ? "transfor" : ""}`} >
            <div className=' container nav '>

                <div className="LogoT" onClick={moveHome}> <h1>T</h1> </div>

                <ul className='links '>
                    <li><NavLink onClick={moveHome} className={`${state === 0 ? "active" : "noneActive"}`}>home</NavLink></li>
                    <li><NavLink onClick={() => { scrollToSection(Host) }} className={`${state === 1 ? "active" : "noneActive"}`}>hostimg</NavLink ></li>
                    <li><NavLink onClick={() => { scrollToSection(price) }} className={`${state === 2 ? "active" : "noneActive"}`}>pricing</NavLink></li>
                    <li><NavLink onClick={() => { scrollToSection(Servers) }} className={`${state === 3 ? "active" : "noneActive"}`}>vps service</NavLink></li>
                    <li><NavLink onClick={() => { scrollToSection(Customers) }} className={`${state === 4 ? "active" : "noneActive"}`}>reviews</NavLink></li>
                    <li><NavLink onClick={() => { scrollToSection(Blog) }} className={`${state === 5 ? "active" : "noneActive"}`}>blogs</NavLink></li>
                    <li><NavLink onClick={() => { scrollToSection(contact) }} className={`${state === 6 ? "active" : "noneActive"}`}>contact us</NavLink></li>
                </ul>
            </div>

            <div className='bar' onClick={() => { setShowSideBar(true) }}>
                <div className='one'></div>
                <div className='two'></div>
                <div className='three'></div>
            </div>
        </div>
    );
}

export default NavBar;
