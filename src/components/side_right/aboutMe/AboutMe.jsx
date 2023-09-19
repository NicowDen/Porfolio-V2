import mc from "./aboutMe.module.scss";

const AboutMe = ({ aboutMe, aboutMeComponent }) => {
  return (
    <div
      ref={aboutMeComponent}
      className={
        !aboutMe
          ? `${mc.container} container`
          : `${mc.container} container container_hover`
      }
    >
      <div className={mc.about_me}>
        <h2>À PROPOS DE MOI</h2>
        <p>
          En 2022, fort d'une expérience de 15 ans dans le commerce qui aura
          décuplé mon goût du challenge, je me lance un nouveau défi, devenir{" "}
          <span className="highlight">développeur web.</span> C'est en{" "}
          <span className="highlight">autodidacte</span> que j'entame mon
          apprentissage, puis en septembre 2022, je commence une formation
          auprès de la <span className="highlight">3W Academy.</span> Diplôme en
          poche, je poursuis sur ce chemin en continuant d'apprendre chaque
          jour.
        </p>
      </div>
      {/* <div className={mc.line}></div> */}
      <div className={mc.about_me}>
        <h2>PLUS SUR MOI?</h2>
        <p>
          Eternnel insatisfait, j'aime le travail bien fait. Travailler sous
          <span className="highlight"> pression</span> ne me fait pas peur,
          c'est même bien souvent un moteur qui me permet de me transcender.
          J'ai appris de mes expériences passées l'importance de toujours se
          <span className="highlight"> remettre en question</span>, ce qui me
          permet de ne jamais me reposer sur mes acquis.
        </p>
      </div>
      {/* <div className={mc.line}></div> */}
      <div className={mc.about_me}>
        <h2>ENCORE PLUS?</h2>
        <p>
          Fan inconditionnel de cinéma, j'aime les films avec un scénario
          <span className="highlight"> original</span> et
          <span className="highlight"> bien ficellé, </span> un shéma que
          j'essaye de reproduire quand je développe. Je suis également féru de
          musique, et intimement persuadé que rien ne vaut les vieux sons{" "}
          <span className="highlight"> rocks </span>!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
