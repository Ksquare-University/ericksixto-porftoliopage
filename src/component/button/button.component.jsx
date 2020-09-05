import React from "react";
import { Link } from "react-router-dom";
import "./button.styles.scss";

const ButtonLink = ({ text, route, section }) => {
  return (
    <Link className={"button " + (section + "-btn")} to={"/" + route}>
      {text}
    </Link>
  );
};

export default ButtonLink;
