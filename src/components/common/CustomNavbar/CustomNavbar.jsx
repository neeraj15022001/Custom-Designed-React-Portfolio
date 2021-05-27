import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomNavbar() {
  return (
    <>
      <Navbar bg="white" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#avishka" className="font-pacifico text-theme fs-3">
            Avishka
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-theme" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="active">Home</Nav.Link>
              <Nav.Link href="#about" className="text-secondary ms-lg-4">About</Nav.Link>
              <Nav.Link href="#skills" className="text-secondary ms-lg-4">Skills</Nav.Link>
              <Nav.Link href="#projects" className="text-secondary ms-lg-4">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
