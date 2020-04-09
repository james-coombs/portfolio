import portfolioData from "../portfolioData";
import React from "react";

export default function Footer(props) {
  return (
    <div className="text-center mt-3">
      <div>
        {Object.keys(portfolioData.about.contact).map((key, i) => (
          <a
            key={i}
            className="col-sm-3"
            href={portfolioData.about.contact[key]}
          >
            {key}
          </a>
        ))}
      </div>
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
    </div>
  );
}
