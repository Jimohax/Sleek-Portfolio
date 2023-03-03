import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";
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
			image:  profile1,
			testimonial:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione expedita mollitia tenetur, error architecto tempora ut dolores sed quam, inventore est laudantium pariatur praesentium dignissimos!",
		},
		{
			image:  profile2 ,
			testimonial:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, corrupti.",
		},
		{
			image:  profile3,
			testimonial:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum magni optio? Quis incidunt commodi voluptate iure, rem ullam, reprehenderit unde culpa consequatur id ex. Veniam ab est voluptas adipisci quis in, consequatur modi laborum tempora temporibus dicta, recusandae eius.",
		},
		{
			image:  profile4 ,
			testimonial:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae, eaque doloribus dolor non quasi.",
		},
		{
			image:  profile5 ,
			testimonial:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet reprehenderit nesciunt dicta perferendis quaerat necessitatibus et distinctio, eos blanditiis odio corrupti repudiandae obcaecati nam officiis beatae ratione voluptatibus odit vitae.",
		},
		{
			image: profile6,
			testimonial:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dicta in fugiat aperiam deleniti facere, dolorem incidunt temporibus a optio nulla ipsa doloribus! Impedit rem minima aut dicta, rerum laudantium?",
		},
	];

	return (
		<div className="testimonials">
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
				style={{ background: "skyblue", left: '3rem' }}
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
