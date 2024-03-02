import Slide from "./Slide";
import classes from "./SliderCantainer.module.css";
import timeImage from "../../../images/time.png";
import aiIntegrationImage from "../../../images/integratedAI.png";
import learningOptimizationImage from "../../../images/learningOptimization.png";
import noexternalvisitImage from "../../../images/noexternalvisit.png";
import Reveal from "../../UI/Reveal";
// import { useState } from "react";
const sliderArray = [
  {
    src: learningOptimizationImage,
    title: "Optimal Learning Approch",
    description:
      "These websites offer AI tools tailored for student use, enhancing the study experience.",
  },
  {
    src: aiIntegrationImage,
    title: "Integreted Platform",
    description:
      "These websites offer AI tools tailored for student use, enhancing the study experience.",
  },
  {
    src: timeImage,
    title: "significantly Time-Efficient",
    description:
      "Efficiently accomplishes complex tasks and expeditiously delivers solutions, thereby conserving valuable student time.",
  },
  {
    src: noexternalvisitImage,
    title: "No External Visits",
    description:
      "Eliminates the need for students to visit multiple websites to accomplish diverse tasks.",
  },
];

const SliderCantainer = () => {
  //   const [slider, setSlider] = useState(sliderArray);
  // const scrollHandler = () => {
  //      const temp = slider.shift();
  //      setSlider([...slider,temp])
  // }
  return (
    <div className={classes.whychooseusCantainer}>
      <h1 className={classes.whychooseus}>Why Choose Us</h1>
      <Reveal>
        <div className={classes.slideCantainer}>
          {sliderArray.map((slide, ind) => {
            return (
              <Slide
                key={`slider${ind}`}
                src={slide.src}
                title={slide.title}
                description={slide.description}
              />
            );
          })}
        </div>
      </Reveal>
    </div>
  );
};
export default SliderCantainer;
