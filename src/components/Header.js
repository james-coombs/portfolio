import portfolioData from "../portfolioData";
import React from "react";
import headshot from "../img/headshot.jpg";
import background from "../img/background.jpg";
import Image from "react-bootstrap/Image";

export default function Header(props) {
  return (
    <div
      className="text-center header-backsplash"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
      <Image className="headshot my-3" src={headshot} roundedCircle />
      <div className="">{portfolioData.about.name}</div>
      <div className="">{portfolioData.about.title}</div>
      <hr className="header-hr" />
      <div className="about">{portfolioData.about.descriptionTextPrimary}</div>
      <div className="about">
        {portfolioData.about.descriptionTextSecondary}
      </div>
      <div className="py-5">
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
