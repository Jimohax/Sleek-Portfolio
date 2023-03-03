import React from 'react'
import SkillCard from '../SkillCard/SkillCard'
import './Services.css'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import heart from '../../img/heartemoji.png'
import cv from './cv.pdf'

import { ThemeContext } from "../../Context";
import { useContext } from "react"

const Services = () => {

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
              <SkillCard 
              txt1="Design" 
              txt2="Photoshop, Figma"
              emoji={heart}
              />
              <SkillCard 
              txt1="Frontend" 
              txt2="HTML, CSS, Javascript, React, Bootstrap"
              emoji={glasses}
              />
              <SkillCard 
              txt1="Backend" 
              txt2="NodeJs, ExpressJs, MongoDB, Redux"
              emoji={humble}
              />
            </div>
            <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services