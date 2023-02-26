import React from 'react'
import './Intro.css'
import Linkedin from '../../img/linkedin.png'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy3 from '../../img/boy3.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'


const Intro = () => {
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Jamie Ohakwe</span>
          <span> 
            Full Stack Developer with an incredible level of creativity and experience in web designing
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className='i-icons'>
            <img src={Linkedin} alt="" />
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy3} alt="" />

            <div className="i-float">
              <img  src={glassesimoji} alt="" />
              <div className="right"></div>
              <div className="lef"></div>
          </div>
      </div>
      
      
    </div>
    
  )
}

export default Intro