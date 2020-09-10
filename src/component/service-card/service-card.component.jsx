import React from "react";

import "./service-card.styles.scss";
const ServiceCard = ({ title, icon, description }) => (
  <article className="service">
    {icon}
    <h4>{title}</h4>
    <div className="underline" />
    <p>{description}</p>
  </article>
);
export default ServiceCard;
