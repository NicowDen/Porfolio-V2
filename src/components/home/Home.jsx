import mc from "./home.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
//components//
import Left from "../side_left/Left";
import Right from "../side_right/Right";

const Home = () => {
  const dispatch = useDispatch();
  const { aboutMe, softSkills, background, projects } = useSelector((store) => {
    return {
      aboutMe: store.rubricsReducer.aboutMe,
      softSkills: store.rubricsReducer.softSkills,
      background: store.rubricsReducer.background,
      projects: store.rubricsReducer.projects,
      scrollPosition: store.scrollReducer.scrollPosition,
    };
  });

  const aboutMeComponent = useRef(null);
  const softSkillsComponent = useRef(null);
  const backgroundComponent = useRef(null);
  const projectsComponent = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeComponentPosition =
        aboutMeComponent.current.getBoundingClientRect();
      const softSkillsComponentPosition =
        softSkillsComponent.current.getBoundingClientRect();
      const backgroundComponentPosition =
        backgroundComponent.current.getBoundingClientRect();
      const projectsComponentPosition =
        projectsComponent.current.getBoundingClientRect();
      // console.log(aboutMeComponentPosition.top);
      // console.log(softSkillsComponentPosition.top);
      console.log(backgroundComponentPosition.top);
      // console.log(projectsComponentPosition.top);
      if (aboutMeComponentPosition.top > -449) {
        dispatch({ type: "ABOUT_ME_ON" });
      }
      if (softSkillsComponentPosition.top <= 200) {
        dispatch({ type: "SOFT_SKILLS_ON" });
      }
      if (backgroundComponentPosition.top <= 200) {
        dispatch({ type: "BACKGROUND_ON" });
      }
      if (projectsComponentPosition.top <= 437) {
        dispatch({ type: "PROJECTS_ON" });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    dispatch,
    aboutMeComponent,
    softSkillsComponent,
    backgroundComponent,
    projectsComponent,
  ]);

  return (
    <div className={mc.container}>
      <div className={mc.left}>
        <Left
          aboutMe={aboutMe}
          softSkills={softSkills}
          background={background}
          projects={projects}
        />
      </div>
      <div className={mc.right}>
        <Right
          aboutMe={aboutMe}
          softSkills={softSkills}
          background={background}
          projects={projects}
          aboutMeComponent={aboutMeComponent}
          softSkillsComponent={softSkillsComponent}
          backgroundComponent={backgroundComponent}
          projectsComponent={projectsComponent}
        />
      </div>
    </div>
  );
};

export default Home;
