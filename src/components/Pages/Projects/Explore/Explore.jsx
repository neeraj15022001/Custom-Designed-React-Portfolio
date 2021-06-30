import React from "react";
import "./Explore.css";
import Navbar from "../../../common/CustomNavbar/CustomNavbar";
import { Image, Container } from "react-bootstrap";
import {Slide1, Slide2, Slide3} from "./Images.js"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);

function Explore() {
  return (
    <div>
      <Navbar colorClass="text-themeBlue" activePage="/projects" />
      <Container
        style={{ height: "92vh" }}
        className="d-flex align-items-center"
      >
        <Container fliud>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Container
                className="d-flex align-items-center justify-content-center"
                fluid
              >
                <Image
                  draggable="false"
                  src={Slide1}
                  alt="Personal Portfolio"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Personal Portfolio"
                  className="mx-auto"
                  fluid
                />
              </Container>
            </SwiperSlide>
            <SwiperSlide>
              <Container
                className="d-flex align-items-center justify-content-center"
                fluid
              >
                <Image
                  draggable="false"
                  src={Slide2}
                  alt="Concept Portfolio"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Concept Portfolio"
                  fluid
                />
              </Container>
            </SwiperSlide>
            <SwiperSlide>
              <Container
                className="d-flex align-items-center justify-content-center"
                fluid
              >
                <Image
                  draggable="false"
                  src={Slide3}
                  alt="Love Alarm"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Love Alarm"
                  fluid
                />
              </Container>
            </SwiperSlide>
          </Swiper>
        </Container>
      </Container>
    </div>
  );
}

export default Explore;
