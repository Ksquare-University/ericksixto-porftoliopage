import React from "react";
import {
  SiReact,
  SiReactrouter,
  SiRedux,
  SiArduino,
  SiMicrosoftoffice,
  SiBootstrap,
  SiNodeDotJs,
} from "react-icons/si";
import {
  DiJavascript1,
  DiGit,
  DiHtml5,
  DiCss3,
  DiMongodb,
  DiSass,
  DiSqllite,
} from "react-icons/di";
import { GoCircuitBoard } from "react-icons/go";
import { FaCubes } from "react-icons/fa";

import "./skill-list.styles.scss";

const SkillList = () => {
  return (
    <div className="section-center skill-list">
      <div className="skill">
        <SiReact />
        <h4>React</h4>
      </div>
      <div className="skill">
        <SiReactrouter />
        <h4>React Router</h4>
      </div>
      <div className="skill">
        <SiRedux />
        <h4>Redux</h4>
      </div>
      <div className="skill">
        <DiJavascript1 />
        <h4>Javascript ES6</h4>
      </div>
      <div className="skill">
        <DiCss3 />
        <h4>CSS</h4>
      </div>
      <div className="skill">
        <DiHtml5 />
        <h4>HTML 5</h4>
      </div>
      <div className="skill">
        <SiBootstrap />
        <h4>Bootstrap</h4>
      </div>
      <div className="skill">
        <DiSass />
        <h4>SASS</h4>
      </div>
      <div className="skill">
        <DiGit />
        <h4>Git</h4>
      </div>
      <div className="skill">
        <SiNodeDotJs />
        <h4>Node Js</h4>
      </div>
      <div className="skill">
        <DiMongodb />
        <h4>MongoDB</h4>
      </div>
      <div className="skill">
        <DiSqllite />
        <h4>SQLlite</h4>
      </div>
      <div className="skill">
        <SiArduino />
        <h4>Arduino</h4>
      </div>
      <div className="skill">
        <GoCircuitBoard />
        <h4>Electronics</h4>
      </div>
      <div className="skill">
        <FaCubes />
        <h4>SolidWorks</h4>
      </div>

      <div className="skill">
        <SiMicrosoftoffice />
        <h4>Microsoft Office</h4>
      </div>
    </div>
  );
};

export default SkillList;
