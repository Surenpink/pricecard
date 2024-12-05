import React from "react";
import "./PriceCard.css";

const PriceCard = ({ title, price, features, buttonText, background }) => {
  return (
    <div className="price-card" style={{ borderTopColor: background }}>
      <div className="price-header" style={{ background }}>
        <h2>{title}</h2>
        <h3>{price}</h3>
      </div>
      <ul className="price-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="price-button" style={{ background }}>
        {buttonText}
      </button>
    </div>
  );
};

export default PriceCard;
