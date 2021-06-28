import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "../Avatar";
import Memoji from "../../../../resources/3.png"
import { CaretRightFill } from "react-bootstrap-icons";

function Slide3() {
  return (
    <>
      <Container>
        <Row style={{ height: "90vh" }}>
          <Col lg={4}>
            <Avatar image={Memoji} />
          </Col>
          <Col
            lg={8}
            className="d-flex align-items-center justify-content-start px-lg-5"
          >
            <p
              className="text-themeBrown fs-1 fw-bolder"
              style={{ lineHeight: "4rem" }}
            >
              I am currently working on
              <br />
              <span className="text-themeYellow display-2 fw-bold">
                ReactJS and Java
              </span>
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

export default Slide3;
