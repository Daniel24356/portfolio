 import { useState } from 'react';
import './header.css'
 import { IoMenuSharp } from "react-icons/io5"; 

const Header = () => {

    const [open,setOpen] = useState(false)

    return (
        <>
        <div  className='header'>
            <div className='logo'>
                DI
            </div>
            <div  className={open ? 'not-open' : 'menu'}>
            <a className='home-n' href="#home">
                <p>Home</p>
                </a>
               <a href="#about">
               <p>About</p>
               </a>
                <a href="#skill">
                <p>Skills</p>
                </a>
              <a href="#project">
              <p>Projects</p>
              </a>
               <a href="https://drive.google.com/file/d/1GITO75v7okR0kQ06tpanNxYTjBDSYAWs/view?usp=sharing">
               <p>Resume</p>
               </a>
                <a href="#contact">
                <p>Contact</p>
                </a>
               </div>
            <ul
            // id='header-sec'
            className='header-sec'
             >
                <a className='home-n' href="#home">
                <p>Home</p>
                </a>
               <a href="#about">
               <p>About</p>
               </a>
                <a href="#skill">
                <p>Skills</p>
                </a>
              <a href="#project">
              <p>Projects</p>
              </a>
               <a href="https://daniel23456.tiiny.site">
               <p>Resume</p>
               </a>
                <a href="#contact">
                <p>Contact</p>
                </a>
            </ul>
            <div className='menu-bar' onClick={() => {
                setOpen(!open) }}
            >
               <IoMenuSharp className='menu-icon'/>
               </div>
        </div>
    
        </>
    )
}

export default Header

