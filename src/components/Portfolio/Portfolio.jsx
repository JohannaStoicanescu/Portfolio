import "./Portfolio.css";

import Anthill from "../../assets/loginPageAnthill.png";
import Tripder from "../../assets/landingPageTripder.png";
import Roketto from "../../assets/landingPageRoketto.png";

const projects = [
  {
    id: 1,
    image: Anthill,
    title: "Anthill (work in progress)",
    text: "Platform to exchange ideas, comment and vote.",
  },
  {
    id: 2,
    image: Tripder,
    title: "Tripder",
    text: "A tinder to match with a city. Made in 24 hour for an Hackathon.",
  },
  {
    id: 3,
    image: Roketto,
    title: "Rocketto",
    text: "The first project I worked on as a web developer.",
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
              <p>{e.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
