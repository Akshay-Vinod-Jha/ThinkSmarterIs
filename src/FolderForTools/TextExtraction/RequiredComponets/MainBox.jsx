import { useRef } from "react";
import OrangeButton from "../../../UI/OrangeButton";
import { CiImageOn } from "react-icons/ci";
import classes from "./MainBox.module.css";
// import Loader from '../../../UI/Loader'
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import GetDocument from "../../../UI/GetDocument";
import { MdHistory } from "react-icons/md";

const MainBox = ({ src, setSrc, setShowHistory, getImageHandler, type }) => {
  // console.log(type);
  const inputRef = useRef(null);

  // const content =
  //   src && type === "image" ? (
  //     <img className={classes.image} src={src} alt="input image" />
  //   ) : type === "application/pdf" ? (
  //     <FaRegFilePdf
  //       color="rgba(255,255,255,.5)"
  //       fontSize="clamp(15rem,20vw,20rem)"
  //     />
  //   ) : (
  //     <CiImageOn
  //       color="rgba(255,255,255,.5)"
  //       fontSize="clamp(20rem,25vw,30rem)"
  //     />
  //   );

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
      <GetDocument src={src} setSrc={setSrc} />
    </div>
  );
};

export default MainBox;
