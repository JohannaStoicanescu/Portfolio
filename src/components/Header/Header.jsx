import "./Header.css";

import HeaderButtons from "./HeaderButtons";
import HeaderSocials from "./HeaderSocials";

import logo from "../../assets/jojoLogoWhite.png";
import me from "../../assets/me.png";

function header() {
  return (
    <header>
      <div id="header" className="container header__container">
        <img src={logo} alt="logo" className="header__logo" />
        <div className="container__hello">
          <article></article>
          <h5>Hello, I'm</h5>
          <article></article>
        </div>

        <h1>Johanna Stoicanescu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderButtons />
        <HeaderSocials />

        <img src={me} alt="me" className="me" />

        <div className="container__scroll__down">
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
}

export default header;
