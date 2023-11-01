import React, { Component } from "react";
import Slider from "react-slick";
/* Import Slick Carousel styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p9 from "../assets/p9.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import "./styles.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
      }}
      onClick={onClick}
    />
  );
}

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <h2 className="h2-head">LAB EQUIPMENTS</h2>
      <Slider {...settings}>
        <div className="card card-content">
          <img src={p1} alt="img" />
          <div className="card-body">
            <h5>Salt Fog Chamber:</h5>
          </div>
        </div>
        <div className="card card-content">
          <img src={p2} alt="img" />
          <div className="card-body">
            <h5>Salt Spray Chamber</h5>
          </div>
        </div>
        <div className="card card-content">
          <img src={p9} alt="img" />
          <div className="card-body">
            <h5>Corrosion Test Chamber</h5>
          </div>
        </div>
        <div className="card card-content">
          <img src={p5} alt="img" />
          <div className="card-body">
            <h5>Salt Corrosion Chamber</h5>
          </div>
        </div>
        <div className="card card-content">
          <img src={p6} alt="img" />
          <div className="card-body">
            <h5>Environmental Chamber</h5>
          </div>
        </div>
        <div className="card card-content">
          <img src={p7} alt="img" />
          <div className="card-body">
            <h5>Cyclic Corrosion Chamber</h5>
          </div>
        </div>
        <div className="card card-content">
          <img src={p8} alt="img" />
          <div className="card-body">
            <h5>ASTM B117 Chamber</h5>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
