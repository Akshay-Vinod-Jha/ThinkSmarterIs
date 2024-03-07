import React, { useEffect, useRef, useState } from "react";
import ToolsTitle from "../../UI/ToolsTitle";
import PromptInputField from "../../UI/PromptInputField";
import { LuMonitorCheck } from "react-icons/lu";
import OrangeButton from "../../UI/OrangeButton";
import WhiteButton from "../../UI/WhiteButton";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import Copy from "../../UI/Copy";

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
  const [color, setColor] = useState([false, "#728894"]);
  const [v, setV] = useState(true);
  const [correctone, setCorrectedOne] = useState(false);
  const [sentence, setSentence] = useState("");
  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("SpellChecker")).edits);
  }, []);
  const callMe = (temp) => {
    state.map((value) => {
      let result = "";
      for (let j = value.start; j < value.end; j++) {
        result = result + value.sentence[j];
      }
      temp = temp.replace(result, value.replacement);
      return [result, value.replacement];
    });
    setSentence(temp);
  };
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
            className="absolute  rounded-xl flex justify-center  font-lexend  items-center bg-[#728894] text-[#fc0001]"
            style={{
              top: location.y - 100 + "px",
              left: location.x + "px",
              transform: "translateX(-50%)",
            }}
          >
            <div className="w-full h-full relative font-extrabold p-4 text-sm md:text-base lg:text-lg xl:text-lg">
              {location.text}{" "}
              <div
                className="absolute top-[95%] left-[50%] -translate-x-[50%] bg-[#728894] w-10 h-4"
                style={{
                  clipPath: "polygon(0 0, 46% 100%, 100% 0)",
                }}
              ></div>
            </div>
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
                setShowBelow(false);
                setCorrectedOne(false);
                setColor([false, "#728894"]);
                setV(true);
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
                setShowBelow(false);
                setCorrectedOne(false);
                setColor([false, "#728894"]);
                setV(true);
              }}
            >
              <FaForward></FaForward>
            </WhiteButton>
          </div>
        </div>
      </div>
      {showBelow && (
        <div className="mt-4 w-[100%] lg:w-[92.5%] p-2 rounded-xl lg:ml-4 flex flex-col justify-center items-center text-white bg-[#1E1E1E]">
          {[
            ["General Error Type", content.general_error_type],
            ["Replacement String ", content.replacement],
          ].map((value, index) => {
            return (
              <div
                className="w-full text-base md:text-base  pb-2 lg:text-lg font-lexend px-1   grid grid-cols-1 md:grid-cols-2 place-content-center items-start gap-2 md:justify-between md:gap-0"
                style={{
                  borderBottom: index === 0 ? ".10rem solid #72889435" : "none",
                }}
              >
                <h1 className="w-full font-extrabold pt-2">
                  {value[0]}
                  <span className="inline lg:hidden"> :-</span>
                </h1>
                <h1 className="w-full text-[#fc0001] pt-4 pb-2">{value[1]}</h1>
              </div>
            );
          })}
          {v && (
            <h1 className="w-full  flex justify-start items-start text-left px-1 py-2 text-sm md:text-sm lg:text-sm font-lexend text-[#728894]">
              Do You Want To Fix All Error's?
              <FaThumbsUp
                className="ml-2 text-base"
                style={{
                  color: color[0] ? color[1] : "#728894",
                }}
                onClick={() => {
                  setColor([true, "yellow"]);
                  callMe(state[0].sentence);
                  setCorrectedOne(true);
                  setTimeout(() => {
                    setV(true);
                  }, 500);
                }}
              ></FaThumbsUp>
              <FaThumbsDown
                className="ml-2 text-base"
                style={{
                  color: !color[0] ? color[1] : "#728894",
                }}
                onClick={() => {
                  setColor([false, "yellow"]);
                  setTimeout(() => {
                    setV(false);
                    setCorrectedOne(false);
                  }, 500);
                }}
              ></FaThumbsDown>
            </h1>
          )}
        </div>
      )}
      {correctone && (
        <div className="mt-4 w-[100%] mb-4 text-base md:text-lg lg:text-xl font-lexend lg:w-[92.5%] p-2 rounded-xl lg:ml-4 flex flex-col justify-center items-center text-white bg-[#1E1E1E]">
          <h1 className="w-full flex justify-center text-center items-center">
            {"'" + sentence + "'"}
          </h1>
          <div className="w-max flex self-end justify-end items-center border-2 border-[#ffffff57] rounded-xl mt-4">
            <Copy text={sentence}></Copy>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpellChecker;
