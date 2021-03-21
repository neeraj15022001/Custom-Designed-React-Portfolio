import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "../Avatar";
import avishka from "../../../../resources/Avishka-14.png";
import { CaretRightFill } from "react-bootstrap-icons";

function Slide2() {
  return (
    <>
      <Container>
        <Row style={{ height: "90vh" }}>
          <Col lg={4}>
            <Avatar image={avishka} />
          </Col>
          <Col
            lg={8}
            className="d-flex align-items-center justify-content-start px-lg-5"
          >
            <p
              className="text-themeBrown fs-1 fw-bolder"
              style={{ lineHeight: "4rem" }}
            >
              My Interests Include
              <br />
              <span className="text-themeYellow display-2 fw-bold">
                Web and UI/UX
              </span>
              <br />
              Development and
              <br />
              Designing
            </p>
            <div className="d-flex align-items-center justify-content-around position-absolute end-0 bottom-0 p-5">
              <span className="text-decoration-underline px-0 swipeline">
                Swipe
              </span>
              <CaretRightFill className="p-0 mt-2" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Slide2;
