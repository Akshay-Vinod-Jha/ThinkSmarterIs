import React from "react";
import { FaRepeat, FaWandMagicSparkles } from "react-icons/fa6";
import { MdDownloading } from "react-icons/md";
import cssClasses from "./TextToImage.module.css";
import TryThese from "./RequiredComponents/TryThese";
import HistoryBox from "./RequiredComponents/HistoryBox";
import MainBox from "./RequiredComponents/MainBox";
import OrangeButton from "../../UI/OrangeButton";
function TextToImage() {
  return (
    //   {/* //outemost */}
    <div
      className={
        cssClasses.textToImageContainer +
        "  w-[99vw] h-auto lg:h-[120vh] min-h-screen bg-[#1E1E1E] grid grid-cols-1 grid-rows-3 md:grid-rows-3 lg:grid-rows-4 gap-2 p-1 md:p-2 lg:p-3 xl:p-4"
      }
    >
      {/* firstChild */}
      <div className="bg-black row-span-2  md:row-span-2 lg:row-span-3 rounded-xl grid grid-cols-4 gap-4 p-2">
        {/* 1c */}
        <div className="col-span-4 p-1 lg:col-span-3 bg-[black] rounded-xl grid grid-cols-1">
          <div className="bg-transparent p-1 rounded-xl flex flex-col gap-2 justify-evenly items-center font-mono font-extrabold tracking-widest text-base text-[#728894]">
            <h1 className="ml-4 w-max place-self-start text-2xl border-b-2 hover:border-none  border-[#728894]">
              Visiualize AI
            </h1>
            <div className="w-[100%] p-1 lg:p-3 bg-black rounded-xl grid grid-col-1 gap-4 lg:grid-cols-4">
              <input
                type="text"
                name=""
                id=""
                className="w-[100%] lg:col-span-3 bg-[#1E1E1E] p-1 rounded-md px-4"
                autoFocus="true"
                placeholder="Enter Propmt Here..."
              />
              <div className="w-full lg:col-span-1 rounded-md text-white flex justify-center items-center">
                <OrangeButton>
                  Generate Image<FaWandMagicSparkles></FaWandMagicSparkles>
                </OrangeButton>
              </div>
            </div>
            <div className="w-full rounded-xl bg-black flex justify-center items-center p-2">
              <img
                src="https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg"
                alt=""
                className="w-[100%] md:w-[75%] lg:w-[50%] rounded-xl object-contain"
              />
            </div>
            <div className="w-full p-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:place-items-start">
              <h1 className="flex justify-center items-center gap-1 hover:text-white">
                Regenerate Image<FaRepeat></FaRepeat>
              </h1>
              <div className="w-[100%] col-span-1  lg:w-[50%]  lg:place-self-end p-1 rounded-md flex justify-center items-center">
                <OrangeButton>
                  {" "}
                  Export<MdDownloading></MdDownloading>
                </OrangeButton>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div
          className={
            cssClasses.textToImageContainer +
            "  hidden lg:flex col-span-1 no-scrollbar  border-4 border-[#1E1E1E] overflow-auto bg-[#1E1E1E] rounded-xl"
          }
        >
          <div className="w-full h-full no-scrollbar text-[#728894] gap-2 font-mono font-extrabold text-base tracking-widest bg-transparent flex flex-col justify-center items-center p-2">
            <h1 className="ml-2 hover:border-none w-max place-self-start text-2xl border-b-2  border-[#728894] mb-4">
              History
            </h1>
            <div
              className={
                cssClasses.textToImageContainer +
                "  w-full h-[80%] no-scrollbar flex flex-col gap-2"
              }
            >
              {Array(15)
                .fill(13)
                .map((value, index) => {
                  return (
                    <HistoryBox key={index}>
                      {Math.random().toString()}
                    </HistoryBox>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black rounded-xl flex flex-col justify-center items-center p-2">
        <div className="w-full h-full p-2">
          <TryThese></TryThese>
          <MainBox></MainBox>
        </div>
      </div>
    </div>
  );
}

export default TextToImage;
