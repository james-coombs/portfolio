import portfolioData from "../portfolioData";
import React from "react";
import Contact from "./Contact";

export default function Footer(props) {
  return (
    <div id="contact" className="text-center mt-3">
      <Contact />
      <p className="legal">
        Chevron Icon by{" "}
        <a
          href="https://fontawesome.com/license"
          rel="noopener noreferrer"
          target="_blank"
        >
          FontAwesome
        </a>
      </p>
      {props.isExpanded ? (
        <p className="legal">
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
