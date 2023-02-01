import "./About.css";

import { FiAward } from "react-icons/fi";

import me from "../../assets/me.png";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={me} alt="about me" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about_card">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quod nihil asperiores, nisi veniam cupiditate sit perspiciatis? Sed
            nihil id assumenda optio, odit numquam!
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
