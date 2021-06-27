import React from "react";
import "./Explore.css";
import Navbar from "../../../common/CustomNavbar/CustomNavbar";
import { Image, Container } from "react-bootstrap";
// import housemed from "../../../../resources/housemed_tablet.png";
// import magictouch from "../../../../resources/magictouch_tablet.png";
// import portfolio from "../../../../resources/portfolio_tablet.png";
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
                {/* <Image
                  draggable="false"
                  src={magictouch}
                  alt="Magic Touch"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Magic Touch"
                  className="mx-auto"
                  fluid
                /> */}
                SLIDE 1
              </Container>
            </SwiperSlide>
            <SwiperSlide>
              <Container
                className="d-flex align-items-center justify-content-center"
                fluid
              >
                {/* <Image
                  draggable="false"
                  src={housemed}
                  alt="House Med"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="House Med"
                  fluid
                /> */}
                SLIDE 2
              </Container>
            </SwiperSlide>
            <SwiperSlide>
              <Container
                className="d-flex align-items-center justify-content-center"
                fluid
              >
                {/* <Image
                  draggable="false"
                  src={portfolio}
                  alt="Personal Portfolio"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Personal Portfolio"
                  fluid
                /> */}
                SLIDE 3
              </Container>
            </SwiperSlide>
          </Swiper>
        </Container>
      </Container>
    </div>
  );
}

export default Explore;
