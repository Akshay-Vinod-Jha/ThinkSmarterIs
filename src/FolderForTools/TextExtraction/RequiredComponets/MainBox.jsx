import { useRef, useState } from "react";
import classes from "./MainBox.module.css";
import { MdHistory } from "react-icons/md";
import GetDocument from "../../../UI/GetDocument";

const MainBox = ({ src, setShowHistory, setSrc, getImageHandler }) => {
  const [filetype, setFileType] = useState(null);
  return (
    <div className={classes["mainBox-cantainer"]}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Text Extraction</h1>
        <MdHistory
          color="#728894"
          fontSize="2rem"
          className={classes.history}
          onClick={() => setShowHistory(true)}
        />
      </div>

      <GetDocument
        src={src}
        filetype={filetype}
        setSrc={setSrc}
        setFileType={setFileType}
        height="92%"
        call={getImageHandler}
        pdf={true}
      />
    </div>
  );
};

export default MainBox;
