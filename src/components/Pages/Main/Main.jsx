import React from 'react'
import {Container,Row,Col,Image} from "react-bootstrap"
import kaka from "../../../resources/kaka.png"
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CustomNavbar from "../../common/CustomNavbar/CustomNavbar.jsx";

function Main() {
    return (
        <>
            <CustomNavbar colorClass="text-theme" activePage="/home" />
            <Container className="py-5">
                <Row>
                    <Col xs={12} lg={6} className="d-flex align-items-start flex-column">
                        <div className="d-flex align-items-center justify-content-center flex-fill">
                        <p className="display-4 fw-bolder mb-5 text-tertiary">Hello my<br/> name is <span className="text-theme">Avishka</span>.<br/> I am a Full Stack<br/> Developer</p>
                        </div>
                        <div className="py-3 text-tertiary">
                            <EmailIcon className="fs-1" />
                            <LinkedInIcon className="ms-3 fs-1" />
                            <GitHubIcon className="ms-3 fs-1 active" />
                        </div>
                    </Col>
                    <Col xs={0} lg={6} className="d-flex align-items-center justify-content-center">
                        <Image className="d-none d-lg-block" src={kaka} alt="kaka" fluid/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Main
