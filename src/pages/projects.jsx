import React from "react";
import todolist from "../images/todolist.png";
import cards from "../images/cards.jpg";
import electronic from "../images/electronic.jpg";
import Hangman from "../images/Hangman.jpg";
import reactproject from "../images/reactproject.jpg";
import Drone from "../images/Drone.jpg";
import Medal from "../images/Medal.jpg";
import Countdown from "../images/Countdown.png";
import dx1 from "../images/dx1.jpg";
import levitator from "../images/levitator.jpeg";
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
          <article className="project" id="puzzle-countdown">
            <div className="project-img">
              <img src={dx1} alt="Digital Dice" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Digital Dice</h3>

              <p className="project-description">
                A 3D render of a personal project. The "DX" a digital-electronic
                die that has no faces with numbers, rather all their faces are
                empty however when you roll it, it will show the number obtained
                for that roll in all their faces. This is a project in
                development, and today I only have the first renders in
                SolidWorks and a small electronic design.
              </p>

              <div className=" project-stack">
                <span className="stack-skill">SolidWorks</span>
                <span className="stack-skill">Electronics</span>
                <a
                  href="https://drive.google.com/drive/folders/19JfVHQEXSabWghpfX-wgsiYS00SbDvbS?usp=sharing"
                  className="stack-skill-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PHOTOS
                </a>
              </div>
            </div>
          </article>
          <article className="project" id="puzzle-countdown">
            <div className="project-img">
              <img src={Countdown} alt="Puzzle Countdown" />
            </div>
            <div className="project-info">
              <h3 className="project-title">D&D Puzzle Countdown</h3>

              <p className="project-description">
                A simple countdown with a reset button, but it is styled to be
                used in my D&D game as a prop for a puzzle my players will have
                to confront.
              </p>
              <p className="project-description">
                The project is really nothing serious, a timer that counts down
                from 15 to 0 every 5 seconds (which in-game time is 1 second)
                but the styles are made so the page will represent the room and
                the timer will show animations depending on the time they have
                left. The button also resembles a rune that emits magic light
                when they reach it.
              </p>

              <div className=" project-stack">
                <span className="stack-skill">React</span>
                <span className="stack-skill">SASS</span>
                <span className="stack-skill">HTML</span>
                <a
                  href="https://ericksixto.github.io/button-countdown/"
                  className="stack-skill-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DEMO
                </a>
              </div>

              {/* <div className="project-links">
                <a href="https://www.google.com">
                  <VscGithub />
                </a>
              </div> */}
            </div>
          </article>
          <article className="project" id="suggestion-box">
            <div className="project-img">
              <img src={reactproject} alt="react project" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Suggestion Box Application</h3>

              <p className="project-description">
                During my work at Ksquare University, I was in charge of the
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
                <span className="stack-skill">JS ES6</span>
                <span className="stack-skill">CSS</span>
                <span className="stack-skill">HTML</span>
              </div>

              {/* <div className="project-links">
                <a href="https://www.google.com">
                  <VscGithub />
                </a>
              </div> */}
            </div>
          </article>

          <article className="project" id="hangman">
            <div className="project-img">
              <img src={Hangman} alt="hangman" />
            </div>
            <div className="project-info">
              <h3 className="project-title">The Hangman</h3>

              <p className="project-description">
                An embedded system project that emulated the classic game "The
                Hangman". Users can choose between 3 difficulties and start
                playing using a button matrix and seeing the "hangman" on a
                graphics display.
              </p>
              <p className="project-description">
                The project was made using a PSOC, a button-matrix, RGB LEDs, a
                Speaker and a graphic display. The ROM memory has a database of
                +100 words and the project has custom visual and sound effects
                on Start Game, Winning, and Losing. When starting, the project
                emits a song and flashes blue lights. When winning you can hear
                a congratulations song and see the RGB lights flashing in green.
                When you lose a "Loser" screen will pop up and you will hear a
                "You lost" and see red flashing lights.
              </p>

              <div className=" project-stack">
                <span className="stack-skill">PSOC</span>
                <span className="stack-skill">Assembly Code</span>
                <span className="stack-skill">Electronics</span>

                <a
                  href="https://drive.google.com/drive/folders/1Uxz0RPrhKp43uZ2ZI1AfqFjObYnNs4J8?usp=sharing"
                  className="stack-skill-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photos
                </a>
              </div>
            </div>
          </article>

          <article className="project" id="todolist">
            <div className="project-img">
              <img src={todolist} alt="to do list" />
            </div>
            <div className="project-info">
              <h3 className="project-title">To Do List</h3>

              <p className="project-description">
                A To-do list application made in Android Studio that handles the
                task of the users with a To-do-list that has the feature to
                share lists between users. The app is capable of creating a list
                and customize them with colors, icons, and names. The list
                contain task that could have the following attributes:
                Importance, End-Date, Status
              </p>
              <p className="project-description">
                The application was made native for android devices and connects
                to Firebase to get the information and the authentication. Also
                is capable of sharing list to other users so when a user creates
                or ends a task, everyone in the shared list could see it.
              </p>

              <div className=" project-stack">
                <span className="stack-skill">Android Studio</span>
                <span className="stack-skill">Firebase</span>
                <span className="stack-skill">XML</span>
                <span className="stack-skill">Java</span>
                <a
                  href="https://drive.google.com/drive/folders/1sABS0-KADgwUa6Lbb3bb3spk1-QcUvF_?usp=sharing"
                  className="stack-skill-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photos
                </a>
              </div>

              {/* <div className="project-links">
                <a href="https://www.google.com">
                  <VscGithub />
                </a>
              </div> */}
            </div>
          </article>

          <article className="project" id="cards">
            <div className="project-img">
              <img src={cards} alt="cards" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Card detection</h3>

              <p className="project-description">
                A computer vision project that can identify a card from a
                52-card deck when placed in front of a camera with a background
                contrast.
              </p>
              <p className="project-description">
                The project can isolate the corner of the card and identify the
                number and suit of it. Then it displays the card name on a
                screen and an image of that card. The application was made using
                C and image processing algorithms.
              </p>

              <div className=" project-stack">
                <span className="stack-skill">Image Processing</span>
                <span className="stack-skill">C</span>
                <span className="stack-skill">Electronics</span>

                <a
                  href="https://drive.google.com/drive/folders/1UVfaNl16NCjWVHKRmIhJ-bzbW8xRp68H?usp=sharing"
                  className="stack-skill-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photos
                </a>
              </div>
            </div>
          </article>

          <article className="project" id="drone">
            <div className="project-img">
              <img src={Drone} alt="Drone" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Sensor Drone</h3>

              <p className="project-description">
                An electronics and instrumentation project. Using a Drone a The
                3-member team developed a sensor module that obtains the levels
                of CO2 on the air, as well as the temperature and air humidity.
                This to see a relationship between the CO2 and humidity and the
                high temperatures of zones without plants or trees.
              </p>
              <p className="project-description">
                The module was designed using SolidWorks and developed with an
                Arduino and several sensors. The logic was accomplished using
                Python to obtain and analyze the data and C to perform the
                sensor logic. I was assigned to filter the data and graph the
                information obtained using Python to see if there was a relation
                in the measuarements obtained.
              </p>

              <div className=" project-stack">
                <span className="stack-skill">Python</span>
                <span className="stack-skill">SolidWorks</span>
                <span className="stack-skill">Electronics</span>
                <a
                  href="https://drive.google.com/drive/folders/1jUDYSin-GvGv85arigvD7h72TeQG9KLp?usp=sharing"
                  className="stack-skill-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photos
                </a>
              </div>
            </div>
          </article>

          <article className="project" id="electronics">
            <div className="project-img">
              <img src={electronic} alt="Electronics" />
            </div>
            <div className="project-info">
              <h3 className="project-title">5 degree-of-freedom robot arm</h3>

              <p className="project-description">
                This project was not the built of the robot arm, but the control
                of it. We used a PSOC microcontroller and an Arduino Bluetooth
                chip to control the 5 servo-motors on a 3D printed robot arm.
              </p>
              <p className="project-description">
                I created the android application and the Simulink application
                to control the robot arm, using the UART protocol to communicate
                to the Arduino chip. The logic of both software was to change a
                selected servo-motor position to the desired angle and to
                trigger a sequence of movements.
              </p>

              <div className=" project-stack">
                <span className="stack-skill">Simulink</span>
                <span className="stack-skill">Android Studio</span>
                <span className="stack-skill">Electronics</span>
              </div>
            </div>
          </article>

          <article className="project" id="medals">
            <div className="project-img">
              <img src={levitator} alt="Levitator" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Pneumatic levitator</h3>

              <p className="project-description">
                An analogic control project consists of a pneumatic levitator
                that pushes a small ball into the air within a tube and
                maintains the ball at the desired position.
              </p>
              <p className="project-description">
                The project is a showcase of how a control system works, using a
                PDI analogic control circuit to give the desired current at the
                fans so the ball stays at the desired position.
              </p>

              <div className=" project-stack">
                <span className="stack-skill">Control</span>
                <span className="stack-skill">Electronics</span>

                <a
                  href="https://drive.google.com/drive/folders/1BGcM_fs0uXIcigE9nb8tnf8hGhapez9_?usp=sharing"
                  className="stack-skill-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photos
                </a>
              </div>
            </div>
          </article>

          <article className="project" id="medals">
            <div className="project-img">
              <img src={Medal} alt="Medal" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Medal 3D Design</h3>

              <p className="project-description">
                During my social service, I and my team was in charge of the
                design of the 1st, 2nd, and 3rd place medals for the XXX Physics
                Olympics on the state level. And my partner designed 3 3D medals
                using a Delta icon and a number inside of it with the legend of
                the UADY beneath.
              </p>
              <p className="project-description">
                They were designed in SolidWorks and printed in 3D using
                Simplify3D, after that they were painted in golden, silver and
                copper colors.
              </p>

              <div className=" project-stack">
                <span className="stack-skill">Ilustrator</span>
                <span className="stack-skill">SolidWorks</span>
                <span className="stack-skill">Simplify3D</span>

                <a
                  href="https://drive.google.com/drive/folders/1S2uVXKcQVPjETEfG7yAEXNBBwzegJCtX?usp=sharing"
                  className="stack-skill-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photos
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
