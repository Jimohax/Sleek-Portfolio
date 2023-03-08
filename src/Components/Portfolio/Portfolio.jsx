import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import socials from '../../img/socials.png'
import dashboard from '../../img/dashboard.png'
import Notes from '../../img/Notes.png'
import weather from '../../img/weather.png'
import 'swiper/css'
import { ThemeContext } from "../../Context";
import { useContext } from "react"

const Portfolio = () => {
    const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return <div className="portfolio" id="Portfolio">
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className={'portfolio-slider'}
        >
            <SwiperSlide>
                <img src={socials} alt="" />
                
            </SwiperSlide>
            <SwiperSlide>
                <img src={dashboard} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={weather} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Notes} alt="" />
            </SwiperSlide>
        </Swiper>

    </div>;
};

export default Portfolio;
