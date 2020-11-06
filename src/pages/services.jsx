import React from "react";
import { FaCode, FaReact, FaSalesforce } from "react-icons/fa";
import { GiCircuitry, GiLightningStorm } from "react-icons/gi";
import { GoCircuitBoard } from "react-icons/go";
import ServiceFlipCard from "../component/service-flip-card/service-flip-card";

import "./services.styles.scss";
const Services = () => {
  return (
    <React.Fragment>
      <section className="services-page" id="services">
        <div className="section services-summary">
          <h1 id="back-text">WHAT</h1>
          <div className="section-title">
            <h2>
              WHAT <span>CAN I</span> DO
            </h2>
            <div className="underline" />
          </div>
          <div className="summary-info">
            <p>
              I can build custom websites, landing pages, or statics projects
              using web developing tools. If your project needs more complex
              solutions, like a web application, then I can use my front-end
              skills using React to help you build your custom application.{" "}
            </p>
            <p>
              If you are a Salesforce client and need someone to create your
              workflow automation processes or need custom UI components in your
              organization, then reach me out.{" "}
            </p>
            <p>
              As a mechatronics engineer, I have skills in electronics,
              instrumentation, and automation. If you want a device for a
              specific purpose that needs an electronic design, integrations
              with sensors, and microcontroller programming then I will help
              you.
            </p>
          </div>
        </div>
        <div className="services-stack">
          <ServiceFlipCard
            title="Web Development"
            icon={<FaCode />}
            description="Website building using Javascript, HTML, and CSS"
          />
          <ServiceFlipCard
            title="React"
            icon={<FaReact />}
            description="Web Application development using React.js, Redux, React Router"
          />
          <ServiceFlipCard
            title="Salesforce Development"
            icon={<FaSalesforce />}
            description="Automate business processes within Salesforce"
          />
          <ServiceFlipCard
            title="Lightning Web Components"
            icon={<GiLightningStorm />}
            description="Create custom, responsive, efficient lightning components for your Salesforce Org"
          />
          <ServiceFlipCard
            title="Embedded Systems"
            icon={<GiCircuitry />}
            description="Build a microprocessor-based project, integration with sensors and electronics"
          />
          <ServiceFlipCard
            title="Circuit Design"
            icon={<GoCircuitBoard />}
            description="Design an electronic circuit to meet your needs"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
