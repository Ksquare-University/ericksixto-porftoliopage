import React from "react";
import AboutPic from "../images/AboutPic.jpg";

import "./about.styles.scss";
const About = () => {
  return (
    <section className="section about-page">
      <div className="section-center about-center">
        <div className="about-img">
          <img
            aria-hidden="true"
            src={AboutPic}
            className="my-image"
            alt="Erick Sixto"
          />
        </div>
        <article className="about-text">
          <div className="section-title">
            <h2>About Me</h2>
            <div className="underline" />
          </div>
          <p className="about-history">
            My name is Erick Sixto Hernández Palomo. I am a 
            mechatronics engineer graduated from the Autonomous University of Yucatan. I
            currently live in Mérida.
          </p>
          <p className="about-history">
            {" "}
            During my last years at school I dedicated myself to learning web
            development on my own through learning platforms like Udemy and
            Pluralsight. I love learning and develop new things to solve
            problems or create amazing projects. I have knowledge in areas such
            as 3D design, process automation and electronics that have helped me
            to carry out personal work and thanks to my dedication I learned to
            develop web applications using the 3 pillars of the frontend and
            frameworks like React.{" "}
          </p>
          <p className="about-history">
            {" "}
            I currently have 2 years of experience developing embedded systems
            using microprocessors such as Arduino and PSOC. I also have 1 year
            of experience developing the web application frontend using React.
            My hobbies are playing video games, dungeons and dragons and playing
            guitar.
          </p>

          <div className="about-stack">
            <span className="stack-skill">html</span>
            <span className="stack-skill">css</span>
            <span className="stack-skill">Javascript</span>
            <span className="stack-skill">React</span>
            <span className="stack-skill">arduino</span>
            <span className="stack-skill">solidworks</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
