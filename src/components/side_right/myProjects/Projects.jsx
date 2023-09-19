import mc from "./projects.module.scss";

const Projects = ({ projects, projectsComponent }) => {
  return (
    <div
      ref={projectsComponent}
      className={
        !projects
          ? `${mc.container} container`
          : `${mc.container} container container_hover`
      }
    >
      <h2>PROJETS</h2>
      <div className={mc.projects}>
        <div className={mc.project}>
          <h3>PORTFOLIO V1</h3>
          <div className={mc.project_description}>
            <p>
              Mon premier porfolio. Avec le recul il ne me correspondait pas, et
              je n'étais pas satisfait du code. J'ai donc préféré tout
              recommencer de zéro en lançant la V2. Le lien n'est plus
              disponible puisque remplacé par la V2.
            </p>
          </div>
          <div className={mc.links}>
            <ul>
              <li>
                <a
                  href="https://github.com/NicowDen/Portfolio-V1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-github-outline"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={mc.project}>
          <h3>PORTFOLIO V2</h3>
          <div className={mc.project_description}>
            <p>Vous y êtes.</p>
          </div>
          <div className={mc.links}>
            <ul>
              <li>
                <a
                  href="https://github.com/NicowDen/Porfolio-V2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-github-outline"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={mc.project}>
          <h3>GEEK VERSE</h3>
          <div className={mc.project_description}>
            <p>
              Une librairie de films. Le site est modulable et propose, via des
              droits d'administration, la possibilité d'ajouter ou de supprimer
              du contenu, ainsi que diverses fonctionnalités.
            </p>
            <p>
              Ne souhaitant pas mettre le projet en ligne, une vidéo de
              présentation est disonible ci-dessous.
            </p>
          </div>
          <div className={mc.links}>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=K0Yc2kAU5OU&t=0s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-external-link-outline"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NicowDen/Geek-Verse"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-github-outline"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={mc.project}>
          <h3>MERLIN' ARENA</h3>
          <div className={mc.project_description}>
            <p>
              Un mini-jeu s'inspirant du concept des jeux de rôle papier. Deux
              héros se battent jusqu'à la mort sous le regard désapprobateur
              d'un maître du jeu tout sauf bienveillant.
            </p>
          </div>
          <div className={mc.links}>
            <ul>
              <li>
                <a
                  href="https://merlin-arena.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-external-link-outline"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NicowDen/MerlinArenas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-github-outline"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
