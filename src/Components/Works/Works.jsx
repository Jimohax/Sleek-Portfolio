import React from 'react'
import './Works.css'
import fiverr from '../../img/fiverr.png'
import shopify from '../../img/Shopify.png'
import upwork from '../../img/Upwork.png'
import amazon from '../../img/amazon.png'
import facebook from '../../img/Facebook.png'

import { ThemeContext } from "../../Context";
import { useContext } from "react"

const Works = () => {
    const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

  return (
    <div className="works">
         <div className="Sec2-left awesome">
              <div className="Sec2Title">
                  <span style={{color: darkMode? 'white': ''}}>Works for all these</span>
                  <span>Brands & Client</span>
                  <span>This is just a glypse of my super powers. 
                    <br />
                    There is more i can do, as i go above and beyond just to  
                    <br />
                    give my clients the very best with touching edge technology
                  </span>
              </div>
              
              <button className="button section2button">Hire Me</button>

              
              <div
            className="blur"
            style={{ background: "#ABF1FF94", top: '160%', left : ' 0%' }}
            ></div>
        </div>
        <div className='w-circles'>
            <div className="main">
                {/*<img src={facebook} alt="" /> */}
                <div className="floating">
                    <img src={fiverr} alt="" />
                </div>
                <div className="floating">
                    <img src={shopify} alt="" />
                </div>
                <div className="floating">
                    <img src={upwork} alt="" />
                </div>
                <div className="floating">
                    <img src={amazon} alt="" />
                </div>
                <div className="floating">
                    <img src={facebook} alt="" />
                </div>
            </div>
            <div className=" back-circle blue-circle"></div>
            <div className="back-circle yellow-circle"></div>
        </div>
    </div>
  )
}

export default Works