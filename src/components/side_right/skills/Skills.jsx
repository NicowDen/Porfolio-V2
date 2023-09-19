import mc from "./Skills.module.scss";
//components//
import SoftSkills from "./softSkills/SoftSkills";
import HardSkills from "./hardSkills/HardSkills";
//icons//

const Skills = ({ skills, skillsComponent, windowWidth }) => {
  return (
    <div
      ref={skillsComponent}
      className={
        !skills
          ? `${mc.container} container`
          : `${mc.container} container container_hover`
      }
    >
      <HardSkills windowWidth={windowWidth} />
      <SoftSkills windowWidth={windowWidth} />
    </div>
  );
};

export default Skills;
