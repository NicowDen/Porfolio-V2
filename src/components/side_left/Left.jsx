import mc from "./left.module.scss";
//components//
import Me from "./me/Me";
import Nav from "./nav/Nav";
import Contact from "./contact/Contact";

const Left = ({ aboutMe, skills, background, projects, windowWidth }) => {
  return (
    <header className={mc.container}>
      <div className={mc.me}>
        <Me />
      </div>
      {windowWidth > 1050 && (
        <div className={mc.nav}>
          <Nav
            aboutMe={aboutMe}
            skills={skills}
            background={background}
            projects={projects}
          />
        </div>
      )}
      <div className={mc.contact}>
        <Contact />
      </div>
    </header>
  );
};

export default Left;
