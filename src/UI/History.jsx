import classes from "./History.module.css";
// import { FaRegCopy } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import { IoClose } from "react-icons/io5";
// import { copyTextToClipboard } from "../common-funtions/copy.jsx";
import Copy from "./Copy.jsx";
const History = ({ history, showHistory, setShowHistory, height }) => {
  return (
    <div
      className={`${classes["history-container"]} ${showHistory ? classes.show : classes.hide} font-lexend`}
      style={{ height: height }}
    >
      <div className={classes["history-title"]}>
        <h2 className={classes.histroyHeading}>
          <MdHistory fontSize="1.5rem" />
          Recent
        </h2>
        <IoClose
          fontSize={`2rem`}
          color="#728894"
          onClick={() => setShowHistory(false)}
          className={classes.close}
        />
      </div>
      <div className={classes["history-itemContainer"]}>
        {history.map((val, ind) => {
          return (
            <div className={classes["history-item"]} key={`imagetotext${ind}`}>
              <p>{val}</p>
              <div className={classes.icons}>
                <AiOutlineMessage
                  className={classes.icon}
                  fontSize="1.5rem"
                  color="rgba(255,255,255,0.75)"
                />
                <Copy size="small" text={val} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
