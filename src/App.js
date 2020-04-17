import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Slides from "./components/Slides";
import Footer from "./components/Footer";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills";
import Container from "react-bootstrap/Container";
import { ReactComponent as chevron } from "./img/svg/chevron-down-solid.svg";

function App() {
  const [isExpanded, setExpanded] = useState(false);

  const componentClasses = ["main-collapse"];
  if (isExpanded) {
    componentClasses.push("show");
  }

  return (
    <Container fluid className="pr-0 pl-0">
      <div className="main-content">
        {isExpanded ? <Navbar /> : null}
        <Header isExpanded={isExpanded} />
        {isExpanded ? null : (
          /* <div onClick={(e) => console.log(e, e.target)}> link to specific project */
          <Slides />
        )}
        <Collapse
          // appear={true}
          id="main-collapse"
          className={componentClasses.join(" ")}
          in={isExpanded}
        >
          <div className="container">
            <Projects />
            <Skills />
          </div>
        </Collapse>
      </div>
      <div className="text-center mt-5">
        <div
          className="expand-btn"
          onClick={() => setExpanded(!isExpanded)}
          aria-controls="Collapse-collapse-text"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Back to basics" : "Show me more"}
          <span className={`rotate ${isExpanded ? "point-up" : ""}`}>
            {React.createElement(chevron)}
          </span>
        </div>
      </div>
      <Footer isExpanded={isExpanded} />
    </Container>
  );
}

export default App;
