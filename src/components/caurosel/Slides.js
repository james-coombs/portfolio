import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import portfolioData from "../../portfolioData";

export default function Slides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const test = () => {
    portfolioData.projects.map((p, i) => console.log(p, i));
  };

  return (
    <div>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
        {portfolioData.projects.map((p, i) => (
          <Carousel.Item className="text-center">
            <img src={p.screenshot} className="img-fluid mb-1" alt={p.name} />
            <Carousel.Caption>
              <h3>{p.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
