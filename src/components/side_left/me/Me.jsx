import mc from "./me.module.scss";

const Me = () => {
  return (
    <div className={mc.container}>
      <div className={mc.myName}>
        <span>Nicolas</span>
        <div>
          <span className={mc.fast_flicker}>G</span>
          <span>ren</span>
          <span className={mc.flicker}>i</span>
          <span>er</span>
        </div>
      </div>
      <div className={mc.moreAboutMe}>
        <h2>Développeur React/Node.js</h2>
        <p>
          Passionné, à la recherche d'une première opportunité professionnelle
        </p>
      </div>
    </div>
  );
};

export default Me;
