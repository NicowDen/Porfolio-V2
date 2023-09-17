import mc from "./formations.module.scss";

const Formations = () => {
  return (
    <div className={mc.container}>
      <h2>Formations</h2>

      <div className={mc.sub_container}>
        <div className={mc.chronology}>
          <div>
            <span>2022</span>
            {/* <span>-</span> */}
            <span>2023</span>
          </div>
        </div>
        <div className={mc.formation}>
          <h3>DÉVELOPPEUR WEB | 3W ACADEMY</h3>
          <span>Titre RNCP de niveau III, certification de niveau bac+2</span>
          <span>Diplômé en 2023</span>
        </div>
      </div>

      <div className={mc.sub_container}>
        <div className={mc.chronology}>
          <div>
            <span>2007</span>
            {/* <span>-</span> */}
            <span>2009</span>
          </div>
        </div>
        <div className={mc.formation}>
          <h3>BTS MUC | ICFA BORDEAUX</h3>
          <span>Diplômé en 2009</span>
        </div>
      </div>

      <div className={mc.sub_container}>
        <div className={mc.chronology}>
          <div>
            <span>2005</span>
          </div>
        </div>
        <div className={mc.formation}>
          <h3>BACCALAURÉAT STT | LYCÉE VICTOR LOUIS</h3>
          <span>Diplômé en 2006</span>
        </div>
      </div>
    </div>
  );
};

export default Formations;
