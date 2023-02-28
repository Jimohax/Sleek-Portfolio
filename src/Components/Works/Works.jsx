import React from 'react'
import './Works.css'

const Works = () => {
  return (
    <div className="works">
         <div className="Sec2-left awesome">
              <div className="Sec2Title">
                  <span>Works for all these</span>
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
            <div className="floating">
                
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Works