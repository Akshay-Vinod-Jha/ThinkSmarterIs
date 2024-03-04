// import React from "react";
import MainBox from "./RequiredComponents/MainBox";
import History from "./RequiredComponents/History";
import TryThese from "./RequiredComponents/TryThese";
import classes from "./VisionVerbalizer.module.css";
import { useEffect, useState } from "react";
import { HfInference } from "@huggingface/inference";
import Output from './RequiredComponents/Output'
const HF_TOKEN = "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";

const VisionVerbalizer = () => {
  
  const [src, setSrc] = useState(null);
  const [generatedText,setGeneratedText] = useState('Generated Text will be Display Here');
  
  const get = async (temp) => {
    const response = await fetch(temp);
    const blobimage = await response.blob(response);
    const inference = new HfInference(HF_TOKEN);
    const data = await inference.imageToText({
      data: blobimage,
      model: "Salesforce/blip-image-captioning-large",
    });
    // console.log(data)
    setGeneratedText(data.generated_text)
  };

   useEffect(()=>{
      get(src)
   },[src])

  return (
    <div className={classes.VisionVerbalizer}>
      <div className={classes.upper}>
        <MainBox src={src} updateSrc={setSrc} />
        <History
          history={Array(15).fill(
            "The Generated text from the uploaded image is displayed here ."
          )}
        />
      </div>
      <Output>{generatedText}</Output>
      <div className={classes.lower}>
        <TryThese updateSrc={setSrc} />
      </div>
    </div>
  );
};

export default VisionVerbalizer;
