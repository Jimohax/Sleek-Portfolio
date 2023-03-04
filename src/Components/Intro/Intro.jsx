import React from "react";
import "./Intro.css";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Jamie from "../../img/Jamie.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import IFloat from "../IFloat/IFloat";

import { ThemeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
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
					<span>
						Full Stack Developer with an incredible level of
						creativity and experience in web designing
					</span>
				</div>
				<button className="button i-button">Hire Me</button>
				<div className="i-icons">
					<img src={Linkedin} alt="" />
					<img src={Github} alt="" />
					<img src={Instagram} alt="" />
				</div>
			</div>
			<div className="i-right">
				<img src={Vector1} alt="" />
				<img src={Vector2} alt="" />
				<img src={Jamie} alt="" />

				<motion.img 
				
				initial={{left: '-36%'}}				
				whileInView={{left: '-24%'}}
				transition={transition}
				src={glassesimoji} alt="" />

				< motion.div 
				initial={{top: '-4%', left: '74%'}}
				whileInView={{left: '68%'}}
				transition={transition}
				style={{ top: "-20%", right: "50%" }}>
					<IFloat crown={Crown} tag1="Web" tag2="Developer" />
				</motion.div>
				<motion.div 
				initial={{bottom: "30%", left: '-10%'}}
				whileInView={{left: '10%'}}
				transition={transition}
				style={{ bottom: "30%", left: "10%" }}>
					<IFloat crown={thumbup} tag1="Best Design" tag2="Award" /> 
				</motion.div>
				{/* Blur divs */}
				<div
					className="blur"
					style={{ background: "rgb(238 210 255)" }}
				></div>
        <div
					className="blur"
					style={{ background: "#C1F5FF", top: "18rem", left: "-3rem" }}
				></div>
			</div>
		</div>
	);
};

export default Intro;
