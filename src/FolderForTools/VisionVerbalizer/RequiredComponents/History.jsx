// import React from 'react'
// import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import classes from "./History.module.css";
import { FaRegCopy } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";

const History = (props) => {
  return (
    <div className={classes["history-container"]}>
      <h2 className={classes.histroyHeading}>History</h2>
      <div className={classes["history-itemContainer"]}>
        {props.history.map((val, ind) => {
          return (
            <div className={classes["history-item"]} key={`imagetotext${ind}`}>
              <p>{val}</p>
              <div className={classes.icons}>
                <AiOutlineMessage
                  className={classes.icon}
                  fontSize="1.5rem"
                  color="rgba(255,255,255,0.75)"
                />
                <div className={classes.copy}>
                  Copy
                  <FaRegCopy
                    fontSize="1.5rem"
                    color="rgba(255,255,255,0.75)"
                    className={classes.icon}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
