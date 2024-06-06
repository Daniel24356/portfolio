import './App.css'
import Project from './components/Project/project'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Percentage from './components/percentage/percentage'
import Skill from './components/skills/skills'
import { FaArrowUp } from "react-icons/fa";
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-scroll'


function App() {

  return (
    <>
      <motion.div className='color-div'>
        <div className='color-fir'></div>
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            backgroundColor: '#0c0c1d'
          }}


          className='color-sec'></motion.div>
      </motion.div>


      <div className='port-all'>
        <div id='/' className='port-div'>
          <section>
            <React.Fragment>
              <Header />
            </React.Fragment>
          </section>
          <section>
            <Hero />
          </section>
        </div>
        <div>
          <section className='about-sec' id='about'>
            <About />
            <div className='arrow'>
              <div className='arrow-home'>
                <Link to="/"
                  spy={true}
                  smooth={true}
                  // offset={50}
                  duration={50} 
                  >
                  <FaArrowUp className='arrow-icon' />
                </Link>
              </div>
            </div>
          </section>
          <section id='skill'>
            <Skill />
            <Percentage />
          </section>
          <section id='project'>
            <Project />
          </section>
          <section id='contact'>
            <Contact />
          </section>
          <footer>
            <p>Copyright ©2024 All rights reserved | This website is made by Daniel Igwe</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
