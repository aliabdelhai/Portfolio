import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/ali_cv.pdf";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience (student positions)</h3>
            <Resumecontent
              title="Physics Teacher"
              date="Mar 2019 – Jun 2019"
              content={["The Hebrew University Of Jerusalem"
              ]}
            />
             <Resumecontent
              title="Mathematics Tutor"
              date="Mar 2018 – Jun 2019"
              content={["The Hebrew University Of Jerusalem"
              ]}
            />
        
            <h3 className="resume-title">LANGUAGES</h3>
            <Resumecontent
              title="Arabic"
              content={[
                "Native language",
              ]}
            />
            <Resumecontent
              title="Hebrew"
              content={[
                "Full professional proficiency",
              ]}
            />
             <Resumecontent
              title="English"
              content={[
                "Full professional proficiency",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Full Stack Web Developer, Elevation Academy "
              date="2020 - 2021"
              content={["An industry-based intensive 3-month coding Bootcamp that covered the entire MERN stack and beyond. Built a number of end-to-end projects from scratch while adhering to solid OOP principles and communicating with a number of external APIs."]}
            />
            <Resumecontent
              title="B.Sc. in Computer and Electrical Engineering"
              date="2016 - 2020"
              content={[`Main courses​: Machine Learning, OOP, Data Structures, Algorithms, Software Engineering, Artificial Intelligence.`,
            `GBA: 80`]}

            />
          
            <h3 className="resume-title">TECHNICAL SKILLS</h3>
            <Resumecontent
              title=""
              content={[
                `Frameworks: React & MobX`,
                `Client Side: JavaScript (ES5/6), jQuery, HTML, CSS`,
                "Server Side: Node.js, Express, MongoDB, SQL",
                "Tools: Git, working in collaboration in Github, Heroku",
                "IDEs: Visual Studio, PyCharm, Intellej, CLion",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
