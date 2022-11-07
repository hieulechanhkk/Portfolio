import React from 'react';

function About(props) {
    const { screenMode } = props;
    return (
        <div data-aos="fade-down"
            data-aos-duration="950"
            id='about'
            className={`about ${screenMode === "dark" ? "" : "second--Light"}`}>
            <h1 className={screenMode === 'dark' ? "" : "text--light"}>About Me</h1>
            <div className={`under-line ${screenMode === 'dark' ? "" : "border--light"}`}></div>
            <div className='about-information'>
                <div className={`about-introduction ${screenMode === "dark" ? "" : "text--light"}`}>
                    <h3>Get To Know Me</h3>
                    <p className={screenMode === "dark" ? "" : "text--light"}>I started learning how to code in 2020 and spent most of my day experimenting with HTML, CSS and JavaScript, ReactJS.
                        I enjoy coding and the challenge of learning something new everyday.
                        <br />
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
                        <p className={screenMode === "dark" ? "" : "text--light"}>Major: Computer Networks and Data
                            Communications
                        </p>
                        <p className={screenMode === "dark" ? "" : "text--light"}>2019 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;