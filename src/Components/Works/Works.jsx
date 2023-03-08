import React from 'react'
import './Works.css'
import orglearn from '../../img/orglearn.png'
import rescript from '../../img/rescript.png'
import Berkley from '../../img/Berkley.png'
import tribe from '../../img/tribe.png'
import workmate from '../../img/workmate.png'
import { Link } from "react-scroll";

import {motion} from 'framer-motion'


import { ThemeContext } from "../../Context";
import { useContext } from "react"

const Works = () => {

    

    const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

  return (
    <div className="works">
         <div className="Sec2-left awesome">
              <div className="Sec2Title">
                  <span style={{color: darkMode? 'white': ''}}>I have worked for these</span>
                  <span>Brands & Client</span>
                  <span>Over the years I have helped several brands get through mad rushes, Unrealistic goals, 
                    impossible deadlines and hard times with down-to-earth, on-time solutions to problems. 
                  </span>
              </div>
              <Link
              spy={true}
              to={'contact'}
              smooth={true}
              >
              
              <button className="button section2button">Hire Me</button>
              </Link>

              
              <div
            className="blur w-blur"
            style={{ background: "#ABF1FF94", top: '160%', left : ' 0%' }}
            ></div>
        </div>
        <div className='w-circles'>
            <motion.div 
            initial={{rotate: 45}}
            whileInView={{rotate:0}}
            viewport={{margin: '-40px'}}
            transition={{duration: 3.5, type: 'spring'}}
            
            className="main">
                {/*<img src={facebook} alt="" /> */}
                <div className="floating">
                    <img src={orglearn} alt="" />
                </div>
                <div className="floating">
                    <img src={rescript} alt="" />
                </div>
                <div className="floating">
                    <img src={Berkley} alt="" />
                </div>
                <div className="floating">
                    <img src={tribe} alt="" />
                </div>
                <div className="floating">
                    <img src={workmate} alt="" />
                </div>
            </motion.div>
            <div className=" back-circle blue-circle"></div>
            <div className="back-circle yellow-circle"></div>
        </div>
    </div>
  )
}

export default Works