import mc from "./me.module.scss";

const Me = () => {
  return (
    <div className={mc.container}>
      <div className={mc.myName}>
        <span>Nicolas</span>
        <div>
          <span className={mc.fast_flicker}>G</span>
          <span>re</span>
          <span className={mc.flicker}>n</span>
          <span>ier</span>
        </div>
      </div>
      <div className={mc.moreAboutMe}>
        <div>
          <h2>Développeur React/Node.js</h2>
          <p>
            Passionné, à la recherche d'une première opportunité professionnelle
          </p>
        </div>
      </div>
    </div>
  );
};

export default Me;
