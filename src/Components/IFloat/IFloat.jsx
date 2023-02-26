import React from 'react'
import './IFloat.css'

const IFloat = ({crown, thumbup, tag1, tag2}) => {
  return (
    <div className="i-float">
      
              <div className="right">
                <img src={crown} alt="" />
                <span>{tag1} <br /> {tag2}</span>
                
              </div>
              <div className="lef"></div>
    </div>
  )
}

export default IFloat