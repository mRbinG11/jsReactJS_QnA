// components/Card.js
import React from "react";
import "./Card.css";
// Single card component with props
const Card = ({ title }) => {
  return (
    <div className="card">
      <h4>{title}</h4>
    </div>
  );
};

export default Card;
