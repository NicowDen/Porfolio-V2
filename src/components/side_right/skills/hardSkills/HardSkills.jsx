import mc from "./hard_skills.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//constants//
import { softSkills } from "../../../../constants/skills";
//components//
import SliderNextArrow from "../slidersArrows/sliderNextArrow/SliderNextArrow";
import SliderPrevArrow from "../slidersArrows/sliderPrevArrow/SliderPrevArrow";
//icons img//
import sass from "../../../../images/icones/sass.png";
import js from "../../../../images/icones/js.png";
import react from "../../../../images/icones/react.png";
import nodejs from "../../../../images/icones/nodejs.png";
import mongodb from "../../../../images/icones/mongodb.png";

const HardSkills = ({ windowWidth }) => {
  const hardSkills = [
    { skill: "sass", icon: sass },
    { skill: "javascript", icon: js },
    { skill: "react", icon: react },
    { skill: "node js", icon: nodejs },
    { skill: "mongodb", icon: mongodb },
  ];

  const settings = {
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth > 800 ? 3 : windowWidth > 500 ? 2 : 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className={mc.container}>
      <h2>HARD SKILLS</h2>
      <Slider className={mc.slider} {...settings}>
        {hardSkills.map((el, i) => (
          <div className={`${mc.skill_container}`} key={i}>
            <img src={el.icon}></img>
            <span>{el.skill.toUpperCase()}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HardSkills;
