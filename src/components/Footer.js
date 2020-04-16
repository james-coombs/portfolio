import portfolioData from "../portfolioData";
import React from "react";
import Contact from "./Contact";

export default function Footer(props) {
  return (
    <div id="contact" className="text-center mt-3">
      <div>
        <Contact />
      </div>
      {props.isExpanded ? (
        <p>
          <a
            href="https://iconscout.com/icons/sitecore"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sitecore Icon
          </a>
          {" by "}
          <a
            href="https://iconscout.com/contributors/icons8"
            rel="noopener noreferrer"
            target="_blank"
          >
            Icons8
          </a>
        </p>
      ) : null}
    </div>
  );
}
