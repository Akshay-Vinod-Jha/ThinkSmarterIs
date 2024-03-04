// import React from "react";
import MainBox from "./RequiredComponents/MainBox";
import History from "./RequiredComponents/History";
import TryThese from "./RequiredComponents/TryThese";
import classes from "./VisionVerbalizer.module.css";
import { useState } from "react";
const VisionVerbalizer = () => {
  const [src, setSrc] = useState(null);
  return (
    <div className={classes.VisionVerbalizer}>
      <div className={classes.upper}>
        <MainBox src={src} updateSrc={setSrc} />
        <History
          history={Array(15).fill(
            "The Generated text from the uploaded image is displayed here ."
          )}
        />
      </div>
      <div className={classes.lower}>
        <TryThese updateSrc={setSrc} />
      </div>
    </div>
  );
};

export default VisionVerbalizer;
