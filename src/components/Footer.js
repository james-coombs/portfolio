import portfolioData from "../portfolioData";
import React from "react";

export default function Footer(props) {
  return (
    <div>
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
    </div>
  );
}
