import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
	return (
		<div className="nav-wrap">
			<div className="nav-left">
				<div className="nav-logo">Jamie</div>
				<Toggle />
			</div>
			<div className="nav-right">
				<div className="nav-list">
					<ul style={{ listStyleType: "none" }}>
						<Link
							spy={true}
							to={'Navbar'}
							smooth={true}
							activeClass="activeClass"
						>
							<li>Home</li>
						</Link>
						<Link
							spy={true}
							to={'Services'}
							smooth={true}
							
						>
							<li>Services</li>
						</Link>
                        <Link spy={true} to={'Experience'} smooth={true} >
						<li>Experience</li>
                        
                        </Link>
                        <Link spy={true} to={'Portfolio'} smooth={true} >
                        
						<li>Portflio</li>
                        </Link>
                        <Link spy={true} to={'Testimonial'} smooth={true} >
                        
						<li>Testimonial</li>
                        </Link>
					</ul>
				</div>
				<button className="button n-button">Contact</button>
			</div>
		</div>
	);
};

export default Navbar;
