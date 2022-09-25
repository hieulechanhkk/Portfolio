import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiFirebase, SiFigma, SiArduino, SiGit } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
function Skill(props) {
    return (
        <div id='skills' className='skill'>
            <h1 data-aos="zoom-in"
                    data-aos-duration="950">Skills</h1>
            <div data-aos="zoom-in"
                    data-aos-duration="950" className='under-line'></div>
            <div className='skills-container'>
                <div data-aos="zoom-in"
                    data-aos-duration="950" className='skill-item'>
                    <SiHtml5 size={'2rem'}></SiHtml5>
                    <div>HTML</div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="950" className='skill-item'>
                    <SiCss3 size={'2rem'}></SiCss3>
                    <div>CSS</div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="950" className='skill-item'>
                    <SiJavascript size={'2rem'}></SiJavascript>
                    <div>JavaScript</div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="950" className='skill-item'>
                    <SiReact size={'2rem'}></SiReact>
                    <div>ReactJS</div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="950" className='skill-item'>
                    <SiRedux size={'2rem'}></SiRedux>
                    <div>Redux</div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="950" className='skill-item'>
                    <FaNodeJs size={'2rem'}></FaNodeJs>
                    <div>NodeJS</div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="950" className='skill-item'>
                    <SiFirebase size={'2rem'}></SiFirebase>
                    <div>Firebase</div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="950" className='skill-item'>
                    <SiArduino size={'2rem'}></SiArduino>
                    <div>Internet Of Things</div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="950" className='skill-item'>
                    <SiFigma size={'2rem'}></SiFigma>
                    <div>Figma</div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="950" className='skill-item'>
                    <SiGit size={'2rem'}></SiGit>
                    <div>Git</div>
                </div>
            </div>
        </div>
    );
}

export default Skill;