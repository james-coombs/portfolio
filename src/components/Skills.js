import portfolioData from "../portfolioData";
import React from "react";

export default function Skills(props) {
  return (
    <ul>
      {portfolioData.skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
