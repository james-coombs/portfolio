import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function Project(props) {
  const toggleFrame = (id, e) => {
    const iFrame = document.createElement("iframe");

    iFrame.setAttribute("id", `iframe-${props.project["name"]}`);
    iFrame.setAttribute("title", props.project["name"]);
    iFrame.setAttribute("src", props.project["url"]);
    iFrame.setAttribute("allowFullScreen", "no");
    iFrame.setAttribute("frameBorder", "0");

    const childEl = document.getElementById(id).firstChild;

    if (!childEl.classList.contains("d-none")) {
      childEl.classList.add("d-none");

      document.getElementById(`iframe-${props.project["name"]}`)
        ? document
            .getElementById(`iframe-${props.project["name"]}`)
            .classList.remove("d-none")
        : document.getElementById(id).appendChild(iFrame);
    } else {
      childEl.classList.remove("d-none");

      document
        .getElementById(`iframe-${props.project["name"]}`)
        .classList.add("d-none");
    }
  };

  return (
    <div className="mb-3 project-card">
      <Row>
        <Col lg={6} md={12}>
          <h3>{props.project["name"]}</h3>
          {props.project.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
          <p>{props.project["overviewText"]}</p>
          <hr className="portfolio-hr" />
          <p>{props.project["descriptionText"]}</p>
          <Row className="project-btn-row mb-2">
            <Button
              variant="light"
              className=" project-btn"
              href={props.project["url"]}
            >
              Go to site
            </Button>
            <Button
              variant="light"
              className=" project-btn"
              href={props.project["repo"]}
            >
              GitHub Repo
            </Button>
            <Button
              variant="light"
              onClick={(e) => toggleFrame(props.project["name"], e)}
              className=" project-btn"
            >
              Toggle Embed
            </Button>
          </Row>
        </Col>

        <Col lg={6} md={12}>
          <div id={props.project["name"]}>
            <div className="images">
              <Tabs defaultActiveKey="0" id="">
                {props.project.screenshots.map((s, i) => (
                  <Tab eventKey={i} title={s.name}>
                    <img
                      key={props.project["name"]}
                      src={s.src}
                      className="img-fluid mb-1"
                      alt={props.project["name"]}
                    />
                    {/* <div id={props.project["name"]}></div>{" "} */}
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
