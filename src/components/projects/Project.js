import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Project(props) {
  const toggleFrame = (id, e) => {
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
            Go to site
          </Button>
          <Button className="mr-1" href={props.project["repo"]}>
            GitHub Repo
          </Button>
        </Col>

        <Col sm={7}>
          {Array.isArray(props.project["screenshot"]) ? (
            props.project["screenshot"].map((s, i) => (
              <img
                key={i}
                src={s}
                className="img-fluid mb-1"
                alt={props.project["name"]}
              />
            ))
          ) : (
            <>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">
                    Click to toggle project embed!
                  </Tooltip>
                }
              >
                <img
                  key={props.project["name"]}
                  src={props.project["screenshot"]}
                  className="img-fluid mb-1"
                  alt={props.project["name"]}
                  onClick={(e) => toggleFrame(props.project["name"], e)}
                />
              </OverlayTrigger>
              <div id={props.project["name"]}></div>{" "}
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}
