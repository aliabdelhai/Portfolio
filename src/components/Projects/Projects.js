import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import crm from "../../Assets/Projects/crm.png";
import readme from "../../Assets/Projects/readme.jpeg";
import autism from "../../Assets/Projects/autism.jpeg";
import delivery from "../../Assets/Projects/delivery.jpeg";
import goldRush from "../../Assets/Projects/gold_rush.png";
import nasa from "../../Assets/Projects/nasa.png";
import reflix from "../../Assets/Projects/reflix.png";
import weather from "../../Assets/Projects/weather.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crm}
              isBlog={false}
              title="CRM System"
              description=" A customer relationship management System for sporting goods store include contact management system and order management system.
              tool that allows companies to manage everything to-do with their customers. "
              link="https://github.com/aliabdelhai/CRM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goldRush}
              isBlog={false}
              title="Gold Rush"
              description="A web game for 2 players. To win each player needs to collect as many coins as he can, and avoid getting in walls The thought of creating this game was to implement the idea of matrix data structure in a fun way."
              link="https://github.com/aliabdelhai/Gold-Rush"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reflix}
              isBlog={false}
              title="Reflix"
              description="A Video rent mockup. you can login with existing users, each user have different budget. the user can search and choose between movies from the catalog depending on his budget. each movie has also an about page with some information. works with external api."
              link="https://github.com/aliabdelhai/Reflix"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={delivery}
              isBlog={false}
              title="Delivery"
              description="This platform will give the opportunity to shop owners to add their deliveries to our website and allow customers to get their products delivered to them in the fastest and most efficient route."
              link="https://github.com/AubidaNaalwa/deliveryApplication"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather"
              description="A full-stack web application that shows the weather around the world. the user can look for the weather by city name and add/remove from the favorite list."
              link="https://github.com/aliabdelhai/WeatherApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasa}
              isBlog={false}
              title="NASA"
              description="Nasa App is a mobile application for space lovers. Through the app, people can get NASA's best pictures and videos with short information about them."
              link="https://github.com/aliabdelhai/NASApp"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
        <strong className="purple">Android  </strong>Projects 
        </h1>
        <p style={{ color: "white" }}>Using Android Studio</p>
        <Row style={{ justifyContent: "center" }}>
          
        <Col md={4} className="plog-card">
            <BlogCard
              imgPath={readme}
              isBlog={false}
              title="Read-Me"
              description="Application For reading, viewing and listening to stories. implemented​ ​and​ ​validated​ ​an application on Android that’s designed mainly for kids, where they can listen to stories while using the smart devices."
            />
          </Col>
          <Col md={4} className="plog-card">
            <BlogCard
              imgPath={autism}
              isBlog={false}
              title="Speech Recognition, NLP and Touch Screen"
              description="The main targeted users of this application are teachers working with children with special needs. The main aim was to help teachers focus on the students and deduce their behavior."
            />
          </Col>
       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
