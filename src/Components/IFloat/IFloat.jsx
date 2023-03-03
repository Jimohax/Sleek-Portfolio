import React from 'react'
import './IFloat.css'

import { ThemeContext } from "../../Context";
import { useContext } from "react"

const IFloat = ({crown, thumbup, tag1, tag2}) => {
  const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
  return (
    <div className="i-float">
      
              <div className="right">
                <img src={crown} alt="" />
                <span style={darkMode? {color : 'black'}: {color: "black"}} >{tag1} <br /> {tag2}</span>
                
              </div>
              <div className="lef"></div>
    </div>
  )
}

export default IFloat