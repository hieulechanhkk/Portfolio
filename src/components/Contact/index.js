import React from 'react';
import { MdLocationPin, MdEmail } from 'react-icons/md'
import { BsFillPhoneFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
function Contact(props) {
    return (
        <div id='contact' className='contact'>
            <h1 data-aos="zoom-in"
                data-aos-duration="950">
                Contact
            </h1>
            <div className='under-line'
                data-aos="zoom-in"
                data-aos-duration="950"></div>
            <div className='contact-container'>
                <div className='contact-info'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="950">
                    <h3 className='primary-color'></h3>
                    <div className='contact-method'>
                        <div>
                            <MdLocationPin className="contact-logo"></MdLocationPin>
                            <p>Address: Ho Chi Minh City, Vietnam</p>
                        </div>
                        <div>
                            <BsFillPhoneFill className="contact-logo"></BsFillPhoneFill>
                            <p>Phone: (+84) 813 908 117</p>
                        </div>
                        <div>
                            <MdEmail className="contact-logo"></MdEmail>
                            <p>Email: hieulechanhkk@gmail.com</p>
                        </div>
                        <div>
                            <AiFillHome className="contact-logo"></AiFillHome>
                            <p>Website: <a href='https://portfolio-dzt1.vercel.app/' target='_blank'>https://portfolio-dzt1.vercel.app</a></p>
                        </div>
                    </div>
                </div>
                <div className='contact-form'>
                    <h3 className='primary-color'></h3>
                    <div className='contact-send'>
                        <div>
                            <input className='input-focus' placeholder='Name'></input>
                            <input className='input-focus' placeholder='Email'></input>
                        </div>
                        <input className='contact-input' placeholder='Subject'></input>
                        <textarea className='contact-input' placeholder='Message' maxLength={'1000'}></textarea>
                    </div>
                    <button className='btn-send'>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;