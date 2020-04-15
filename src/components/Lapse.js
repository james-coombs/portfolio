import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import Projects from "./projects/Projects";
import Skills from "./Skills";
import Footer from "./Footer";

export default function Lapse() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="Collapse-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div>
          {" "}
          <Projects />
          <Skills />
        </div>
      </Collapse>
    </>
  );
}
