import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/johanna-stoicanescu-752801252/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="header__socials-icon"/>
      </a>
      <a
        href="https://github.com/JohannaStoicanescu/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="header__socials-icon"/>
      </a>
    </div>
  );
};

export default HeaderSocials;
