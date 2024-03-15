import OrangeButton from "./OrangeButton";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { useState, useRef } from "react";
import classes from "./GetDocument.module.css";
const GetDocument = ({ src, setSrc }) => {
  const getImageHandler = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setSrc(reader.result);
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

  const inputRef = useRef();

  return (
    <div
      className={classes.getImage}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => getImageHandler(e.dataTransfer.files[0])}
      onPaste={(e) => getImageHandler(e.clipboardData.files[0])}
    >
      <div className={classes.receiveImage}>{content}</div>
      <div className={classes.get}>
        <h3 className={classes.getImageHeading}>
          Drag and Drop, Upload or Paste image and pdf
        </h3>
        <p className={classes.upload}>Upload one at a time</p>
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
            accept="image/*,.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default GetDocument;
