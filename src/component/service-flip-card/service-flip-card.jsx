import React from "react";

import "./service-flip-card.styles.scss";
const ServiceFlipCard = ({ title, icon, description }) => (
  <article class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        {icon}
        <h3>{title}</h3>
      </div>
      <div class="flip-card-back">
        <p>{description}</p>
      </div>
    </div>
  </article>
);
export default ServiceFlipCard;
