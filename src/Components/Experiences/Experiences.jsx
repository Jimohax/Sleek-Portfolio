import React from 'react'
import './Experiences.css'

import { ThemeContext } from "../../Context";
import { useContext } from "react"

const Experience = () => {
    const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

  return (
    <div className="experiences" id='Experience'>
        <div className="e-content">
            <div className="e-circle" style={{color: darkMode? 'black': ''}} >6+</div>
            <div className="e-label">
                <span>years</span>
                <span>Experience</span>
            </div>
        </div>
        <div className="e-content">
            <div className="e-circle" style={{color: darkMode? 'black': ''}}>20+</div>
            <div className="e-label">
                <span>completed</span>
                <span>Projects</span>
            </div>
        </div>
        <div className="e-content">
            <div className="e-circle" style={{color: darkMode? 'black': ''}}>6+</div>
            <div className="e-label">
                <span>companies</span>
                <span>Work</span>
            </div>
        </div>
    </div>
  )
}

export default Experience