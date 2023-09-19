import mc from "./soft_skills.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//constants//
import { softSkills } from "../../../../constants/skills";
//components//
import SliderNextArrow from "../slidersArrows/sliderNextArrow/SliderNextArrow";
import SliderPrevArrow from "../slidersArrows/sliderPrevArrow/SliderPrevArrow";

const SoftSkills = ({ windowWidth }) => {
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
      <h2>SOFT SKILLS</h2>
      <Slider className={mc.slider} {...settings}>
        {softSkills.map((el, i) => (
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
