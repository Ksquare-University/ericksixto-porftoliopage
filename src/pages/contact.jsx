import React from "react";
import ReactTooltip from "react-tooltip";

import "./contact.styles.scss";

const email = "sixtohernandezpalomo@gmail.com";
let tooltipRef = React.createRef();
const Contact = () => {
  return (
    <section className="section contact-page">
      <div className="section-title">
        <h1>Contact</h1>
        <div className="underline" />
      </div>

      <div className="section-center page-info">
        <p>
          Hi! If you are looking to get in touch with me, please reach me at my
          personal email:{" "}
          <span
            data-tip={"Copied to clipboard!"}
            ref={(ref) => (tooltipRef = ref)}
            data-event="dbclick"
            data-offset="{ 'right': 100}"
            className="highlight"
            onClick={() => {
              navigator.clipboard.writeText(email);
              ReactTooltip.show(tooltipRef);
            }}
          >
            sixtohernandezpalomo@gmail.com
          </span>
        </p>
        <p>
          You can also contact me at my{" "}
          <a
            className="highlight"
            href="https://www.linkedin.com/in/sixto-hernandez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </p>

        <a
          className="button"
          href="mailto:sixtohernandezpalomo@email.com?subject=I would like to hire you"
        >
          Email Me
        </a>
      </div>
      <ReactTooltip
        place="top"
        type="dark"
        effect="solid"
        clickable={true}
        afterShow={() =>
          setTimeout(function () {
            ReactTooltip.hide(tooltipRef);
          }, 2000)
        }
      />
    </section>
  );
};

export default Contact;
