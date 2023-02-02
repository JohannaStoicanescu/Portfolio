import "./Portfolio.css";
import illustration from "../../assets/illustration.png";

const projects = [
  {
    id: 1,
    image: illustration,
    title: "title",
    github: "hdfghd",
  },
  {
    id: 2,
    image: illustration,
    title: "title",
    github: "hdfghd",
  },
  {
    id: 3,
    image: illustration,
    title: "title",
    github: "hdfghd",
  },
];
function Portfolio() {
  return (
    <section id="#portfolio">
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
              <div className="portfolio__item-cta">
                <a
                  href={e.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
