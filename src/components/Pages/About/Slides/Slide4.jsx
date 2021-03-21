import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "../Avatar";
import avishka from "../../../../resources/Avishka-29.png";

function Slide4() {
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
              For Collaboration
              <br />
              reach me via
              <br />
              <span className="text-themeYellow display-2 fw-bold">
                <a
                  className="text-themeYellow"
                  href="mailto:avishka0452.cse19@chitkara.edu.in"
                >
                  Email
                </a>{" "}
                or{" "}
                <a
                  className="text-themeYellow"
                  href="https://www.linkedin.com/in/avishka24/"
                >
                  Linkedin
                </a>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Slide4;
