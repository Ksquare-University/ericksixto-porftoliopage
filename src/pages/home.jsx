import React from "react";
import ButtonLink from "../component/button/button.component";
import ResumePic from "../images/ResumePic.jpg";
import ServiceList from "../component/service-list/service-list.component";
import "./home.styles.scss";
import SkillList from "../component/skills-list/skill-list.component";
import ProjectCard from "../component/project-card/project-card.component";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaSalesforce } from "react-icons/fa";

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
            <ul className="social-links">
              <li>
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/sixto-hernandez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a
                  className="social-link"
                  href="https://github.com/ErickSixto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  className="social-link"
                  href="https://trailblazer.me/id/sixtohdez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSalesforce />
                </a>
              </li>
            </ul>
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
        <div className="center-btn">
          <ButtonLink section="featured" route="about" text="About me" />
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="section-title">
          <h2>Some of my projects</h2>
          <div className="underline" />
        </div>
        <ProjectCard />
        <div className="center-btn">
          <ButtonLink
            section="featured"
            route="projects"
            text="See all my projects"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
