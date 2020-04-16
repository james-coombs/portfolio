import React, { useState } from "react";
import "./App.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Slides from "./components/caurosel/Slides";
import Footer from "./components/Footer";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills";

import Container from "react-bootstrap/Container";

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
          appear={true}
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
      <div className="text-center">
        <Button
          className="mt-5"
          onClick={() => setExpanded(!isExpanded)}
          aria-controls="Collapse-collapse-text"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Hide" : "Expand"}
        </Button>
      </div>
      <Footer isExpanded={isExpanded} />
    </Container>
  );
}

export default App;
