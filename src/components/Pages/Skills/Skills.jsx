import React from 'react'
import CustomNavbar from "../../common/CustomNavbar/CustomNavbar"
import {Container,Row,Col,Image} from "react-bootstrap"
import skills from "../../../resources/skills.png"

function Skills() {
    return (
        <div>
            <CustomNavbar colorClass="text-themePink" />
            <Container>
                <Row>
                    <Col lg={7} className="d-flex align-items-start justify-content-center flex-column">
                        <p className="display-1 fw-bold text-center mb-5 text-tertiary ms-5">Skills</p>
                        <button className="radial-gradient fs-2 fw-bold rounded 3 border-0 py-2 px-5 ms-5">Explore Now</button>
                    </Col>
                    <Col lg={5} className="d-flex align-items-center justify-content-center" style={{height:"90vh"}}>
                        <Image src={skills} alt="projects" className="w-75 me-5" fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills
