import React from "react";
import "./Intro.css";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import pic3 from "../../img/pic3.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import IFloat from "../IFloat/IFloat";

import { ThemeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';
import { Link } from "react-scroll";
// import { useId } from 'react';
// import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'



const Intro = () => {
	const transition = {duration: 2, type: 'spring'}
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="Intro">
			<div className="i-left">
				<div className="i-name">
					<span style={darkMode ? {color: 'white'}:{color: 'var(--black)'} }>Hi! I Am</span>
					<span>Jamie Ohakwe</span>
					<span>Full Stack Software Engineer</span>
					<span>
						Mongo DB | Express | React | Node <br />
						If what  you are looking for is not just the best software engineer but also a resilient problem solver
						and a winner, <br /> then i am your guy.
					</span>
				</div>
				<Link
				spy={true}
				to={'contact'}
				smooth={true}
				>
				
				<button className="button i-button">Hire Me</button>
				</Link>
				<div className="i-icons">
					<img src={Linkedin} alt="" />
					<img src={Github} alt="" />
					<img src={Instagram} alt="" />
				</div>
			</div>
			<div className="i-right">
				<img src={Vector1} alt="" />
				<img src={Vector2} alt="" />
				<img src={pic3} alt="" />
				{/* <img src={pic} alt="" /> */}

				<motion.img 
				
				initial={{left: '-36%'}}				
				whileInView={{left: '-24%'}}
				transition={transition}
				src={glassesimoji} alt="" />

				< motion.div className="float-div"
				initial={{top: '-20%', right: '30%'}}
				whileInView={{right: '50%'}}
				transition={transition}
				style={{ top: "-20%", right: "50%" }}>
					<IFloat crown={Crown} tag1="Web" tag2="Developer" />
				</motion.div>
				<motion.div className="float-div"
				initial={{bottom: "30%", left: '-10%'}}
				whileInView={{left: '10%'}}
				transition={transition}
				style={{ bottom: "30%", left: "10%" }}>
					<IFloat crown={thumbup} tag1="Best Design" tag2="Award" /> 
				</motion.div>
				{/* Blur divs */}
				<div
					className="blur i-blur"
					style={{ background: "rgb(238 210 255)" }}
				></div>
        <div
					className="blur i-blur"
					style={{ background: "#C1F5FF", top: "18rem", left: "-3rem" }}
				></div>
			</div>
		</div>
	);
};

export default Intro;
