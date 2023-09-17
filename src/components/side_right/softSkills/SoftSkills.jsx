import mc from "./soft_skills.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//constants//
import { skills } from "../../../constants/skils";
//components//
import SliderNextArrow from "./slidersArrows/sliderNextArrow/SliderNextArrow";
import SliderPrevArrow from "./slidersArrows/sliderPrevArrow/SliderPrevArrow";

const SoftSkills = ({ softSkills, softSkillsComponent }) => {
  const settings = {
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div
      ref={softSkillsComponent}
      className={
        !softSkills
          ? `${mc.container} container`
          : `${mc.container} container container_hover`
      }
    >
      <h2>Soft skills</h2>
      <Slider className={mc.slider} {...settings}>
        {skills.map((el, i) => (
          <div className={`${mc.skill_container}`} key={i}>
            <i className={el.icon}></i>
            <span>{el.skill}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SoftSkills;
