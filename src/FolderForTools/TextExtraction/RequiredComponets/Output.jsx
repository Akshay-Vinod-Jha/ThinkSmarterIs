import classes from "./Output.module.css";
import Loading from "../../../UI/Loading.jsx";
import Copy from "../../../UI/Copy.jsx";
const Output = ({ children, isLoading }) => {
  return (
    <div className={classes.output}>
      <div className={classes.headerr}>
        <h2 className={classes.h2}>Extracted Text from Image</h2>
        {!isLoading && <Copy size="1.15rem" text={children} />}
      </div>
      {isLoading ? (
        <Loading label="Extracting Text..." size="40px" />
      ) : (
        <pre className={classes.text}>
          <p>{children}</p>
        </pre>
      )}
    </div>
  );
};
export default Output;
