import "./Portfolio.css";

import Anthill from "../../assets/loginPageAnthill.png";
import Tripder from "../../assets/landingPageTripder.png";
import Roketto from "../../assets/landingPageRoketto.png";
// Rajout de repo and screen of the site
const projects = [
  {
    id: 1,
    image: "",
    title: "In coming",
    text: "",
    techno: ["Vue.js"],
    repo: "",
  },
  {
    id: 2,
    image: Anthill,
    title: "Anthill",
    text: "Platform to exchange ideas, comment and vote.",
    techno: ["React.js", "Express.js", "Node.js", "MySQL"],
    repo: "",
  },
  {
    id: 3,
    image: Tripder,
    title: "Tripder",
    text: "A tinder to match with a city. Made in 24 hour with for an Hackathon.",
    techno: ["React.js", "Node.js", "API Rest"],
    repo: "https://github.com/Paskaphot/hackatack",
  },
  {
    id: 4,
    image: Roketto,
    title: "Rocketto",
    text: "The first project I worked on as a web developer.",
    techno: ["HTML", "CSS", "JavaScript"],
    repo: "",
  },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((e) => {
          return (
            <article key={e.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={e.image} alt="" />
              </div>
              <h3>{e.title}</h3>
              <p className="portfolio__item-description">{e.text}</p>
              <p>Made with :</p>
              <div className="portfolio__item-technos">
                {e.techno.map((el) => {
                  return <p className="portfolio__item-techno">{el}</p>;
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
