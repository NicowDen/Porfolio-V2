import mc from "./background.module.scss";
//components//
import Formations from "./formations/Formations";
import Experiences from "./experiences/Experiences";

const Background = ({ background, backgroundComponent }) => {
  return (
    <div
      ref={backgroundComponent}
      className={
        !background
          ? `${mc.container} container`
          : `${mc.container} container container_hover`
      }
    >
      <div className={mc.formations}>
        <Formations />
      </div>
      <div>
        <Experiences />
      </div>
    </div>
  );
};

export default Background;
