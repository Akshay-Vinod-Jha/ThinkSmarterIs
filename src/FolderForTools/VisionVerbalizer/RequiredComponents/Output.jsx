import classes from "./Output.module.css";
import Loading from "../../../UI/Loading.jsx";
import Copy from "../../../UI/Copy.jsx";
const Output = ({ children, isLoading }) => {
  return (
    <div className={classes.output}>
      <div className={classes.headerr}>
        <h2 className={classes.h2}>Generated Text from Image</h2>
        {!isLoading && <Copy size="1.15rem" text={children} />}
      </div>
      {isLoading ? (
        <Loading label="Captioning Text..." size="40px" />
      ) : (
        <p className={classes.text}>{children}</p>
      )}
    </div>
  );
};
export default Output;
