import mc from "./left.module.scss";
//components//
import Me from "./me/Me";
import Nav from "./nav/Nav";
import Contact from "./contact/Contact";

const Left = ({ aboutMe, softSkills, background, projects }) => {
  return (
    <header className={mc.container}>
      <div className={mc.me}>
        <Me />
      </div>
      <div className={mc.nav}>
        <Nav
          aboutMe={aboutMe}
          softSkills={softSkills}
          background={background}
          projects={projects}
        />
      </div>
      <div className={mc.contact}>
        <Contact />
      </div>
    </header>
  );
};

export default Left;
