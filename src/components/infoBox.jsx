import React from "react";

const InfoBox = (props) => (
  <div className="info__box">
    <h2>성장하는 개발자가 되려면?</h2>
    <h3>OOO 검색하지 말 것!</h3>
    <hr class="info__divider"></hr>
    <span>
      바로가기
      <svg>
        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
      </svg>
    </span>
  </div>
);

export default InfoBox;
