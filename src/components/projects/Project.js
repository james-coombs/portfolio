import React from "react";
import Button from "react-bootstrap/Button";

export default function Project(props) {
  console.log(props.project);

  return (
    <div>
      <h3>{props.project["name"]}</h3>
      {props.project.technologies.map(t => (
        <span>{t}</span>
      ))}
      <p>{props.project["overviewText"]}</p>
      <hr />
      <p>{props.project["descriptionText"]}</p>
      <Button href={props.project["url"]}>url</Button>
      <Button href={props.project["repo"]}>repo</Button>
      {props.project.screenshotUrls.map(s => (
        <img src={s} className="img-fluid" alt={props.project["name"]} />
      ))}
      <iframe
        title={props.project["name"]}
        src={props.project["url"]}
        height="300"
        width="600"
        allowfullscreen=""
        frameborder="0"
      ></iframe>
    </div>
    // <ul>
    //   {Object.keys(props.project).map((key, i) => (
    //     <>

    //       <li key={i}>
    //         {key} = {props.project[key]}
    //       </li>
    //     </>
    //   ))}
    // </ul>
  );
}
