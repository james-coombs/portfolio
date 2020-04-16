import portfolioData from "../portfolioData";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact(props) {
  return (
    <Row className="contact-row">
      {portfolioData.about.contact.map((el, i) => (
        <a
          className="col-3 contact-link"
          target="_blank"
          rel="noopener noreferrer"
          href={el.url}
        >
          <span>{React.createElement(el.svg)}</span>
          <p>{el.name}</p>
        </a>
      ))}
    </Row>
  );
}
