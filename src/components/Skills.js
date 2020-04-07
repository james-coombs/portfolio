import portfolioData from "../portfolioData";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as ReduxSvg } from "../img/svg/redux.svg";
import { ReactComponent as EmberSvg } from "../img/svg/ember.svg";
import { ReactComponent as SolrSvg } from "../img/svg/solr.svg";
import { ReactComponent as SqlServerSvg } from "../img/svg/sqlserver.svg";

export default function Skills(props) {
  function skillLogic() {
    let list = [];

    portfolioData.skills.map((skill) => {
      if (Object.keys(skill)[0] === "redux") {
        console.log(Object.keys(skill)[0]);
        list.push(
          <Col key={Object.keys(skill)[0]} sm={3} className="text-center mb-2">
            <ReduxSvg
              style={{
                height: "3rem",
              }}
            />
            <div>{skill[Object.keys(skill)[0]]}</div>
          </Col>
        );
      }
      if (Object.keys(skill)[0] === "ember") {
        list.push(
          <Col key={Object.keys(skill)[0]} sm={3} className="text-center mb-2">
            <EmberSvg
              style={{
                height: "3rem",
              }}
            />
            <div>{skill[Object.keys(skill)[0]]}</div>
          </Col>
        );
      }
      if (Object.keys(skill)[0] === "SQLServer") {
        console.log(Object.keys(skill)[0]);
      }
      if (Object.keys(skill)[0] === "SOLR") {
        console.log(Object.keys(skill)[0]);
      }
      if (Object.keys(skill)[0] === "Sitecore") {
        console.log(Object.keys(skill)[0]);
      } else {
        list.push(
          <Col key={Object.keys(skill)[0]} sm={3} className="text-center mb-2">
            <i
              className={`skill-icon devicon-${Object.keys(skill)[0]}-plain`}
            ></i>
            <div>{skill[Object.keys(skill)[0]]}</div>
          </Col>
        );
      }
    });

    return list;
  }
  return <Row className="container">{skillLogic()}</Row>;
}
