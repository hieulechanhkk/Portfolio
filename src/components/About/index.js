import React from 'react';

function About(props) {
    return (
        <div data-aos="fade-down"
        data-aos-duration="950"
        id='about' 
        className='about'>
            <h1>About Me</h1>
            <div className='under-line'></div>
            <div className='about-information'>
                <div className='about-introduction'>
                    <h3>Get To Know Me</h3>
                    <p>I started learning how to code in 2020 and spent most of my day experimenting with HTML, CSS and JavaScript, ReactJS.
                        I enjoy coding and the challenge of learning something new everyday.
                        <br/>
                        My goal is to pursue a career in the field of front-end development.
                    </p>
                </div>
                <div className='about-education'>
                    <h3>Education</h3>
                    <div className='education-school'>
                        <div className='school'>University Of Information
                            Technology, Vietnam National
                            University - Ho Chi Minh City
                        </div>
                        <p>Major: Computer Networks and Data
                            Communications
                        </p>
                        <p>2019 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;