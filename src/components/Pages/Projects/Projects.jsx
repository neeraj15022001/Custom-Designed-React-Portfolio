import React from 'react'
import CustomNavbar from '../../common/CustomNavbar/CustomNavbar'
import {Container,Row,Col,Image} from "react-bootstrap"
import projects from "../../../resources/projects.png"

function Projects() {
    const height = "80vh"
    return (
        <div style={{"height" : height}}>
            <CustomNavbar colorClass="text-themePink" />
            <Container style={{"height" : height}}>
                <Row style={{"height" : height}}>
                    <Col lg={4} className="d-flex align-items-center justify-content-center flex-column">
                        <p className="display-1 fw-bold text-center mb-5 text-tertiary">Projects</p>
                        <button className="radial-gradient fs-2 fw-bold rounded 3 border-0 py-2 px-5">Explore Now</button>
                    </Col>
                    <Col lg={8} className="d-flex align-items-end justify-content-end">
                        <Image src={projects} alt="projects" fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects