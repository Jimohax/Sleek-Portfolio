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

const Intro = () => {
	return (
		<div className="Intro">
			<div className="i-left">
				<div className="i-name">
					<span>Hi! I Am</span>
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
				<img src={glassesimoji} alt="" />

				<div style={{ top: "-20%", right: "50%" }}>
					<IFloat crown={Crown} tag1="Web" tag2="Developer" />
				</div>
				<div style={{ bottom: "30%", left: "10%" }}>
					<IFloat crown={thumbup} tag1="Best Design" tag2="Award" /> 
				</div>
				{/* Blur divs */}
				<div
					className="blur"
					style={{ background: "rgb(238 210 255)" }}
				></div>
			</div>
		</div>
	);
};

export default Intro;
