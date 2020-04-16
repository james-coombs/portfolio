import portfolioData from "../portfolioData";
import React from "react";
import headshot from "../img/headshot.jpg";
import background from "../img/background.jpg";
import Image from "react-bootstrap/Image";
import Contact from "./Contact";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header(props) {
  return (
    <div
      id="about"
      className="header-backsplash"
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   minHeight: "60vh",
      // }}
    >
      <Row className="header-row">
        <Col md={3} className="text-center">
          {" "}
          <Image className="headshot mt-5 mb-2" src={headshot} roundedCircle />
          <div className="">{portfolioData.about.name}</div>
          <div className="">{portfolioData.about.title}</div>
        </Col>
        <Col md={9}>
          <div className="about-text">
            {portfolioData.about.descriptionTextPrimary}
            <hr className="header-hr" />
            {portfolioData.about.descriptionTextSecondary}
          </div>
        </Col>
      </Row>

      <div className="text-center py-4">
        {props.isExpanded ? null : <Contact />}
      </div>
    </div>
  );
}
