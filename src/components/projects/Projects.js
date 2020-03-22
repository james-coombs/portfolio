import portfolioData from "../../portfolioData";
import React from "react";
import Project from "./Project";

export default function Projects(props) {
  return (
    <div>
      {Object.keys(portfolioData.projects).map((key, i) => (
        <Project key={i} project={portfolioData.projects[key]} />
      ))}
    </div>
  );
}
