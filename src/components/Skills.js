import portfolioData from "../portfolioData";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Skills(props) {
  return (
    <div id="skills">
      <h4 className="text-center my-2">Skills</h4>
      <Row className="skills-row">
        {portfolioData.skills.map((skill) => (
          <Col
            key={skill.name}
            md={2}
            sm={3}
            xs={6}
            className="text-center mb-2"
          >
            {skill.svg ? (
              React.createElement(skill.svg)
            ) : (
              <i className={`skill-icon devicon-${skill.class}-plain`}></i>
            )}
            <div>{skill.name}</div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
