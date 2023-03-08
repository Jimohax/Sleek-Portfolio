import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import daniel from "../../img/daniel.jpg";
import moses from "../../img/moses.jpg";
import onyia from "../../img/onyia.jpg";
import patrick from "../../img/patrick.jpg";
import profile5 from "../../img/profile5.jpg";
import profile6 from "../../img/profile6.jpg";
import { Pagination } from "swiper";
import { ThemeContext } from "../../Context";
import { useContext } from "react"

const Testimonials = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const clients = [
		{
			image: moses ,
			testimonial:
				"Results-oriented, focused and self-motivated software engineer. He is a great team player and a unique team leader. ",
		},
		{
			image:   daniel ,
			testimonial:
				"James is my go-to-guy. He is the one i call whenever i am in a tight spot. We have achieved so much together. My tech wingman ",
		},
		{
			image:  onyia,
			testimonial:
				"Jamie is like a cheat code. An amazing guy to work with. His attention to details is indisputable. Any team he is in charge of wins. Period! ",
		},
		{
			image:  patrick ,
			testimonial:
				'His favourite phrase is "I love problems" lol. I love working with him, he makes my job just simple and less stressful'
		},
		
	];

	return (
		<div className="testimonials" id="Testimonial">
			<div className="heading">
				<span style={{color: darkMode? 'white': ''}}>Clients always get </span>
				<span>Exceptional work </span>
				<span>from me...</span>
			</div>
			{/* blur */}
			<div
				className="blur t-blur1"
				style={{ background: "var(--purple)" }}
			></div>
			<div
				className="blur t-blur2"
				style={{ background: "skyblue", left: '3rem'}}
			></div>

			{/* Slider */}
			<Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            >
				{clients.map((client, index) => {
					return (
						<SwiperSlide key={index}>
                            <div className="test-card">
                            <img src={client.image} alt="" />
							<span>{client.testimonial}</span>
                            </div>
							
						</SwiperSlide>
					);
				})}
                
               
                
			</Swiper>
		</div>
	);
};

export default Testimonials;
