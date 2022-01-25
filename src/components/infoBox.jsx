import React from "react";
import "../App.css";

const InfoBox = ({ slider, displayType }) => (
  <div className={`info__box ${displayType}`}>
    <p className="info__title">{slider.title}</p>
    <p className="info__sub">{slider.sub}</p>
    <hr class="info__divider"></hr>
    <span className="info__link">
      바로가기
      <svg className="link__btn" viewBox="0 0 18 18">
        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
      </svg>
    </span>
  </div>
);

export default InfoBox;
