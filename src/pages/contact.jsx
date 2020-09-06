import React from "react";
import "./contact.styles.scss";

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
          <span className="highlight">sixtohernandezpalomo@gmail.com</span>
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
    </section>
  );
};

export default Contact;
