import "./About.css";

import { FiAward } from "react-icons/fi";

import me from "../../assets/illustration.png";

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
            I have a degree in Graphic Design specialized in Visual
            Communication that I obtained in parallel to my job as a
            waitress/bartender which taught me discipline, creativity and to be
            social. While doing so, I started exploring programming/coding and
            it became rapidly clear that is would became the logical next step
            in my career.
            <br /> I am seeking joining a dynamic, passionate and cohesive team.
            <br /> Don't hesitate to contact me for further information!
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
