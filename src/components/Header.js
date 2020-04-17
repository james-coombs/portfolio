import portfolioData from "../portfolioData";
import React from "react";
import headshot from "../img/headshot.jpg";
import Image from "react-bootstrap/Image";
import Contact from "./Contact";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header(props) {
  return (
    <div id="about" className="header-backsplash">
      <Row className="header-row container">
        <Col lg={4} className="text-center px-0">
          {" "}
          <Image className="headshot mt-5 mb-2" src={headshot} roundedCircle />
        </Col>
        <Col lg={7} className="about-text px-0">
          <div className="">
            <span className="h2 james-coombs">{portfolioData.about.name}</span>
            <span className="h2 header-bar">{" | "}</span>
            <span className="h3 web-developer">
              {portfolioData.about.title}
            </span>
          </div>

          <hr className="header-hr" />
          <div>
            {portfolioData.about.descriptionTextPrimary}
            <br />
            {portfolioData.about.descriptionTextSecondary}
          </div>
        </Col>
      </Row>

      <div className="text-center py-4">
        {props.isExpanded ? <Contact /> : null}
      </div>
    </div>
  );
}
