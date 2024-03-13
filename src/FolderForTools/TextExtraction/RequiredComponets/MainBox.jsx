import { useRef } from "react";
import OrangeButton from "../../../UI/OrangeButton";
import { CiImageOn } from "react-icons/ci";
import classes from "./MainBox.module.css";
// import Loader from '../../../UI/Loader'
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";

import { MdHistory } from "react-icons/md";

const MainBox = ({ src, setShowHistory, getImageHandler, type }) => {
  console.log(type);
  const inputRef = useRef(null);

  const content =
    src && type === "image" ? (
      <img className={classes.image} src={src} alt="input image" />
    ) : type === "application/pdf" ? (
      <FaRegFilePdf
        color="rgba(255,255,255,.5)"
        fontSize="clamp(15rem,20vw,20rem)"
      />
    ) : (
      <CiImageOn
        color="rgba(255,255,255,.5)"
        fontSize="clamp(20rem,25vw,30rem)"
      />
    );

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
      <div
        className={classes.getImage}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => getImageHandler(e.dataTransfer.files[0])}
        onPaste={(e) => getImageHandler(e.clipboardData.files[0])}
      >
        <div className={classes.receiveImage}>{content}</div>
        <div className={classes.get}>
          <h3 className={classes.getImageHeading}>
            Drag and Drop, Upload or Paste image and PDF
          </h3>
          <p className={classes.upload}>Upload one image at a time</p>
          <div className={classes.browse}>
            <OrangeButton onClick={() => inputRef.current.click()}>
              <MdOutlineFileUpload color="white" fontSize="1.5rem" />
              Click to Upload
            </OrangeButton>
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={(e) => {
                console.log(e);
                getImageHandler(e.target.files[0]);
              }}
              accept="image/*,.pdf"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
