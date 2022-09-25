import React, { useState } from 'react';
import './App.css';
import './responsive.css'
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
      <div className='App '>
        <div className='menu-bar'>
          <a href='#'>
            <div className='Intro'>
              <HiOutlineCode className='faLaptop' size={'25px'}></HiOutlineCode>
              <div>HieuNguyen</div>
            </div>
          </a>
          <ul>
            <a href='#'>Home</a>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#contact'>Contact</a>
            <a className='mode'>{handleScreenMode()}</a>
          </ul>
        </div>
        <Home></Home>
        <About></About>
        <Skill></Skill>
        <Sportfolio></Sportfolio>
        <Contact></Contact>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;