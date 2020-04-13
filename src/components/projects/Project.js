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
  const toggleFrame = (id) => {
    const iFrame = document.createElement("iframe");

    iFrame.setAttribute("title", props.project["name"]);
    iFrame.setAttribute("src", props.project["url"]);
    iFrame.setAttribute("allowFullScreen", "no");
    iFrame.setAttribute("frameBorder", "0");

    const childEl = document.getElementById(id).firstChild;
    childEl === null
      ? document.getElementById(id).appendChild(iFrame)
      : childEl.remove();
  };

  const list = [
    backlog,
    biologicalsamplescsvapi0,
    biologicalsamplescsvapi1,
    sweatersforturtles,
    tictactoe,
    yamba,
  ];

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
            const projectName = props.project["name"]
              .toLowerCase()
              .replace(/\W/g, "");
            if (e.toString().includes(projectName)) {
              if (projectName === "biologicalsamplescsvapi") {
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
                <>
                  <img
                    key={i}
                    src={e}
                    className="img-fluid mb-1"
                    alt={props.project["name"]}
                  />
                  <Button onClick={() => toggleFrame(props.project["name"])}>
                    Toggle Iframe
                  </Button>
                  <div id={props.project["name"]}></div>{" "}
                </>
              );
            }
          })}
        </Col>
      </Row>
    </div>
  );
}
