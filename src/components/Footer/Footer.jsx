import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import "./Footer.css";

import logo from "../../assets/jojoLogo.png";

function Footer() {
  return (
    <footer>
      <a href="#header">
        <img src={logo} alt="logo" className="footer__logo" />
      </a>

      <ul className="links">
        <li>
          <a href="#header">To the top</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expirence</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/johanna-stoicanescu-752801252/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/JohannaStoicanescu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jojo's work. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
