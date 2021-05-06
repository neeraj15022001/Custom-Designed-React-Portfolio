import React from "react";
import Navbar from "../../../common/CustomNavbar/CustomNavbar";
import { Image, Container, Carousel } from "react-bootstrap";
import housemed from "../../../../resources/housemed_tablet.png";
import magictouch from "../../../../resources/magictouch_tablet.png";
import portfolio from "../../../../resources/portfolio_tablet.png";
import prevButton from "../../../../resources/prev-button.png"
import nextButton from "../../../../resources/next-button.png"

function Explore() {
  return (
    <div>
      <Navbar colorClass="text-themeBlue" activePage="/projects" />
      <Container className="my-5">
        <Carousel touch={true} indicators={true} nextLabel="" prevLabel="" nextIcon={<img src={nextButton} />} prevIcon={<img src={prevButton} />}>
          <Carousel.Item>
            <Container className="d-flex align-items-center justify-content-center">
              <Image draggable="false" src={magictouch} alt="Magic Touch" data-toggle="tooltip" data-placement="top" title="Magic Touch" fluid />
            </Container>
            {/* <Carousel.Caption>
              <h5 className="text-capitalize">magic touch</h5>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <Container className="d-flex align-items-center justify-content-center">
              <Image draggable="false" src={housemed} alt="House Med" data-toggle="tooltip" data-placement="top" title="House Med" fluid />
            </Container>

            {/* <Carousel.Caption>
            <h5 className="text-capitalize">house med</h5>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <Container className="d-flex align-items-center justify-content-center">
              <Image draggable="false" src={portfolio} alt="Personal Portfolio" data-toggle="tooltip" data-placement="top" title="Personal Portfolio" fluid />
            </Container>

            {/* <Carousel.Caption>
            <h5 className="text-capitalize">personal portfolio</h5>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Explore;
