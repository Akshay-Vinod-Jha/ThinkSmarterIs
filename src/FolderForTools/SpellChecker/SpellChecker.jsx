import React, { useEffect, useRef, useState } from "react";
import ToolsTitle from "../../UI/ToolsTitle";
import PromptInputField from "../../UI/PromptInputField";
import { LuMonitorCheck } from "react-icons/lu";
import OrangeButton from "../../UI/OrangeButton";
import WhiteButton from "../../UI/WhiteButton";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
function SpellChecker() {
  const sentenceRef = useRef();
  const [state, setState] = useState([
    { sentence: "", start: 0, end: 0 },
    { sentence: "", start: 0, end: 0 },
  ]);
  const [location, setLocation] = useState({ text: "", x: 0, y: 0 });
  const [display, setDisplay] = useState(false);
  const [index, setIndex] = useState(0);
  const [showBelow, setShowBelow] = useState(false);
  const [content, setContent] = useState([]);
  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("SpellChecker")).edits);
  }, []);
  return (
    <div className="w-screen p-2 mt-4 grid grid-cols-1 place-content-center place-items-center">
      {/* first Title */}
      <ToolsTitle>Spell Checker</ToolsTitle>
      {/* input box */}
      <div className="w-full flex lg:flex-row mt-4 flex-col gap-2 lg:gap-0 justify-evenly  lg:pl-4  items-center">
        <div className="lg:w-[70%] w-[100%] text-base md:text-base lg:text-lg xl:text-lg">
          <PromptInputField
            placeholder="Enter Sentence Here"
            type="text"
            ref={sentenceRef}
          ></PromptInputField>
        </div>
        <div className="lg:w-[20%] flex justify-end items-end h-full w-[50%] text-base md:text-base lg:text-lg xl:text-lg">
          <OrangeButton
            onClick={() => {
              console.log(sentenceRef.current.value);
            }}
          >
            Check It
            <LuMonitorCheck className="text-base md:text-lg lg:text-xl"></LuMonitorCheck>
          </OrangeButton>
        </div>
      </div>
      {/* error box */}
      <div className="mt-4 w-[100%] lg:w-[92.5%] p-2 rounded-xl lg:ml-4 flex flex-col justify-center items-center bg-[#1E1E1E]">
        {/* error message */}
        <div>
          {state[index].sentence.split("").map((value, cindex) => {
            return cindex >= state[index].start &&
              cindex <= state[index].end ? (
              <span
                className="text-white font-lexend underline decoration-wavy decoration-red-600 underline-offset-2 md:underline-offset-8 text-base md:text-base lg:text-lg"
                onMouseOver={(e) => {
                  console.log("hii", e.clientX, e.clientY);
                  setLocation({
                    text: state[index].error_type,
                    x: e.clientX,
                    y: e.clientY,
                  });
                  setDisplay(true);
                }}
                onClick={() => {
                  setShowBelow((previousState) => {
                    return !previousState;
                  });
                  console.log(state[index]);
                  setContent(state[index]);
                }}
                onMouseOut={(e) => {
                  console.log("hello");
                  setDisplay(false);
                }}
                key={cindex}
              >
                {value}
              </span>
            ) : (
              <span
                className="text-white font-lexend text-base md:text-base lg:text-lg"
                key={cindex}
              >
                {value}
              </span>
            );
          })}
        </div>
        {display && (
          <div
            className="absolute p-4 rounded-xl flex justify-center text-base md:text-base lg:text-lg xl:text-lg font-lexend  items-center bg-[#fc0001]"
            style={{
              top: location.y - 100 + "px",
              left: location.x + "px",
            }}
          >
            {location.text}
          </div>
        )}
        <div className="w-full mt-4 px-2 md:px-4 flex flex-row justify-between items-center">
          <div className="w-max">
            <OrangeButton
              onClick={() => {
                if (index === 0) {
                  setIndex(state.length - 1);
                } else {
                  setIndex((previousIndex) => {
                    return previousIndex - 1;
                  });
                }
              }}
            >
              <FaBackward></FaBackward>
            </OrangeButton>
          </div>
          <div className="w-max">
            <WhiteButton
              onClick={() => {
                if (index === state.length - 1) {
                  setIndex(0);
                } else {
                  setIndex((previousIndex) => {
                    return previousIndex + 1;
                  });
                }
              }}
            >
              <FaForward></FaForward>
            </WhiteButton>
          </div>
        </div>
      </div>
      {showBelow && (
        <div className="mt-4 w-[100%] lg:w-[92.5%] p-2 rounded-xl lg:ml-4 flex flex-col justify-center items-center text-white bg-[#1E1E1E]">
          {content.general_error_type}
          {content.replacement}
        </div>
      )}
    </div>
  );
}

export default SpellChecker;
