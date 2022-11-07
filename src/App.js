import React, { useState } from 'react';
import './App.css';
import '../src/stylesheet/responsive.css'
import '../src/stylesheet/screenMode.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Sportfolio from './components/Sportfolio';
import Contact from './components/Contact';
import { HiOutlineCode } from 'react-icons/hi'
import Slider from 'react-slick';
import Footer from './components/Footer';
import Aos from 'aos';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import { FiHome, FiUser, FiPhone, FiBox, FiTriangle } from 'react-icons/fi'

function App(props) {
  const [mode, setMode] = useState('dark')



  const handleScreenMode = () => {
    return mode === 'light' ? <MdOutlineLightMode className='btn-mode' onClick={() => setMode('dark')}></MdOutlineLightMode>
      :
      <MdOutlineDarkMode className='btn-mode' onClick={() => setMode('light')}></MdOutlineDarkMode>
  }
  Aos.init();
  return (
    <>
      <div className={`App ${mode ==="dark" ? "" : "light"}`}>
        <div className={`menu-bar ${mode==='dark' ? "" : "light"}`}>
          <a href='#'>
            <div className='Intro'>
              <HiOutlineCode className='faLaptop' size={'25px'}></HiOutlineCode>
              <div>HieuNguyen</div>
            </div>
          </a>
          <ul>
            <a className={mode === "dark" ? "" : "light"} href='#'>Home</a>
            <a className={mode === "dark" ? "" : "light"} href='#about'>About</a>
            <a className={mode === "dark" ? "" : "light"} href='#skills'>Skills</a>
            <a className={mode === "dark" ? "" : "light"} href='#portfolio'>Portfolio</a>
            <a className={mode === "dark" ? "" : "light"} href='#contact'>Contact</a>
            <a className={mode === "dark" ? "mode" : "mode light"}>{handleScreenMode()}</a>
          </ul>
        </div>
        <div className="menu-bar--mobile">
          <a href='#'>
            <FiHome className='bar-item--mobile'></FiHome>
          </a>
          <a href='#about'>
            <FiUser className='bar-item--mobile'></FiUser>
          </a>
          <a href='#skills'><FiBox className='bar-item--mobile'></FiBox></a>
          <a href='#portfolio'><FiTriangle className='bar-item--mobile'></FiTriangle></a>
          <a href='#contact'><FiPhone className='bar-item--mobile'></FiPhone></a>
        </div>
        <Home screenMode={mode}></Home>
        <About screenMode={mode}></About>
        <Skill screenMode={mode}></Skill>
        <Sportfolio screenMode={mode}></Sportfolio>
        <Contact screenMode={mode}></Contact>
      </div>
      <Footer screenMode={mode}></Footer>
    </>
  );
}

export default App;