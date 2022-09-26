import React from 'react';
import { FiFacebook, FiGithub } from 'react-icons/fi'
import { CgMouse } from 'react-icons/cg'
import { BsChevronDoubleDown } from 'react-icons/bs'
function Home(props) {
    return (
        <div id='' className='home'>
            <div>
                <div className='home-website'>
                    <a href='https://www.facebook.com/nguyenduchieu.user' target='_blank'><FiFacebook className='fiFacebook' size={'20px'} color='#6E5FDE'></FiFacebook></a>
                    <a href='https://github.com/hieulechanhkk' target='_blanl'><FiGithub className='fiGithub' size={'20px'} color='#6E5FDE'></FiGithub></a>
                </div>
                <div className='home-information'>
                    <div className='home-content'>
                        <h1>Hi, I'am<br className='break--mobile'/> Nguyen Duc Hieu</h1>
                        <h3>Front-end Developer</h3>
                        <p>I am currently in my final year at University of Information Technology
                            (UIT). I aspire to become a Full-Stack developer. I built many different
                            projects during my study time with strong creative and analytical skills.</p>
                        <div>
                            <a href='#contact'><div className='btn-ct-me'>Contact Me</div></a>

                        </div>
                    </div>

                </div>
                <div className='home-avatar'>
                    <div className='box'>
                        <div className='spin-container'>
                            <div className='shape'>
                                <div className='avatar'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div>
                <a href='#about'>
                    <div className='scroll-down'>
                        <BsChevronDoubleDown className="btn-srcoll-down"></BsChevronDoubleDown>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Home;