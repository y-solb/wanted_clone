import React, { useState, useEffect, useRef, useCallback } from "react";
import InfoBox from "./infoBox";
import "../App.css";

const Slider = ({ sliderData }) => {
  const IMG_WIDTH = 1084;
  const length = sliderData.length;

  const sliderRef = useRef(null);
  const [curIndex, setCurIndex] = useState(2);
  const [speed, setSpeed] = useState(500);

  const prevSlide = () => {
    if (curIndex > 0) {
      setSpeed(500);
      setCurIndex((curIndex) => curIndex - 1);
    }
    if (curIndex === 2) {
      setTimeout(() => {
        setSpeed(0);
        setCurIndex(10);
      }, 500);
    }
  };

  const nextSlide = useCallback(() => {
    if (curIndex < length - 2) {
      setSpeed(500);
      setCurIndex((curIndex) => curIndex + 1);
    }
    if (curIndex === 10) {
      setTimeout(() => {
        setSpeed(0);
        setCurIndex(2);
      }, 500);
    }
  }, [curIndex, length]);

  useEffect(() => {
    sliderRef.current.style.transform = `translate3d( -${
      curIndex * IMG_WIDTH - 214
    }px, 0, 0)`;
    sliderRef.current.style.transition = `${speed}ms ease`;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [curIndex, speed, nextSlide]);

  return (
    <div className="slider__container">
      <div className="slider" ref={sliderRef}>
        {sliderData.map((slider) => {
          const filterType = slider.id === curIndex ? "bright" : "dark";
          const displayType = slider.id === curIndex ? "display" : "hidden";
          return (
            <div className={`slider__box ${filterType}`} key={slider.id}>
              <img
                className="slider__img"
                src={slider.img}
                alt="slider__image"
              />
              <InfoBox slider={slider} displayType={displayType} />
            </div>
          );
        })}
      </div>
      <button className="left__btn" onClick={prevSlide}>
        <span className="arrow">
          <svg className="arrow__icon" viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </span>
      </button>
      <button className="right__btn" onClick={nextSlide}>
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
