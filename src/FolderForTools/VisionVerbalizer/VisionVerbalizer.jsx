// import React from "react";
import MainBox from "./RequiredComponents/MainBox";
import TryThese from "./RequiredComponents/TryThese";
import classes from "./VisionVerbalizer.module.css";
import { useEffect, useState, useCallback } from "react";
import { HfInference } from "@huggingface/inference";
import Output from "./RequiredComponents/Output";
import History from "../../UI/History";
import PopUp from '../../UI/PopUp';
import { createPortal } from "react-dom";
const HF_TOKEN = "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";
import { MdError } from "react-icons/md";


const VisionVerbalizer = () => {
  const [src, setSrc] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [generatedText, setGeneratedText] = useState(
    "Generated Text will be Display Here"
  );
  const [isLoading,setIsLoding] = useState(false)
  const [error,setError] = useState(null)

  const get = useCallback(async (temp) => {
    setIsLoding(true)
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
      setError("Provided Image Format is Not Supported, Try Another Image Format!")
      // setTimeout(()=>{
      //   setError(null)
      // },3000)
    } finally {
      setIsLoding(false)
    }
  }, []);

  useEffect(() => {
    src && get(src);
  }, [get, src]);

  return (
    <div className={classes.VisionVerbalizer}>
      {error && createPortal(<PopUp  closePopUp={()=>setError(null)} color={"#892330"} bgColor={"#e5c2c2"} title="Something went Wrong!" description={error} icon={<MdError color={"#892330"} fontSize={"4rem"} />} />,document.getElementById('popup'))}
      <div className={classes.upper}>
        <MainBox src={src} updateSrc={setSrc} setShowHistory={setShowHistory} />
        <History
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
