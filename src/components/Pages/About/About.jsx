import React from "react";
import Navbar from "../../common/CustomNavbar/CustomNavbar";
import Slide1 from "./Slides/Slide1";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";
import Slide4 from "./Slides/Slide4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function About() {
  return (
    <>
      <Navbar colorClass="text-themeYellow" activePage="/about" />
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide4 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default About;
