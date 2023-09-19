import mc from "./experiences.module.scss";

const Experiences = () => {
  return (
    <div className={mc.container}>
      <h2>EXPÉRIENCES</h2>
      <div className={mc.experiences}>
        <div className={mc.sub_container}>
          <div className={mc.chronology}>
            <div>
              <span>MAI</span>
              <span>2022</span>
            </div>
          </div>
          <div className={mc.experience}>
            <h3>DEVELOPPEUR WEB | SUEZ</h3>
            <span>Immersion professionnelle</span>
          </div>
        </div>

        <div className={mc.sub_container}>
          <div className={mc.chronology}>
            <div>
              <span>2010</span>
              {/* <span>-</span> */}
              <span>2021</span>
            </div>
          </div>
          <div className={mc.experience}>
            <h3>CONSEILLER COMMERCIAL | SFR - ORANGE</h3>
            <p>
              Ces expériences m'auront énormément appris sur moi. Au-delà du
              challenge quotidien auquel j'étais confronté, j'ai pu gagner
              énormément de <span className="highlight"> confiance en moi</span>
              . J'y ai également appris l'importance de
              <span className="highlight"> travailler en équipe</span>.
            </p>
          </div>
        </div>

        <div className={mc.sub_container}>
          <div className={mc.chronology}>
            <div>
              <span>ÉTÉ</span>
              <span>2005</span>
            </div>
          </div>
          <div className={mc.experience}>
            <h3>AGENT DE TRI DU COURRIER | LA POSTE</h3>
            <p>
              Ma première expérience professionnelle. C'était un travail
              difficile mais très formateur. Fait insolite : il m'aura permis de
              connaître sur le bout des doigts tous les{" "}
              <span className="highlight">codes postaux</span>. Et aujourd'hui
              encore, je suis capable de tous les citer en un éclair ! C'est
              faux, le temps est passé et je n'en connais plus le quart...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
