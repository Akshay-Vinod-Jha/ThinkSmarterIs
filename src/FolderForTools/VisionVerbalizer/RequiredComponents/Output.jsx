import classes from "./Output.module.css";
import { FaRegCopy } from "react-icons/fa6";
import { copyTextToClipboard } from "../../../common-funtions/copy.jsx";
const Output = ({ children }) => {
  return (
    <div className={classes.output}>
      <div className={classes.headerr}>
        <h2 className={classes.h2}>Generated Text from Image</h2>
        <div
          className={classes.copy}
          onClick={() => copyTextToClipboard(children)}
        >
          Copy
          <FaRegCopy
            fontSize="1.5rem"
            color="rgba(255,255,255,0.75)"
            className={classes.icon}
          />
        </div>
      </div>
      <p className={classes.text}>{children}</p>{" "}
    </div>
  );
};
export default Output;
