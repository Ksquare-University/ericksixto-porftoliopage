import React from "react";
import ButtonLink from "../component/button/button.component";
import ResumePic from "../images/ResumePic.jpg";
import "./home.styles.scss";

const Home = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <h1>
            I'm Erick <span className="bold">Sixto</span>
          </h1>
          <h4>mechatronics engineer & frontend developer</h4>
          <ButtonLink section="hero" route="contact" text="Contact me" />
        </article>
        <article className="hero-img">
          <img className="hero-photo" alt="Erick Sixto" src={ResumePic}></img>
        </article>
      </div>
    </header>
  );
};

export default Home;
