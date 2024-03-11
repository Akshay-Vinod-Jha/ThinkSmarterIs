import ex1 from "../../../../images/textExtraction1.png";
import ex2 from "../../../../images/textExtraction2.png";
import ex3 from "../../../../images/textExtraction3.png";
import ex4 from "../../../../images/textExtraction4.png";

import { TbBulb } from "react-icons/tb";
import classes from "./TryThese.module.css";

const TryThese = ({ getImageHandler }) => {
  const clickHandler = async (src) => {
    const response = await fetch(src);
    const blobimage = await response.blob(response);
    getImageHandler(blobimage);
  };
  return (
    <div className={classes.tryThisCantainer}>
      <h1>
        <TbBulb color="yellow" fontSize="1.5rem" />
        Don’t have idea ? Try these!
      </h1>
      <div className={classes["samples-container"]}>
        {[ex1, ex2, ex3, ex4].map((src, ind) => {
          return (
            <img
              onClick={() => clickHandler(src)}
              key={`trythis${ind}`}
              src={src}
              alt="sample image"
              className={classes.samples}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TryThese;
