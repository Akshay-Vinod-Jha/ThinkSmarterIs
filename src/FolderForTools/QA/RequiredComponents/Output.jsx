// import React from "react";
import Copy from "../../../UI/Copy";
import classes from "./Output.module.css";
import Loading from "../../../UI/Loading";
const Output = ({ output, isLoading }) => {
  return (
    <div className={classes["output-container"]}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Answer</h1>
        {!isLoading && <Copy text={output} size={"1rem"} />}
      </div>
      {isLoading ? (
        <Loading label="Finding Answer..." size="40px" />
      ) : (
        <p className={classes.output}>{output}</p>
      )}
    </div>
  );
};

export default Output;
