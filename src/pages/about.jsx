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
            <div className="about-underline" />
          </div>
          <p className="about-history">
            My name is Erick Sixto Hernández Palomo. I am a mechatronics
            engineer graduated from the Autonomous University of Yucatan. I
            currently live in Mérida.
          </p>
          <p className="about-history">
            I just graduated from the Mechatronics engineer career, from the
            UADY (Universidad Autónoma de Yucatán). I got the top point grade
            average of my generation and learned a high variety of things like
            3D design, electronic design, industrial automation, and control of
            embedded systems.
          </p>
          <p className="about-history">
            {" "}
            During my last years at school I discovered a passion for software
            developing so, I dedicated myself to learning web development on my
            own through learning platforms like Udemy and Pluralsight. I love
            learning and develop new things to solve problems or create amazing
            projects. I learned to develop web applications using the 3 pillars
            of the frontend and frameworks like React. This gave me the
            opportunity to become part of Ksquare University as an intern and
            during my time there I learned UI/UX paradigms and polished my
            skills as a frontend developer a little more.{" "}
          </p>
          <p className="about-history">
            Today, I am at The Ksquare Group in training to become a Salesforce
            Platform Developer, so I can help businesses to get their workflow
            done and their problems solved, also I am polishing my soft skills,
            programming fundamentals and my agile methodologies while in
            training. I like to automate processes, to see how beautiful a a
            webpage can become, and see them shrink and change without losing
            their aesthetic or functionality and I hate when something goes
            wrong, and that happens to me a lot during my workflow, so I try my
            best to solve bad practices, bugs, or errors.
          </p>
          <p className="about-history">
            {" "}
            I currently have 2 years of experience developing embedded systems
            using microprocessors such as Arduino and PSOC. I also have 1 year
            of experience developing frontend of web applications using React.
            My hobbies are playing video games such as Spellbreak or Valorant,
            play dungeons and dragons with my friends, and playing the acoustic
            guitar. I love to read fantasy novels like The name of the wind and
            I would like to learn how to make simple videogames someday.
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
