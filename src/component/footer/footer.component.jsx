import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaSalesforce } from "react-icons/fa";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul className="social-links footer-links">
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
        <h4>web development - embedded systems - salesforce development</h4>
        <h4>
          Reach me at <span>sixto.developer@gmail.com</span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
