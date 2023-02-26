import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-wrap">
        <div className="nav-left">
            <div className="nav-logo">Jamie</div>
            <span>Toggle</span>
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul style={{listStyleType: "none"}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portflio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="button n-button">Contact</button>
        </div>
    </div>
  )
}

export default Navbar