import portfolioData from "../portfolioData";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as ReduxSvg } from "../img/svg/redux.svg";
import { ReactComponent as EmberSvg } from "../img/svg/ember.svg";
import { ReactComponent as SolrSvg } from "../img/svg/solr.svg";
import { ReactComponent as SqlServerSvg } from "../img/svg/sqlserver.svg";
import { ReactComponent as SitecoreSvg } from "../img/svg/sitecore.svg";

export default function Skills(props) {
  return (
    <Row className="container skills-row">
      {portfolioData.skills.map((skill) => (
        <Col key={skill.name} sm={3} className="text-center mb-2">
          {skill.svg ? (
            React.createElement(skill.svg)
          ) : (
            <i className={`skill-icon devicon-${skill.class}-plain`}></i>
          )}
          <div>{skill.name}</div>
        </Col>
      ))}
    </Row>
  );
}
