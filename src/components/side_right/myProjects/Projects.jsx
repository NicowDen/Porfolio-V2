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
      <h2>Projets</h2>
      <div className={mc.project}>
        <h4>PORTFOLIO V1</h4>
        <div className={mc.project_description}>
          <p>
            Mon premier porfolio. Avec le recul il ne me correspondait pas, et
            je n'étais pas satisfait du code. J'ai préféré tout recommencer de
            zéro en lançant la V2.
          </p>
          <p>Le lien n'est plus disponible puisque remplacé par la V2.</p>
        </div>
        <div className={mc.links}>
          <ul>
            <li className={mc.github}>
              <a
                href="https://github.com/NicowDen/Portfolio-V1"
                target="_blank"
              >
                <i className="icon-github-outline"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={mc.project}>
        <h4>PORTFOLIO V2</h4>
        <div className={mc.project_description}>
          <p>Vous y êtes.</p>
        </div>
        <div className={mc.links}>
          <ul>
            <li className={mc.github}>
              <a
                href="https://github.com/NicowDen/Portfolio-V1"
                target="_blank"
              >
                <i className="icon-github-outline"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={mc.project}>
        <h4>MERLIN' ARENA</h4>
        <div className={mc.project_description}>
          <p>
            Un mini-jeu s'inspirant du concept des jeux de rôle papier. Deux
            héros se battent jusqu'à la mort sous le regard désapprobateur d'un
            maître du jeu tout sauf bienveillant.
          </p>
        </div>
        <div className={mc.links}>
          <ul>
            <li className={mc.mail}>
              <a href="https://merlin-arena.fr/" target="_blank">
                <i className="icon-external-link-outline"></i>
              </a>
            </li>
            <li className={mc.github}>
              <a
                href="https://github.com/NicowDen/MerlinArenas"
                target="_blank"
              >
                <i className="icon-github-outline"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={mc.project}>
        <h4>MERLIN' ARENA</h4>
        <div className={mc.project_description}>
          <p>
            Un mini-jeu s'inspirant du concept des jeux de rôle papier. Deux
            héros se battent jusqu'à la mort sous le regard désapprobateur d'un
            maître du jeu tout sauf bienveillant.
          </p>
        </div>
        <div className={mc.links}>
          <ul>
            <li className={mc.mail}>
              <a href="https://merlin-arena.fr/" target="_blank">
                <i className="icon-external-link-outline"></i>
              </a>
            </li>
            <li className={mc.github}>
              <a
                href="https://github.com/NicowDen/MerlinArenas"
                target="_blank"
              >
                <i className="icon-github-outline"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
