import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import InfoBox from "./infoBox";

const Slider = ({ sliderData }) => {
  const [curIndex, setCurIndex] = useState(2);
  const [offset, setOffset] = useState(-2168);
  const [speed, setSpeed] = useState(500);
  const length = sliderData.length;
  const btnRef = useRef();

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    if (curIndex >= 0) {
      setSpeed(500);
      setOffset((offset) => parseInt(offset) + 1084);
      setCurIndex((curIndex) => curIndex - 1);
    }
    if (curIndex === 2) {
      setTimeout(() => {
        setSpeed(0);
        setOffset(-10840);
        setCurIndex(10);
      }, 500);
    }
  };

  const nextSlide = () => {
    if (curIndex <= length - 1) {
      setSpeed(500);
      setOffset((offset) => parseInt(offset) - 1084);
      setCurIndex((curIndex) => curIndex + 1);
    }
    if (curIndex === 9) {
      setTimeout(() => {
        setSpeed(0);
        setOffset(-1084);
        setCurIndex(1);
      }, 500);
    }
  };

  return (
    <div className="slider">
      <div className="slider__container">
        <div
          className="slider__track"
          style={{
            transform: `translate3d( ${offset}px, 0, 0)`,
            transition: `${speed}ms ease 0s`,
          }}
        >
          {sliderData.map((slider, index) => {
            return (
              <div className="slider__box" key={index}>
                <img
                  className="slider__img"
                  src={slider.img}
                  alt="slider_image"
                />
                <InfoBox />
              </div>
            );
          })}
        </div>
      </div>
      <button className="left__btn" onClick={prevSlide}>
        <span className="arrow">
          <svg className="arrow__icon" viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </span>
      </button>
      <button className="right__btn" onClick={nextSlide} ref={btnRef}>
        <span className="arrow">
          <svg className="arrow__icon" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Slider;
