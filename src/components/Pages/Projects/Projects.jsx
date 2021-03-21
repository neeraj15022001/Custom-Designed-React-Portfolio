import React from "react";
import CustomNavbar from "../../common/CustomNavbar/CustomNavbar";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import projects from "../../../resources/projects.png";

function Projects() {
  return (
    <div>
      <CustomNavbar colorClass="text-themePink" activePage="/projects" />
      <Container>
        <Row>
          <Col
            lg={4}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <p className="display-1 fw-bold text-center mb-5 text-tertiary">
              Projects
            </p>
            <Nav.Link
              className="radial-gradient fs-2 fw-bold rounded 3 border-0 py-2 px-5 text-decoration-none text-white"
              href="/projects/explore"
            >
              Explore Now
            </Nav.Link>
          </Col>
          <Col lg={8} className="d-flex align-items-end justify-content-end">
            <Image
              src={projects}
              alt="projects"
              className="w-75"
              draggable="false"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
