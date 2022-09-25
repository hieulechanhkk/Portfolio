import React from 'react';
import Slider from 'react-slick';
import traveler from './../../travler.gif'
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
                    <img className='portfolio-gif' src={traveler}></img>
                    <div className='portfolio-information'>
                        <h3>Traveler</h3>
                        <p>Website adaptable to all devices, with ui components and animated interactions.</p>
                        <div className='portfolio-btn'>
                            <a href='https://traveler-site.vercel.app/' target='_blank'>Demo</a>
                            <a href='https://github.com/hieulechanhkk/traveler-reactjs' target='_blank'>Source</a>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-gif' src={traveler}></img>
                    <div className='portfolio-information'>
                        <h3>Internet Of Things</h3>
                        <p>Website adaptable to all devices, with ui components and animated interactions.</p>
                        <div className='portfolio-btn'>
                            <a href='https://webproject-iot.vercel.app/' target='_blank'>Demo</a>
                            <a href='https://github.com/hieulechanhkk/NT532M21_Project_Group6.git' target='_blank'>Source</a>
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