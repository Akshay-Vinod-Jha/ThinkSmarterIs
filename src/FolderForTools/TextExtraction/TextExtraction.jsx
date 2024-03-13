// import React from "react";
import MainBox from "./RequiredComponets/MainBox";
import TryThese from "./RequiredComponets/TryThese";
import classes from "./TextExtraction.module.css";
import { useState, useCallback } from "react";
import Output from "./RequiredComponets/Output";
import History from "../../UI/History";
import { MdError } from "react-icons/md";
import { useDispatch } from "react-redux";
import { showPopUp, hidePopUp } from "../../store/popupSlice";
const TextExtraction = () => {
  const [src, setSrc] = useState(null);
  const [type, setType] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [generatedText, setGeneratedText] = useState(
    "Generated Text will be Display Here"
  );
  const [isLoading, setIsLoding] = useState(false);
  const dispatch = useDispatch();

  const get = useCallback(async (file) => {
    console.log(file.url)
    window.scrollTo(0, 400);
    setIsLoding(true);

    const apiKey = "K86779100088957"; // Replace with your actual API key
    const base64Image = file.url; // Replace with your Base64 encoded image or PDF

    const optionalParameters = {
      language: "eng", // Language code
      isOverlayRequired: true, // Return bounding box coordinates
      filetype: file.type.split("/")[1].toUpperCase(), // Overwrite automatic file type detection
      detectOrientation: true, // Auto-rotate the image
      isCreateSearchablePdf: true, // Generate a searchable PDF
      isSearchablePdfHideTextLayer: false, // Hide text layer in searchable PDF
      scale: true, // Upscale the image
      isTable: true, // Ensure line by line text result
      OCREngine: 2, // Use OCR Engine 2
    };
    const formData = new FormData();
    formData.append("base64Image", base64Image);
    Object.keys(optionalParameters).forEach((key) => {
      formData.append(key, optionalParameters[key]);
    });
    try {
      const url = "https://api.ocr.space/parse/image";
      const req = new Request(url, {
        method: "POST",
        headers: {
          apikey: apiKey,
        },
        body: formData,
      });
      const response = await fetch(req);
      const jsonData = await response.json();
      console.log(jsonData)
      setGeneratedText(
        jsonData.ParsedResults.map((val) => val.ParsedText).join("\n\n")
      );
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
      setSrc(null);
      setGeneratedText("Generated Text will be Display Here");
      setTimeout(() => {
        dispatch(hidePopUp());
      }, 5000);
    } finally {
      setIsLoding(false);
    }
  }, []);

  const getImageHandler = async (file) => {
    setType(file.type);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSrc(reader.result);
      get({ type: file.type, name: file.name, url: reader.result });
    };
  };

  return (
    <div className={classes.VisionVerbalizer}>
      <div className={classes.upper}>
        <MainBox
          src={src}
          setShowHistory={setShowHistory}
          getImageHandler={getImageHandler}
          type={type}
        />
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
        <TryThese getImageHandler={getImageHandler} />
      </div>
    </div>
  );
};

export default TextExtraction;
