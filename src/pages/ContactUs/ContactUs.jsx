import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./ContactUS.scss";

const Contact = ({ contact }) => {
    // **** apear alert when send mail****
    const Alert = () => {
        alert("Your message is send")
    }
    // **** this code to send message when click send input ****
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_ud5dkct",
                "template_lzvvg4f",
                form.current,
                "iWyQCE4knWLge4c2A"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        Alert();
    }

    return (
        <div className='contacts ' ref={contact}>

            <div className='container'>

                <div className='contact '>
                    <div className='title-contact'>
                        <div className="LogoT"> <h1>T</h1> </div>
                        <h1>Tamer Fouad</h1>
                        <h3>tamer.fbhb@gmail.com</h3>
                        <h3>(+2)01270802197</h3>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className='id'>
                        <div>
                            <input type="text" name="user_name" placeholder=" your Name" />
                        </div>
                        <div>
                            <input type="number" placeholder=" your Number" />
                        </div>
                        <div>
                            <input type="email" name="user_email" placeholder=" your Email" />
                        </div>
                    </form>

                    <div className='end'>
                        <div className='write-message'>
                            <textarea name="message" cols="45" rows="10" placeholder=" Type Your Message" />
                        </div>

                        <div className='letsGo'>
                            <input type="submit" value="Let's Get in Touch" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Contact;
