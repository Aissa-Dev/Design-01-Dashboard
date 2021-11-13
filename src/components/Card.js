import React from "react";

function Card({ title, img }) {
  return (
    <div className="course">
      <img src={img} alt={img} />
      <div className="course-info">
        <div className="description">
          <h2>{title}</h2>
          <p>Tutor: Lorum, Hours: 40h</p>
          <div className="progress"></div>
        </div>
        <h2 className="percentage">60%</h2>
      </div>
    </div>
  );
}

export default Card;
