import classes from "./MainBox.module.css";
import GetDocument from "../../../UI/GetDocument";
import { MdHistory } from "react-icons/md";
import { useState } from "react";
const MainBox = ({ src, updateSrc, setShowHistory }) => {
  const [filetype, setFileType] = useState(null);

  return (
    <div className={classes["mainBox-cantainer"]}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Vision Verbalizer </h1>
        <MdHistory
          color="#728894"
          fontSize="2rem"
          className={classes.history}
          onClick={() => setShowHistory(true)}
        />
      </div>
      <GetDocument
        src={src}
        setSrc={updateSrc}
        filetype={filetype}
        setFileType={setFileType}
        height="92%"
        pdf={false}
      />
    </div>
  );
};

export default MainBox;
