import React from "react";
import  reactproject from "../../images/reactproject.jpg";
import todolist  from "../../images/todolist.png";
import  Hangman  from '../../images/Hangman.jpg';

import "./project-card.styles.scss";

const ProjectCard = () => {
  return (
    <div className="section-center featured-center">
      <div class="project-article">
        <article className="card">
          <div className="project-article-img">
            <img className="card-img" src={reactproject} alt="Suggestion Box" />
          </div>
          <div className="card-info">
            <h4>Sugestion Box</h4>
            <p>
              A Suggestion Box application that manages the suggestions of the
              employees. It has a login feature, reply system, filter and sort
              features and more. It was done using React.
            </p>
          </div>
        </article>
      </div>

      <div class="project-article">
        <article className="card">
          <div className="project-article-img">
            <img className="card-img" src={Hangman} alt="Hangman" />
          </div>
          <div className="card-info">
            <h4>"The HangMan"</h4>
            <p>
              The classic game done in a PSOC microcontroller. It uses a grapich
              display and a matrix button system to allow the users experience
              the classic game with winning and losing visual and sound effects.
            </p>
          </div>
        </article>
      </div>

      <div class="project-article">
        <article className="card">
          <div className="project-article-img">
            <img className="card-img" src={todolist} alt="To-do List" />
          </div>
          <div className="card-info">
            <h4>To-do list</h4>
            <p>
              An android studio app that allows the users to create list and
              task in them. It features a login and authentication system using
              Firebase. Also it allows sharing lists and task between users.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProjectCard;
