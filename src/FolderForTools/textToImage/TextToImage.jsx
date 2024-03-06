import { useState, useRef, useCallback } from "react";
import { FaRepeat, FaWandMagicSparkles } from "react-icons/fa6";
import { MdDownloading } from "react-icons/md";
import cssClasses from "./TextToImage.module.css";
import TryThese from "./RequiredComponents/TryThese";
import MainBox from "./RequiredComponents/MainBox";
import OrangeButton from "../../UI/OrangeButton";
import PromptInputField from "../../UI/PromptInputField";
import History from "../../UI/History";
import { CiImageOn } from "react-icons/ci";
import Loading from "../../UI/Loading";
import { HfInference } from "@huggingface/inference";
import { createPortal } from "react-dom";
import PopUp from "../../UI/PopUp.jsx";
import { MdError } from "react-icons/md";
import Loader from "../../UI/Loader.jsx";
import { MdHistory } from "react-icons/md";

function TextToImage() {
  const HF_TOKEN = "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";
  const [src, setSrc] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [isLoading, setIsLoding] = useState(false);
  const [error, setError] = useState(null);
  const promptInputRef = useRef(null);

  const get = useCallback(async (temp) => {
    setIsLoding(true);
    try {
      const inference = new HfInference(HF_TOKEN);
      const data = await inference.textToImage({
        model: "runwayml/stable-diffusion-v1-5",
        inputs: `a High Quality and High Resolution image of ${temp}`,
        parameters: {
          negative_prompt: "high quality, high resolution",
        },
      });
      let reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        setSrc(reader.result);
      };
    } catch {
      setError("Failed to Generate Image");
      setTimeout(() => setError(null), 3000);
    } finally {
      setIsLoding(false);
    }
  }, []);

  const content = src ? (
    <img
      src={src}
      alt="Generated Image"
      className={cssClasses.generatedImage}
    />
  ) : (
    <CiImageOn
      color="rgba(255,255,255,.5)"
      fontSize="clamp(20rem,25vw,30rem)"
    />
  );
  return (
    //   {/* //outemost */}
    <div
      className={
        cssClasses.textToImageContainer +
        "  w-[99vw] h-auto lg:h-[120vh] min-h-screen bg-[#1E1E1E] grid grid-cols-1 grid-rows-3 md:grid-rows-3 lg:grid-rows-4 gap-2 p-1 md:p-2 lg:p-3 xl:p-4"
      }
    >
      {error &&
        createPortal(
          <PopUp
            closePopUp={() => setError(null)}
            color={"#892330"}
            bgColor={"#e5c2c2"}
            title="Something went Wrong!"
            description={error}
            icon={<MdError color={"#892330"} fontSize={"4rem"} />}
          />,
          document.getElementById("popup")
        )}
      {/* firstChild */}
      <div className="bg-black row-span-2  md:row-span-2 lg:row-span-3 rounded-xl grid grid-cols-4 gap-4 p-2">
        {/* 1c */}
        <div className="col-span-4 p-1 lg:col-span-3 bg-[black] rounded-xl grid grid-cols-1">
          <div className="bg-transparent rounded-xl flex flex-col gap-2 justify-evenly items-center font-mono font-extrabold tracking-widest text-base text-[#728894]">
            <div className={cssClasses.titleContainer}>
              <h1 className="ml-2 w-max text-2xl border-b-2 hover:border-none  border-[#728894]">
                Visiualize AI
              </h1>
              <MdHistory
                color="#728894"
                fontSize="2rem"
                className={cssClasses.history}
                onClick={() => setShowHistory(true)}
              />
            </div>
            <div className="w-[100%] p-1 lg:p-3 bg-black rounded-xl grid grid-col-1 gap-4 lg:grid-cols-4">
              <PromptInputField
                placeholder="Enter Propmt Here..."
                type="text"
                ref={promptInputRef}
              />
              <div className="w-full lg:col-span-1 rounded-md text-white flex justify-center items-center">
                <OrangeButton onClick={() => get(promptInputRef.current.value)}>
                  {isLoading && <Loader />}Generate Image
                  {!isLoading && <FaWandMagicSparkles />}
                </OrangeButton>
              </div>
            </div>
            <div className={cssClasses.generatedImageContainer}>
              {isLoading ? (
                <div className={cssClasses.loadingContainer}>
                  <Loading />
                  <p>Generating Image...</p>
                </div>
              ) : (
                content
              )}
            </div>
            <div className="w-full p-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:place-items-start">
              <h1 className="flex justify-center items-center gap-1 hover:text-white">
                Regenerate Image
                <FaRepeat />
              </h1>
              <div className="w-[100%] col-span-1  lg:w-[50%]  lg:place-self-end p-1 rounded-md flex justify-center items-center">
                <OrangeButton>
                  Export
                  <MdDownloading />
                </OrangeButton>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div
          className={
            cssClasses.textToImageContainer +
            "   lg:flex col-span-1 no-scrollbar  border-4 border-[#1E1E1E] overflow-auto bg-[#1E1E1E] rounded-xl"
          }
        >
          <History
            showHistory={showHistory}
            setShowHistory={setShowHistory}
            history={Array(5).fill(
              "The Generated text History from the uploaded image is displayed here."
            )}
          />
        </div>
      </div>
      <div className="bg-black rounded-xl flex flex-col justify-center items-center p-2">
        <div className="w-full h-full p-2">
          <TryThese />
          <MainBox />
        </div>
      </div>
    </div>
  );
}

export default TextToImage;
