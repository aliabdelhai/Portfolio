import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Abdelhai </span>
            from <span className="purple"> Tira, Israel.</span>
            <br />I earned a Bachelor of Computer and Electrical Engineering from
            The Hebrew University Of Jerusalem.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Camping
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Swimming 
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Traveling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">ali abdelhai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
