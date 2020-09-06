import React from "react";
import { VscGithub } from "react-icons/vsc";
import todolist from "../images/todolist.jpg";
import cards from "../images/cards.jpg";
import electronic from "../images/electronic.jpg";
import Hangman from "../images/Hangman.jpg";
import reactproject from "../images/reactproject.jpg";
import "./projects.styles.scss";

const Projects = () => {
  return (
    <section className="projects-page">
      <section className="section projects">
        <div className="section-title">
          <h2>All Projects</h2>
          <div className="underline" />
        </div>
        <div className="section-center projects-center">
          <article className="project">
            <div className="project-img">
              <img src={reactproject} alt="react project" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Suggestion Box Application</h3>

              <p className="project-description">
                During my work at Ksquare University I was ask for the
                development of the frontend of a Suggestion Box App that needed
                to be able to handle the suggestions for the +100 employees of
                the office.
              </p>
              <p className="project-description">
                It was made using the MERN stack. The app has features like:
                User login, post anonymous suggestions, see the suggestions
                status, reply to suggestions, filter or sort them, and save the
                suggestions with a "favorite button". The application was made
                in 4 months and we made a production build using Docker.
              </p>

              <div className=" project-stack">
                <span className="stack-skill">React</span>
                <span className="stack-skill">Redux</span>
                <span className="stack-skill">SASS</span>
                <span className="stack-skill">Bootstrap</span>
              </div>

              <div className="project-links">
                <a href="https://www.google.com">
                  <VscGithub />
                </a>
              </div>
            </div>
          </article>

          <article className="project">
            <div className="project-img">
              <img src={todolist} alt="to do list" />
            </div>
            <div className="project-info">
              <h3 className="project-title">To Do List</h3>

              <p className="project-description">
                A To do list application made in Android Studio that handles the
                task of the users with a To-do-list that has the feature to
                share lists between users. The app is capable of creating list
                and customize them with colors, icons and names. The list
                contain task that could have the following attributes:
                Importance, End-Date, Status
              </p>
              <p className="project-description">
                The application was made native for android devices and connects
                to Firebase to get the information and the authentication. Also
                is capable of sharing list to other users so when a user creates
                or ends a task, everyone in the shared list could see it
              </p>

              <div className=" project-stack">
                <span className="stack-skill">Android Studio</span>
                <span className="stack-skill">Firebase</span>
                <span className="stack-skill">XML</span>
                <span className="stack-skill">Java</span>
              </div>

              <div className="project-links">
                <a href="https://www.google.com">
                  <VscGithub />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Projects;
