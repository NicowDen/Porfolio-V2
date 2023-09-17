import mc from "./right.module.scss";
import { useDispatch } from "react-redux";
//components//
import AboutMe from "./aboutMe/AboutMe";
import SoftSkills from "./softSkills/SoftSkills";
import Background from "./background/Background";
import Projects from "./myProjects/Projects";

const Right = ({
  aboutMe,
  softSkills,
  background,
  projects,
  aboutMeComponent,
  backgroundComponent,
  softSkillsComponent,
  projectsComponent,
}) => {
  const dispatch = useDispatch();
  const goRubric = (rubric) => {
    dispatch({ type: rubric });
  };
  return (
    <main className={mc.container}>
      <div id="aboutMe">
        <AboutMe aboutMe={aboutMe} aboutMeComponent={aboutMeComponent} />
      </div>

      <div id="softSkills">
        <SoftSkills
          softSkills={softSkills}
          softSkillsComponent={softSkillsComponent}
        />
      </div>

      <div id="background" onClick={() => goRubric("BACKGROUND_ON")}>
        <Background
          background={background}
          backgroundComponent={backgroundComponent}
        />
      </div>

      <div id="projects" onClick={() => goRubric("PROJECTS_ON")}>
        <Projects projects={projects} projectsComponent={projectsComponent} />
      </div>
    </main>
  );
};

export default Right;
