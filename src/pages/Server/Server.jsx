import React from 'react';
import "./Servser.scss"
import server from "../../image/hosting.png"

const Server = ({Servers}) => {
    return (
        <div className='section' ref={Servers}>
            <div className=' container '>
                <div className='hostServer '>
                    <div className='detail'>
                        <h1>Ultra VPS Hosting</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt facere voluptatum, cum maxime doloribus eligendi! Repudiandae totam tenetur.</p>
                        <div className="button">Starts At $25 / Month</div>
                    </div>
                    <div className='servers '>
                        <img src={server} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Server;
