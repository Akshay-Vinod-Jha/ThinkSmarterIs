import { useRef, useState } from "react";
import classes from "./MainBox.module.css";
import GetDocument from "../../../UI/GetDocument";
import { MdHistory } from "react-icons/md";

const MainBox = ({ src, setShowHistory, setSrc, getImageHandler }) => {
  const [filetype, setFileType] = useState(null);
  const inputRef = useRef(null);
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import GetDocument from "../../../UI/GetDocument";
import { MdHistory } from "react-icons/md";

const MainBox = ({ src, setSrc, setShowHistory, getImageHandler, type }) => {
  const inputRef = useRef(null);

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
      />

    </div>
  );
};

export default MainBox;
