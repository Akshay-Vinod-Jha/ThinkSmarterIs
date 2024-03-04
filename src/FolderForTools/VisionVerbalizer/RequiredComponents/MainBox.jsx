import { useRef } from "react";
import OrangeButton from "../../../UI/OrangeButton";
import { CiImageOn } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
import classes from "./MainBox.module.css";
// import Loader from '../../../UI/Loader'
const MainBox = ({ src, updateSrc }) => {
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
      <h1 className={classes.title}>Vision Verbalizer</h1>
      <div
        className={classes.getImage}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => getImageHandler(e.dataTransfer.files[0])}
        onPaste={(e) => getImageHandler(e.clipboardData.files[0])}
      >
        <div className={classes.receiveImage}>{content}</div>
        <div className={classes.get}>
          <h3 className={classes.getImageHeading}>
            Drag and Drop, Upload or Paste image
          </h3>
          <p className={classes.upload}>Upload one image at a time</p>
          <div className={classes.browse}>
            <OrangeButton onClick={() => inputRef.current.click()}>
              {/* <Loader/> */}
              Browse
              <FaCloudUploadAlt color="white" fontSize="1.5rem" />
            </OrangeButton>
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={(e) => getImageHandler(e.target.files[0])}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
