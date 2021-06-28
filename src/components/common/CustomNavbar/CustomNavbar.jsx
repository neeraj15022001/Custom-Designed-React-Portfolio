import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomNavbar({ colorClass, activePage }) {
  // const activeState = activeState
  return (
    <>
      <Navbar bg="white" variant="light" expand="lg">
        <Container>
          <Navbar.Brand
            href="#Neeraj"
            className={`font-pacifico ${colorClass} fs-3`}
          >
            neeraj
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={`${colorClass}`}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" activeKey={activePage}>
              <Nav.Link href="/" className={`text-secondary`}>
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-secondary ms-lg-4">
                About
              </Nav.Link>
              <Nav.Link href="/skills" className="text-secondary ms-lg-4">
                Skills
              </Nav.Link>
              <Nav.Link href="/projects" className="text-secondary ms-lg-4">
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
