import CV from "../../assets/CV.pdf";
function HeaderButtons() {
  return (
    <div className="headerButtons">
      <a href={CV} target="_blank" rel="noreferrer" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
}

export default HeaderButtons;
