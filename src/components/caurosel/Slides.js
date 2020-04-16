import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import portfolioData from "../../portfolioData";

export default function Slides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
        {portfolioData.projects.map((p, i) => (
          <Carousel.Item className="text-center">
            <h3>{p.name}</h3>
            <img
              src={p.screenshots[0]}
              className="img-fluid mb-1"
              alt={p.name}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
