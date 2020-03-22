import React from "react";

export default function Project(props) {
  console.log(props.project);
  return (
    <ul>
      {Object.keys(props.project).map((key, i) => (
        <li key={i}>
          {key} = {props.project[key]}
        </li>
      ))}
    </ul>
  );
}
