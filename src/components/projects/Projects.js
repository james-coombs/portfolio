import portfolioData from "../../portfolioData";
import React from "react";
import Project from "./Project";

export default function Projects(props) {
  return (
    <div style={{ marginTop: "2vh" }}>
      <h4 className="text-center mb-2">Projects</h4>

      {Object.keys(portfolioData.projects).map((key, i) => (
        <Project key={i} project={portfolioData.projects[key]} />
      ))}
    </div>
  );
}
