import portfolioData from "../portfolioData";
import React from "react";
import Row from "react-bootstrap/Row";

export default function Contact(props) {
  return (
    <Row className="contact-row">
      {portfolioData.about.contact.map((el, i) =>
        el.name !== "Email" ? (
          <a
            key={el.name}
            className="contact-type col-3 text-center contact-link"
            target="_blank"
            rel="noopener noreferrer"
            href={el.url}
          >
            <span>{React.createElement(el.svg)}</span>
            <p>{el.name}</p>
          </a>
        ) : (
          <a
            key={el.name}
            className="contact-type col-3 text-center contact-link"
            href={`mailto:${el.url}`}
          >
            <span>{React.createElement(el.svg)}</span>
            <p>{el.name}</p>
          </a>
        )
      )}
    </Row>
  );
}
