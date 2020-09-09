import React from "react";
import ButtonLink from "../component/button/button.component";
import ResumePic from "../images/ResumePic.jpg";
import ServiceList from "../component/service-list/service-list.component";
import "./home.styles.scss";
import SkillList from "../component/skills-list/skill-list.component";

const Home = () => {
  return (
    <React.Fragment>
      <header className="hero">
        <div className="section-center hero-center">
          <section className="hero-info">
            <h1>
              I'm Erick <span className="bold">Sixto</span>
            </h1>
            <h4>mechatronics engineer & frontend developer</h4>
            <ButtonLink section="hero" route="contact" text="Contact me" />
          </section>

          <section className="hero-img">
            <img className="hero-photo" alt="Erick Sixto" src={ResumePic}></img>
          </section>
        </div>
      </header>
      <section className="section bg-secondary">
        <div className="section-title">
          <h2>What can i do?</h2>
          <div className="underline" />
        </div>
        <ServiceList />
      </section>
      <section className="section">
        <div className="section-title">
          <h2>Skills</h2>
          <div className="underline" />
        </div>
        <SkillList />
      </section>
    </React.Fragment>
  );
};

export default Home;
