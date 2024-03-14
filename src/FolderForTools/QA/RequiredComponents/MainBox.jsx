import classes from "./MainBox.module.css";
import { CiImageOn } from "react-icons/ci";
import OrangeButton from "../../../UI/OrangeButton";
import { useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const TextArea = () => {
  const contextRef = useRef();
  return (
    <textarea
      ref={contextRef}
      rows={19}
      placeholder="Enter The Paragraph"
      className={classes.QAteatarea}
    />
  );
};

const GetDocument = () => {
  const [src, setSrc] = useState(null);

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
      onPaste={(e) => getImageHandler(e.clipboardData.files[0])}>
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
            accept="image/*"
          />
        </div>
      </div>
    </div>
  );
};

const MainBox = () => {
  const [display, setDipslay] = useState("textarea");

  const curret = { textarea: <TextArea />, getDocument: <GetDocument /> };

  return (
    <div>
      <div className={classes["navigation-container"]}>
        <div
          className={`${classes.navigation} ${display === "textarea" && classes.current}`}
          onClick={() => {
            if (display !== "textarea") {
              setDipslay("textarea");
            }
          }}>
          Via Paragraph
        </div>
        <div
          className={`${classes.navigation} ${display === "getDocument" && classes.current}`}
          onClick={() => {
            if (display !== "getDocument") {
              setDipslay("getDocument");
            }
          }}>
          Via Document
        </div>
      </div>
      {curret[display]}
    </div>
  );
};

export default MainBox;
