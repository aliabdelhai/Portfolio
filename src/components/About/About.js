import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import myImg from "../../Assets/Memoji-avatar.png";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="myAvtar"
          >
            <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            
          </Col>
          
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <i className="devicon-cplusplus-line tech-icon-images"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i className="devicon-python-plain-wordmark tech-icon-images"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i className="devicon-javascript-plain tech-icon-images"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i className="devicon-nodejs-plain-wordmark tech-icon-images"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i className="devicon-express-original-wordmark tech-icon-images"></i>
        </Col>
                <Col xs={4} md={2} className="tech-icons">
          <i className="devicon-react-original-wordmark tech-icon-images"></i>
        </Col>
                <Col xs={4} md={2} className="tech-icons">
          <i className="devicon-mongodb-plain-wordmark tech-icon-images"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i className="devicon-git-plain-wordmark tech-icon-images"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i className="devicon-bootstrap-plain-wordmark tech-icon-images"></i>
        </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <i className="devicon-linux-plain tech-icon-images"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i className="cib-visual-studio-code tech-icon-images"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i className="cib-postman tech-icon-images"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i className="cib-heroku tech-icon-images"></i>
        </Col>
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
