import { copyTextToClipboard } from "../common-funtions/copy";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

import { FaRegCopy } from "react-icons/fa6";
import classes from "./Copy.module.css";
import { useState, Fragment } from "react";
const Copy = ({ size, text }) => {
  const [copy, setCopy] = useState(false);

  return (
    <div
      className={classes.copy+"  font-lexend"}
      onClick={() => {
        copyTextToClipboard(text);
        setCopy((copy) => !copy);
        setTimeout(() => {
          setCopy((copy) => !copy);
        }, 1000);
      }}
    >
      {copy ? (
        <p className="flex font-lexend justify-center items-center gap-2">
          Copied
          <IoCheckmarkDoneCircle className="text-green-500 text-base"></IoCheckmarkDoneCircle>
        </p>
      ) : (
        <Fragment>
          Copy
          <FaRegCopy
            fontSize={size}
            color="rgba(255,255,255,0.75)"
            className={classes.icon}
          />
        </Fragment>
      )}
    </div>
  );
};

export default Copy;
