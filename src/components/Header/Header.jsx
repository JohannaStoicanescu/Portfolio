import "./Header.css";
import HeaderButtons from "./HeaderButtons";
import HeaderSocials from "./HeaderSocials";
import me from "../../assets/me.png";

function header() {
  return (
    <header>
      <div id="header" className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Johanna Stoicanescu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderButtons />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default header;
