import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import portfolioData from "../portfolioData";

export default function Slides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        // interval={null}
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
      >
        {portfolioData.projects.map((p, i) => (
          <Carousel.Item className="text-center">
            <h3 className="mt-2 carousel-title">
              {p.name} - <span className="blurb">{p.blurb}</span>
            </h3>
            <img
              src={p.screenshots[0].src}
              className="img-fluid mb-1"
              alt={p.name}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}