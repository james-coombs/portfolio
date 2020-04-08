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
  function listSkills() {
    let list = [];

    portfolioData.skills.map((skill) => {
      const arr = ["redux", "ember", "SQLServer", "SOLR", "Sitecore"];

      if (!arr.includes(Object.keys(skill)[0])) {
        list.push(
          <Col key={Object.keys(skill)[0]} sm={3} className="text-center mb-2">
            <i
              className={`skill-icon devicon-${Object.keys(skill)[0]}-plain`}
            ></i>
            <div>{skill[Object.keys(skill)[0]]}</div>
          </Col>
        );
      } else {
        if (Object.keys(skill)[0] === "redux") {
          list.push(
            <Col
              key={Object.keys(skill)[0]}
              sm={3}
              className="text-center mb-2"
            >
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
            <Col
              key={Object.keys(skill)[0]}
              sm={3}
              className="text-center mb-2"
            >
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
          list.push(
            <Col
              key={Object.keys(skill)[0]}
              sm={3}
              className="text-center mb-2"
            >
              <SqlServerSvg
                style={{
                  height: "3rem",
                }}
              />
              <div>{skill[Object.keys(skill)[0]]}</div>
            </Col>
          );
        }
        if (Object.keys(skill)[0] === "SOLR") {
          list.push(
            <Col
              key={Object.keys(skill)[0]}
              sm={3}
              className="text-center mb-2"
            >
              <SolrSvg
                style={{
                  height: "3rem",
                }}
              />
              <div>{skill[Object.keys(skill)[0]]}</div>
            </Col>
          );
        }
        if (Object.keys(skill)[0] === "Sitecore") {
          list.push(
            <Col
              key={Object.keys(skill)[0]}
              sm={3}
              className="text-center mb-2"
            >
              <SitecoreSvg
                style={{
                  height: "3rem",
                }}
              />
              <div>{skill[Object.keys(skill)[0]]}</div>
            </Col>
          );
        }
      }
    });

    return list;
  }
  return <Row className="container skills-row">{listSkills()}</Row>;
}
