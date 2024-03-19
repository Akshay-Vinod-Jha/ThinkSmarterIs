// import React from "react";
import Bottom from "../../UI/Bottom.jsx";
import MainBox from "./RequiredComponets/MainBox";
import TryThese from "./RequiredComponets/TryThese";
import classes from "./TextExtraction.module.css";
import { useState, useCallback } from "react";
import Output from "./RequiredComponets/Output";
import History from "../../UI/History";
import { MdError } from "react-icons/md";
import { useDispatch } from "react-redux";
import { showPopUp, hidePopUp } from "../../store/popupSlice";
import { getTextFromPdf } from "../../common-funtions/getTextFromPdf";
import { getTextFromImage } from "../../common-funtions/getTextFormImage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { readData } from "../../common-funtions/readData.jsx";
import { updateData } from "../../common-funtions/updateData.jsx";
import { MdCancel } from "react-icons/md";
import Copy from "../../UI/Copy.jsx";
import { getCanvas } from "../../common-funtions/getCanvas.jsx";

let pdfjsLib = window["pdfjs-dist/build/pdf"];
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js";

const TextExtraction = () => {
  const [src, setSrc] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [generatedText, setGeneratedText] = useState(
    "Generated Text will be Display Here"
  );
  const location = useLocation();
  const userId = location.state.userId;
  const [ispopup, setIsPopUp] = useState(false);
  const [isHistroyLoading, setIsHistoryLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const dispatch = useDispatch();

  const saveHistory = async (prompt, output) => {
    console.log(prompt, output);
    const obj = {
      prompt,
      output,
      time: new Date().toISOString(),
    };
    setHistory((history) => {
      return [obj, ...history];
    });
    await updateData(userId, {
      AIExtracta: [obj, ...history],
    });
  };

  const errorHandler = () => {
    dispatch(
      showPopUp({
        color: "#892330",
        bgColor: "#e5c2c2",
        title: "Something went Wrong!",
        description:
          "Provided Image Format is Not Supported, Try Another Image Format!",
        icon: <MdError color="#892330" fontSize="4rem" />,
      })
    );
    setSrc(null);
    setGeneratedText("Generated Text will be Display Here");
    setTimeout(() => {
      dispatch(hidePopUp());
    }, 5000);
  };

  const get = async (url, fileType) => {
    window.scrollTo(0, 400);
    setIsLoding(true);
    try {
      setSrc(url);
      let text = "";
      if (fileType === "application/pdf") {
        text = await getTextFromPdf(url);
        setGeneratedText(text.join("\n\n"));
        saveHistory(url, text.join("\n\n"));
      } else {
        text = await getTextFromImage(url);
        setGeneratedText(text);
        saveHistory(url, text);
      }
    } catch (err) {
      console.log(err.message);
      errorHandler();
    } finally {
      setIsLoding(false);
    }
  };

  const getImageHandler = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => get(reader.result, file.type);
  };

  const getPdfFirstPage = (url) => {
    pdfjsLib.getDocument(url).promise.then(async (pdfDoc) => {
      const page = await pdfDoc.getPage(1);
      const canvas = await getCanvas(page);
      canvas.style.height = "100%";
      canvas.style.width = "100%";
      const canvasContainer = document.getElementById("canvas");
      canvasContainer.innerHTML = "";
      canvasContainer.appendChild(canvas);
    });
  };
  const popupHandler = (ind, arr) => {
    const top = arr[ind].prompt.split(";")[0].includes("image") ? (
      <img src={arr[ind].prompt} />
    ) : (
      <div id="canvas">{getPdfFirstPage(arr[ind].prompt)}</div>
    );

    return (
      <div className={classes.popup}>
        <MdCancel
          className={classes.cancel}
          fontSize={"2rem"}
          onClick={() => setIsPopUp(false)}
        />
        <div>
          <p className={classes.heading}>Input</p>
          <div id="image" className={classes.img}>
            {top}
          </div>
        </div>
        <div className={classes.right}>
          <p className={classes.heading}>
            Extracted Text <Copy size=".9rem" text={arr[ind].output} />
          </p>
          <p>{arr[ind].output}</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await readData(userId);
      setHistory(data["AIExtracta"] ? data["AIExtracta"] : []);
      setIsHistoryLoading(false);
    };
    setIsHistoryLoading(true);
    fetchHistory();
  }, []);
  return (
    <div className={classes.VisionVerbalizer}>
      <div className={classes.upper}>
        <MainBox
          src={src}
          setSrc={setSrc}
          setShowHistory={setShowHistory}
          getImageHandler={getImageHandler}
        />
<<<<<<< HEAD
        {/* <History
          height="650px"
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          history={Array(5).fill(
            "The Generated text History from the uploaded image is displayed here."
          )}
        /> */}
=======
        <History
          height="95vh"
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          history={history}
          popupHandler={popupHandler}
          showPopUp={setIsPopUp}
          popup={ispopup}
          isHistroyLoading={isHistroyLoading}
        />
>>>>>>> 62e70018569f3375778880805f595cbac29f0cf3
      </div>
      <Output isLoading={isLoading}>{generatedText}</Output>
      <div className={classes.lower}>
        <TryThese getImageHandler={getImageHandler} />
      </div>
      <Bottom label="Go to All tools" navigateTo=".." userId={userId} />
    </div>
  );
};

export default TextExtraction;
