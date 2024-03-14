import { useState, useRef, useCallback } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
// import { MdDownloading } from "react-icons/md";
import cssClasses from "./TextToImage.module.css";
import TryThese from "./RequiredComponents/TryThese";
import MainBox from "./RequiredComponents/MainBox";
import OrangeButton from "../../UI/OrangeButton";
import PromptInputField from "../../UI/PromptInputField";
import History from "../../UI/History";
import { CiImageOn } from "react-icons/ci";
import Loading from "../../UI/Loading";
import { HfInference } from "@huggingface/inference";
import { MdError, MdDownloading } from "react-icons/md";
import Loader from "../../UI/Loader.jsx";
import { MdHistory } from "react-icons/md";
import { downloadImage } from "../../common-funtions/download.jsx";
import { useDispatch } from "react-redux";
import { hidePopUp, showPopUp } from "../../store/popupSlice.jsx";
import { TbDownload } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";

const HF_TOKEN = "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";

function TextToImage() {
  const dispatch = useDispatch();
  const [src, setSrc] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [isLoading, setIsLoding] = useState(false);
  const promptInputRef = useRef(null);

  const get = useCallback(async (prompt) => {
    window.scroll(0, 0);
    setIsLoding(true);
    try {
      const inference = new HfInference(HF_TOKEN);
      const data = await inference.textToImage({
        model: "playgroundai/playground-v2-1024px-aesthetic",
        inputs: `${prompt} ${Math.random()}`.trim(),
        negative_prompt: "blurry, ugly, noisy, poorly",
      });
      let reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => setSrc(reader.result);
    } catch (err) {
      console.log(err);
      dispatch(
        showPopUp({
          color: "#892330",
          bgColor: "#e5c2c2",
          title: "Something went Wrong!",
          description: "Failed to Generate Image",
          icon: <MdError color="#892330" fontSize="4rem" />,
        }),
      );
      promptInputRef.current.value = ``;
      setSrc(null);
      setTimeout(() => {
        dispatch(hidePopUp());
      }, 5000);
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
        "  w-[99vw] lg:h-[auto] min-h-screen bg-[#1E1E1E] grid grid-cols-1  gap-2 p-1 md:p-2 lg:p-3 xl:p-2"
      }>
      {/* firstChild */}

      <div className="bg-black h-[auto] row-span-2  md:row-span-2 lg:row-span-3 rounded-xl grid grid-cols-4 gap-2 p-2">
        {/* 1c */}
        <div className="col-span-4 md:col-span-3 p-1 lg:col-span-3  rounded-xl grid grid-cols-1">
          <div className="bg-transparent rounded-xl flex flex-col gap-2 justify-between items-center text-base text-[#728894]">
            <div className={cssClasses.titleContainer}>
              <h1 className="ml-2 w-max text-2xl border-b-2 hover:border-none  border-[#728894]">
                Visiualize AI
              </h1>
              <div className={cssClasses.iconCantainer}>
                {src && !isLoading && (
                  <TbDownload
                    onClick={() => downloadImage(src)}
                    color="#728894"
                    fontSize="2rem"
                    className={cssClasses.download}
                  />
                )}
                <MdHistory
                  color="#728894"
                  fontSize="2rem"
                  className={cssClasses.history}
                  onClick={() => setShowHistory(true)}
                />
              </div>
            </div>

            <div className={cssClasses.generatedImageContainer}>
              {isLoading ? (
                <Loading label="Generating Image..." size="50px" />
              ) : (
                content
              )}
            </div>

            <div className="w-[100%] lg:p-1 bg-black rounded-xl grid grid-col-1 gap-2 lg:grid-cols-4 items-end">
              <PromptInputField
                placeholder="what do you want to see here?"
                type="text"
                ref={promptInputRef}
              />
              <div className="w-full lg:col-span-1 rounded-md text-white flex-col justify-center items-center">
                {src && !isLoading && (
                  <div
                    className={cssClasses.regenerate}
                    onClick={() => get(promptInputRef.current.value)}>
                    <BsArrowRepeat fontSize={"1.5rem"} />
                    Regenerate image
                  </div>
                )}
                <OrangeButton
                  onClick={() => get(promptInputRef.current.value)}
                  isLoading={isLoading}>
                  {isLoading && <Loader />}
                  {isLoading ? "Generating..." : "Generate Image"}
                  {!isLoading && <FaWandMagicSparkles />}
                </OrangeButton>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd */}

        <History
          height="95vh"
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          history={Array(10).fill(
            "The Generated text History from the uploaded image is displayed here.",
          )}
        />
      </div>
      <div className="bg-black rounded-xl h-[fit-content]">
        <TryThese />
        <MainBox
          setPrompt={(prompt) => {
            promptInputRef.current.value = prompt;
            get(prompt);
          }}
        />
      </div>
    </div>
  );
}

export default TextToImage;
