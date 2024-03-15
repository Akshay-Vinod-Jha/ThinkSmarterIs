import OrangeButton from "./OrangeButton";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { useState, useRef } from "react";
import { getCanvas } from "../common-funtions/getCanvas";
import classes from "./GetDocument.module.css";
let pdfjsLib = window["pdfjs-dist/build/pdf"];
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js";

const GetDocument = ({ src, setSrc }) => {
  const [filetype, setFileType] = useState(null);
  const getImageHandler = (document) => {
    setFileType(document.type);
    const reader = new FileReader();
    reader.readAsDataURL(document);
    reader.onloadend = () => {
      setSrc(reader.result);
    };
    // if (document.type === "application/pdf") {
    // }
  };

  const getPdfFirstPage = (url) => {
    pdfjsLib.getDocument(url).promise.then(async (pdfDoc) => {
      const page = await pdfDoc.getPage(1);
      const canvas = await getCanvas(page);
      canvas.style.height = "100%";
      canvas.style.width = "100%";
      document.getElementById("canvas").appendChild(canvas);
    });
  };

  const content = src ? (
    filetype === "application/pdf" ? (
      <div id="canvas" className={`${classes.image} ${classes.canvas}`}>
        {getPdfFirstPage(src)}
      </div>
    ) : (
      <img className={classes.image} src={src} alt="input image" />
    )
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
            accept="image/*,.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default GetDocument;
