import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Contact(props) {
  return (
    // <Carousel.Item>
    //   <img
    //     style={{ minHeight: "60vh" }}
    //     className="d-block w-100"
    //     src={props.project["screenshot"]}
    //     alt="First slide"
    //   />
    //   <Carousel.Caption>
    //     <h3>{props.project["screenshot"]}</h3>
    //   </Carousel.Caption>
    // </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://via.placeholder.com/150"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}
