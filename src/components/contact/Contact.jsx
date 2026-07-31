import React from "react";
import "./contact.css";
import image from "../../assets/myMascot.jpg"
import myimage from "../../assets/myPicture.jpg"
const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-left">
        <span className="contact-tag">
          • Contact Me
        </span>

        <h2>
          Let's build something
          <br />
          amazing together.
        </h2>

        <p>
          Have an idea, a project, or just want to say hello?
          I'm always open to discussing new opportunities,
          freelance work, or collaborations.
        </p>

        <a
          href="mailto:your@email.com"
          className="contact-btn"
        >
          Say Hello →
        </a>
      </div>

      <div className="contact-right">

        <a
          href="https://wa.me/923446364513"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <img src={image} alt="" />

          <div>
            <h3>WhatsApp</h3>
            <span>+92 344 6364513</span>
          </div>

          <p>Quickest way to reach me.</p>
        </a>

        <a
          href="mailto:saqibsyed@email.com"
          className="contact-card"
        >
          <img src={myimage} alt="" />

          <div>
            <h3>Email</h3>
            <span>saqibsyed@email.com</span>
          </div>

          <p>For business inquiries.</p>
        </a>

        <a
          href="https://www.linkedin.com/in/saqib-syed-49a768117/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <img src="https://media.licdn.com/dms/image/v2/D4D16AQHFB_SlVrdkKw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1719851132485?e=1787184000&v=beta&t=32YDig7asp4hIHGSNNlZCJO6GXpbdA8sueiGdBCZ4HA" alt="" />

          <div>
            <h3>LinkedIn</h3>
            <span>@saqibsyed</span>
          </div>

          <p>Professional profile.</p>
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <img src="resources/github.png" alt="" />

          <div>
            <h3>GitHub</h3>
            <span>View my projects</span>
          </div>

          <p>Open source & portfolio.</p>
        </a>

      </div>

    </section>
  );
};

export default Contact;