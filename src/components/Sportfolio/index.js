import React from 'react';
import Slider from 'react-slick';
import traveler from './../../travler.gif'
import portfolio from '../../portfolio.gif'
import fooddelivery from '../../fooddelivery.gif'
function Sportfolio(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div id='portfolio' className='portfolio'
            data-aos="fade-down"
            data-aos-duration="1050">
            <h1>Portfolio</h1>
            <div className='under-line'></div>
            <Slider className='slider' {...settings}>
                <div className='portfolio-item'>
                    <img className='portfolio-gif' src={portfolio}></img>
                    <div className='portfolio-information'>
                        <h3>Portfolio</h3>
                        <p>My Portfolio deployed on Vercel. You can see all my information and contact me here !</p>
                        <div className='portfolio-btn'>
                            <a href='https://portfolio-dzt1.vercel.app/' target='_blank'>Demo</a>
                            <a href='https://github.com/hieulechanhkk/Portfolio' target='_blank'>Source</a>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-gif' src={traveler}></img>
                    <div className='portfolio-information'>
                        <h3>Traveler</h3>
                        <p>This is the app that helps people buy train tickets
                            convenient, anytime, anywhere from right on your phone or
                            laptop.</p>
                        <div className='portfolio-btn'>
                            <a href='https://webproject-iot.vercel.app/' target='_blank'>Demo</a>
                            <a href='https://github.com/hieulechanhkk/NT532M21_Project_Group6.git' target='_blank'>Source</a>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-gif' src={fooddelivery}></img>
                    <div className='portfolio-information'>
                        <h3>Bella Onojie's Food</h3>
                        <p>Food delivery Website, with ui components and animated interactions. Responsive all devices.</p>
                        <div className='portfolio-btn'>
                            <a href='https://exercise-one-naver-byeq.vercel.app/' target='_blank'>Demo</a>
                            <a href='https://github.com/hieulechanhkk/ExerciseOne-Naver' target='_blank'>Source</a>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-gif' src={traveler}></img>
                    <div className='portfolio-information'>
                        <h3>Modern website</h3>
                        <p>Website adaptable to all devices, with ui components and animated interactions.</p>
                        <div className='portfolio-btn'>
                            <a>Demo</a>
                            <a>Source</a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Sportfolio;