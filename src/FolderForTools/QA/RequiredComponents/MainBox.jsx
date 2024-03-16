import classes from "./MainBox.module.css";

import { useState } from "react";
import { forwardRef } from "react";
import GetDocument from "../../../UI/GetDocument";

const TextArea = forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      rows={20}
      placeholder={props.placeholder}
      className={classes.QAteatarea}
    />
  );
});

const MainBox = ({
  contextRef,
  display,
  setDipslay,
  src,
  setSrc,
  filetype,
  setFileType,
}) => {
  const curret = {
    textarea: <TextArea ref={contextRef} placeholder="Enter The Paragraph" />,
    getDocument: (
      <GetDocument
        src={src}
        setSrc={setSrc}
        filetype={filetype}
        setFileType={setFileType}
        height="550px"
      />
    ),
  };

  return (
    <div>
      <div className={classes["navigation-container"]}>
        <div
          className={`${classes.navigation} ${display === "textarea" && classes.current}`}
          onClick={() => {
            if (display !== "textarea") {
              setDipslay("textarea");
            }
          }}
        >
          Via Paragraph
        </div>
        <div
          className={`${classes.navigation} ${display === "getDocument" && classes.current}`}
          onClick={() => {
            if (display !== "getDocument") {
              setDipslay("getDocument");
            }
          }}
        >
          Via Document
        </div>
      </div>
      {curret[display]}
    </div>
  );
};

export default MainBox;
