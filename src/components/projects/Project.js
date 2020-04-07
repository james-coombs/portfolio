import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backlog from "../../img/screenshots/backlog.png";
import biologicalsamplescsvapi0 from "../../img/screenshots/biologicalsamplescsvapi0.png";
import biologicalsamplescsvapi1 from "../../img/screenshots/biologicalsamplescsvapi1.png";
import sweatersforturtles from "../../img/screenshots/sweatersforturtles.png";
import tictactoe from "../../img/screenshots/tictactoe.png";
import yamba from "../../img/screenshots/yamba.png";

export default function Project(props) {
  const list = [
    backlog,
    biologicalsamplescsvapi0,
    biologicalsamplescsvapi1,
    sweatersforturtles,
    tictactoe,
    yamba,
  ];
  console.log(props.project["name"].toLowerCase().replace(/\W/g, ""));

  return (
    <div className="mb-3 project-card">
      <Row>
        <Col sm={5}>
          <h3>{props.project["name"]}</h3>
          {props.project.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
          <p>{props.project["overviewText"]}</p>
          <hr className="portfolio-hr" />
          <p>{props.project["descriptionText"]}</p>
          <Button className="mr-1" href={props.project["url"]}>
            url
          </Button>
          <Button className="mr-1" href={props.project["repo"]}>
            repo
          </Button>
        </Col>

        <Col sm={7}>
          {list.map((e, i) => {
            if (
              e
                .toString()
                .includes(
                  props.project["name"].toLowerCase().replace(/\W/g, "")
                )
            ) {
              if (
                props.project["name"].toLowerCase().replace(/\W/g, "") ===
                "biologicalsamplescsvapi"
              ) {
                return (
                  <>
                    <p key={i}>
                      {e.toString().includes("biologicalsamplescsvapi0")
                        ? "User Interface"
                        : "JSON Data"}
                    </p>
                    <img
                      key={i}
                      src={e}
                      className="img-fluid mb-1"
                      alt={props.project["name"]}
                    />
                  </>
                );
              }
              return (
                <img
                  key={i}
                  src={e}
                  className="img-fluid mb-1"
                  alt={props.project["name"]}
                />
              );
            }
          })}

          {/* <iframe
            title={props.project["name"]}
            src={props.project["url"]}
            style={{
              height: "25rem",
              width: "34rem"
            }}
            allowfullscreen="no"
            frameborder="0"
          ></iframe> */}
        </Col>
      </Row>
    </div>
  );
}
