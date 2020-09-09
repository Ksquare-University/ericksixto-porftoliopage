import React from "react";
import ServiceCard from "../service-card/service-card.component";
import { FaCode } from "react-icons/fa";
import { SiSalesforce } from "react-icons/si";
import { BiMicrochip } from "react-icons/bi";

import "./service.list.styles.scss";
const ServiceList = () => {
  return (
    <div className="services-center">
      <ServiceCard
        title="Salesforce"
        icon={<SiSalesforce />}
        description="I will analyze your company processes, 
        develop your workflows and give you custom solutions for your
        specific business needs within the Salesforce platform."
      />
      <ServiceCard
        title="web Development"
        icon={<FaCode />}
        description="I will help you get that look and taste mix that
        you want for your website. Using UI/UX paradigms and making your 
        website look and function seamlessly from smarthphones to desktops."
      />
      <ServiceCard
        title="Embedded Systems"
        icon={<BiMicrochip />}
        description="I can design and build embedded systems using my electronics 
        and software skills to chose the right sensors, 
        microcontrollers and components to give you a product that meet your needs."
      />
    </div>
  );
};

export default ServiceList;
