import { useRef } from "react";
import OrangeButton from "../../../UI/OrangeButton";
import { CiImageOn } from "react-icons/ci";
import classes from "./MainBox.module.css";
// import Loader from '../../../UI/Loader'
import { MdOutlineFileUpload } from "react-icons/md";

import { MdHistory } from "react-icons/md";

const MainBox = ({ src, updateSrc, setShowHistory }) => {
  const inputRef = useRef(null);
  const getImageHandler = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      updateSrc(reader.result);
    };
  };

  const content = src ? (
    <img className={classes.image} src={src} alt="input image" />
  ) : (
    <CiImageOn
      color="rgba(255,255,255,.5)"
      fontSize="clamp(20rem,25vw,30rem)"
    />
  );
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
      <div
        className={classes.getImage}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => getImageHandler(e.dataTransfer.files[0])}
        onPaste={(e) => getImageHandler(e.clipboardData.files[0])}>
        <div className={classes.receiveImage}>{content}</div>
        <div className={classes.get}>
          <h3 className={classes.getImageHeading}>
            Drag and Drop, Upload or Paste image
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
              onChange={(e) => getImageHandler(e.target.files[0])}
              accept="image/*"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
