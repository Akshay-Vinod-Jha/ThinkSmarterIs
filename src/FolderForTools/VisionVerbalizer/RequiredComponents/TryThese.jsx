// import React from 'react'
import ex1 from "../../../../images/imagetotext1.jpg";
import ex2 from "../../../../images/imagetotext2.jpg";
import ex3 from "../../../../images/imagetotext3.jpg";
import ex4 from "../../../../images/imagetotext4.webp";
import { TbBulb } from "react-icons/tb";
import classes from "./Trythese.module.css";

const TryThese = ({ updateSrc }) => {
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
              onClick={() => updateSrc(src)}
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
