import classes from "./Output.module.css";
import { FaRegCopy } from "react-icons/fa6";
import { copyTextToClipboard } from "../../../common-funtions/copy.jsx";
import Loading from "../../../UI/Loading.jsx";
import Copy from "../../../UI/Copy.jsx";
const Output = ({ children,isLoading }) => {
  return (
    <div className={classes.output}>
      <div className={classes.headerr}>

        <h2 className={classes.h2}>Generated Text from Image</h2>
        <Copy size="1.15rem" text={children}/>
      </div>
      {isLoading ? <Loading label="Captioning Image..." size="40px"/> : <p className={classes.text}>{children}</p>}
    </div>
  );
};
export default Output;
