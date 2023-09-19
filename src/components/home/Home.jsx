import mc from "./home.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
//components//
import Left from "../side_left/Left";
import Right from "../side_right/Right";

const Home = () => {
  const dispatch = useDispatch();
  const { aboutMe, skills, background, projects, windowWidth } = useSelector(
    (store) => {
      return {
        aboutMe: store.rubricsReducer.aboutMe,
        skills: store.rubricsReducer.skills,
        background: store.rubricsReducer.background,
        projects: store.rubricsReducer.projects,
        scrollPosition: store.scrollReducer.scrollPosition,
        windowWidth: store.windowSizeReducer.windowWidth,
      };
    }
  );

  const aboutMeComponent = useRef(null);
  const skillsComponent = useRef(null);
  const backgroundComponent = useRef(null);
  const projectsComponent = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeComponentPosition =
        aboutMeComponent.current.getBoundingClientRect();
      const skillsComponentPosition =
        skillsComponent.current.getBoundingClientRect();
      const backgroundComponentPosition =
        backgroundComponent.current.getBoundingClientRect();
      const projectsComponentPosition =
        projectsComponent.current.getBoundingClientRect();
      // console.log(aboutMeComponentPosition.top);
      // console.log(skillsComponentPosition.top);
      // console.log(backgroundComponentPosition.top);
      // console.log(projectsComponentPosition.top);
      if (aboutMeComponentPosition.top > -449) {
        dispatch({ type: "ABOUT_ME_ON" });
      }
      if (skillsComponentPosition.top <= 200) {
        dispatch({ type: "SKILLS_ON" });
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
    skillsComponent,
    backgroundComponent,
    projectsComponent,
  ]);

  return (
    <div className={mc.container}>
      <div className={mc.left}>
        <Left
          aboutMe={aboutMe}
          skills={skills}
          background={background}
          projects={projects}
          windowWidth={windowWidth}
        />
      </div>
      <div className={mc.right}>
        <Right
          aboutMe={aboutMe}
          skills={skills}
          background={background}
          projects={projects}
          aboutMeComponent={aboutMeComponent}
          skillsComponent={skillsComponent}
          backgroundComponent={backgroundComponent}
          projectsComponent={projectsComponent}
          windowWidth={windowWidth}
        />
      </div>
    </div>
  );
};

export default Home;
