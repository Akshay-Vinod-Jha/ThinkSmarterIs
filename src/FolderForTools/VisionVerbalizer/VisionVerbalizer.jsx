// import React from "react";
import MainBox from "./RequiredComponents/MainBox";
import TryThese from "./RequiredComponents/TryThese";
import classes from "./VisionVerbalizer.module.css";
import { useEffect, useState, useCallback } from "react";
import { HfInference } from "@huggingface/inference";
import Output from "./RequiredComponents/Output";
import History from "../../UI/History";
import { MdError } from "react-icons/md";
import { useDispatch } from "react-redux";
import { showPopUp, hidePopUp } from "../../store/popupSlice";
const HF_TOKEN = "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";

const VisionVerbalizer = () => {
  const [src, setSrc] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [generatedText, setGeneratedText] = useState(
    "Generated Text will be Display Here"
  );
  const [isLoading, setIsLoding] = useState(false);
  const dispatch = useDispatch();

  const get = useCallback(async (temp) => {
    setIsLoding(true);
    try {
      window.scrollTo(0, 400);
      const response = await fetch(temp);
      const blobimage = await response.blob(response);
      const inference = new HfInference(HF_TOKEN);
      const data = await inference.imageToText({
        data: blobimage,
        model: "Salesforce/blip-image-captioning-large",
      });
      setGeneratedText(data.generated_text);
    } catch (err) {
      console.log(err.message);
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
      setTimeout(() => {
        dispatch(hidePopUp());
      }, 5000);
    } finally {
      setIsLoding(false);
    }
  }, []);

  useEffect(() => {
    src && get(src);
  }, [get, src]);

  return (
    <div className={classes.VisionVerbalizer}>
      <div className={classes.upper}>
        <MainBox src={src} updateSrc={setSrc} setShowHistory={setShowHistory} />
        <History
          height="650px"
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          history={Array(5).fill(
            "The Generated text History from the uploaded image is displayed here."
          )}
        />
      </div>
      <Output isLoading={isLoading}>{generatedText}</Output>
      <div className={classes.lower}>
        <TryThese updateSrc={setSrc} />
      </div>
    </div>
  );
};

export default VisionVerbalizer;
