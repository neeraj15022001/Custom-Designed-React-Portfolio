import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import cartoonIllustration from "../../../resources/cartoonIllustration.png";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CustomNavbar from "../../common/CustomNavbar/CustomNavbar.jsx";

function Main() {
  return (
    <>
      <CustomNavbar colorClass="text-theme" activePage="/" />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "92vh", paddingTop: "4rem" }}
      >
        <Container className="py-5">
          <Row>
            <Col
              xs={12}
              lg={6}
              className="d-flex align-items-start flex-column"
            >
              <div className="d-flex align-items-center justify-content-center flex-fill">
                <p className="display-4 fw-bolder mb-5 text-tertiary">
                  Hello my
                  <br /> name is <span className="text-theme">Neeraj</span>.
                  <br /> I am a Front End
                  <br /> Developer
                </p>
              </div>
              <div className="py-3 text-tertiary">
                <EmailIcon className="fs-1" />
                <LinkedInIcon className="ms-3 fs-1" />
                <GitHubIcon className="ms-3 fs-1 active" />
              </div>
            </Col>
            <Col
              xs={0}
              lg={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                className="d-lg-block"
                src={cartoonIllustration}
                draggable="false"
                alt="cartoonIllustration"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Main;
