import portfolioData from "../../portfolioData";
import React from "react";
import Project from "./Project";

export default function Projects(props) {
  return (
    <div id="projects" style={{ marginTop: "0px" }}>
      <h3 className="text-center my-2">Projects</h3>

      {Object.keys(portfolioData.projects).map((key, i) => (
        <Project
          key={i}
          github={portfolioData.about.contact.find((e) => e.name === "Github")}
          project={portfolioData.projects[key]}
        />
      ))}
    </div>
  );
}
