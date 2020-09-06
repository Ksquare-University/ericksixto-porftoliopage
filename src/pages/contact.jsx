import React from "react";
import "./contact.styles.scss"

const Contact = () => {
  return (
    <section className="section contact-page">
      <div className="section-title">
        <h1>Contact</h1>
        <div className="underline" />
      </div>

      <div className="section-center page-info">
        <p>
          Hi! If you want to get in touch with me, please reach me at{" "}
          <span className="highlight">sixtohernandezpalomo@gmail.com</span>
        </p>
        <p>
          You can also contact me at my{" "}
          <a className="highlight" href="www.linkedin.com/in/sixto-hernandez">
            Linkedin
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
