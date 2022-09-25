import React from 'react';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { SiGithub } from 'react-icons/si'
import { HiOutlineCode } from 'react-icons/hi'
function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-socials'>
                <a href='https://www.facebook.com/nguyenduchieu.user/' target='_blank'><FaFacebookF className='item'></FaFacebookF></a>
                <a href='https://www.instagram.com/u.e.i.h/' target='_blank'><BsInstagram className='item'></BsInstagram></a>
                <a href='https://github.com/hieulechanhkk' target='_blank'><SiGithub className='item'></SiGithub></a>
            </div>
            <div className='footer-name'>
                <HiOutlineCode className='faLaptop' size={'25px'}></HiOutlineCode>
                <div>HieuNguyen</div>
            </div>
            <p className='copyright'>
                © 2022 Hieu Nguyen. All Rights Reserved
            </p>
        </div>
    );
}

export default Footer;