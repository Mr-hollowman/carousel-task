import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Data } from "./data";

function MySlider() {
  return (
    <Carousel>
      {Data.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.thumnail}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{item.slideType}</h3>
            <p>{item.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default MySlider;
