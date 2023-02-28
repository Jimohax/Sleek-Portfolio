import React from 'react'
import './Experiences.css'

const Experience = () => {
  return (
    <div className="experiences">
        <div className="e-content">
            <div className="e-circle">6+</div>
            <div className="e-label">
                <span>years</span>
                <span>Experience</span>
            </div>
        </div>
        <div className="e-content">
            <div className="e-circle">20+</div>
            <div className="e-label">
                <span>completed</span>
                <span>Projects</span>
            </div>
        </div>
        <div className="e-content">
            <div className="e-circle">3+</div>
            <div className="e-label">
                <span>companies</span>
                <span>Work</span>
            </div>
        </div>
    </div>
  )
}

export default Experience