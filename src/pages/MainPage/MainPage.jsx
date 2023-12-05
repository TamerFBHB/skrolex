import "./MainPage.scss";

import NavBar from "../NavBar/NavBar";
import Hosting from "../Hosting/Hosting";
import Pricing from "../pricing/pricing";
import MenuBar from "../MenuBar/MenuBar";
import React, { useRef, useState } from "react";
import Home from "../Home/Home";
import Server from "../Server/Server";
import Reviews from "../Reviews/Reviews";
import Blogs from "../Blogs/Blogs";
import Contact from "../ContactUs/ContactUs";


const MainPage = () => {

    const [state, setstate] = useState(0);
    // //change color of button navbar
    window.addEventListener("scroll", function () {
        if (window.scrollY > 4800) { setstate(6); }
        else if (window.scrollY > 4000) { setstate(5); }
        else if (window.scrollY > 3300) { setstate(4); }
        else if (window.scrollY > 2600) { setstate(3); }
        else if (window.scrollY > 1600) { setstate(2); }
        else if (window.scrollY > 300) { setstate(1); }
        else if (window.scrollY < 300) { setstate(0); }
    });
    // //*** end  ** */

    const Host = useRef();
    const price = useRef();
    const Servers = useRef();
    const Customers = useRef();
    const Blog = useRef();
    const contact =useRef();

    // moving sideBar
    const [showSideBar, setShowSideBar] = useState();

    //#####################################
    return (
        <div className="mainPage" >
            {/* NavBar  */}
            <NavBar contact={contact} Blog={Blog} Customers={Customers} Host={Host} Servers={Servers} price={price}  state={state} setShowSideBar={setShowSideBar} />

            {/* MenuBar */}
            <MenuBar contact={contact} Blog={Blog} Customers={Customers} Host={Host} Servers={Servers} price={price} setstate={setstate} state={state} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

            {/* Home Page */}
            <Home state={state} setstate={setstate} />

            {/* Hosting Page */}
            <Hosting Host={Host} setstate={setstate} state={state} />

            {/* Pricing Page */}
            <Pricing price={price} setstate={setstate} state={state} />

            {/* server page */}
            <Server Servers={Servers} />

            {/* Customer page */}
            <Reviews Customers={Customers} state={state}/>

            {/* Blog page */}
            <Blogs Blog={Blog} state={state}/>

            {/* Contact page */}
            <Contact contact={contact}/>
        </div>
    );
}

export default MainPage;
