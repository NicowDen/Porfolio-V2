import mc from "./nav.module.scss";
import { useDispatch } from "react-redux";

const Nav = ({ aboutMe, softSkills, background, projects }) => {
  const dispatch = useDispatch();
  const goRubric = (rubric) => {
    setTimeout(() => {
      dispatch({ type: rubric });
    }, 300);
  };

  return (
    <nav className={mc.container}>
      <div>
        <a href="#aboutMe">
          <button
            onClick={() => goRubric("ABOUT_ME_ON")}
            className={!aboutMe ? mc.button : mc.button_active}
          >
            <span className={aboutMe ? mc.span_active : ""}>
              À propos de moi
            </span>
          </button>
        </a>
      </div>

      <div>
        <a href="#softSkills">
          <button
            onClick={() => goRubric("SOFT_SKILLS_ON")}
            className={!softSkills ? mc.button : mc.button_active}
          >
            <span className={softSkills ? mc.span_active : ""}>
              Soft skills
            </span>
          </button>
        </a>
      </div>

      <div>
        <a href="#background">
          <button
            onClick={() => goRubric("BACKGROUND_ON")}
            className={!background ? mc.button : mc.button_active}
          >
            <span className={background ? mc.span_active : ""}>Parcours</span>
          </button>
        </a>
      </div>

      <div>
        <a href="#projects">
          <button
            onClick={() => goRubric("PROJECTS_ON")}
            className={!projects ? mc.button : mc.button_active}
          >
            <span className={projects ? mc.span_active : ""}>Projets</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
