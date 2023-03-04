import React from 'react'
import SkillCard from '../SkillCard/SkillCard'
import './Services.css'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import heart from '../../img/heartemoji.png'
import cv from './cv.pdf'
import {motion} from 'framer-motion'

import { ThemeContext } from "../../Context";
import { useContext } from "react"

const Services = () => {
	const transition = {duration: 1, type: 'spring'}

  const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

  

  return (
    <div className="Section2">
        <div className="Sec2-left">
              <div className="Sec2Title">
                  <span style={darkMode? {color: 'white'}:{color: 'var(--black)'}}>My Awesome</span>
                  <span>Services</span>
                  <span>This is just a glypse of my super powers. There is more i can do, as i go above and beyond just to  give my clients the very best with touching edge technology</span>
              </div>
              <a href={cv} download>
              <button className="button section2button">Download CV</button>

              </a>
              <div
            className="blur"
            style={{ background: "#ABF1FF94", top: '160%', left : ' 0%' }}
            ></div>
        </div>
        <div className="Sec2-right">
            <div className="card">
              <motion.div 
              initial={{right: '40%'}}
              whileInView={{right: '10%' }}
              transition={transition}
              >
              <SkillCard                          
              txt1="Design" 
              txt2="Photoshop, Figma"
              emoji={heart}
              />
              </motion.div>
              
              <motion.div
              initial={{left: '5%'}}
              whileInView={{left: '-20%' }}
              transition={transition}
              >
                <SkillCard 
              txt1="Frontend" 
              txt2="HTML, CSS, Javascript, React, Bootstrap"
              emoji={glasses}
              />
              </motion.div>
              
              <motion.div
              initial={{top: '170%'}}
              whileInView={{top: '120%', left: '35% '}}
              transition={transition}
              >
              <SkillCard 
              txt1="Backend" 
              txt2="NodeJs, ExpressJs, MongoDB, Redux"
              emoji={humble}
              />
              </motion.div>
             
            </div>
            <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services