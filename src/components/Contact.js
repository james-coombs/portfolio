import portfolioData from "../portfolioData";
import React from "react";

export default function Contact(props) {
  return portfolioData.about.contact.map((el, i) => (
    <>
      <a
        className="contact-link"
        target="_blank"
        rel="noopener noreferrer"
        href={el.url}
      >
        <span>{React.createElement(el.svg)}</span>
        {el.name}
      </a>
    </>
  ));
}
