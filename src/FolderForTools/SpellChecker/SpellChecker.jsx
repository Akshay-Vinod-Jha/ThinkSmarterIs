import { useEffect, useRef, useState } from "react";
import ToolsTitle from "../../UI/ToolsTitle";
import ShowingCorrectOne from "./ShowingCorrectOne";
import MainParentErrorBox from "./MainParentErrorBox";
import MainErrorMessageDescriberParent from "./MainErrorMessageDescriberParent";
import PromptAndButton from "./PromptAndButton";
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
  const updateTheColor = (received) => {
    setColor([...received]);
  };
  const updateShowBelow = (received) => {
    setShowBelow(received);
  };
  const updateTheCorrectedOne = (received) => {
    setCorrectedOne(received);
  };
  const updateTheV = (received) => {
    setV(received);
  };
  const updateTheIndex = (updatedIndexIs) => {
    setIndex(updatedIndexIs);
  };
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
      <ToolsTitle>Spell Checker</ToolsTitle>
      {/* input box */}
      <div className="w-full flex lg:flex-row mt-4 flex-col gap-2 lg:gap-0 justify-evenly  lg:pl-4  items-center">
        <div className="lg:w-[70%] w-[100%] text-base md:text-base lg:text-lg xl:text-lg">
          <PromptInputField
            placeholder="Enter Sentence Here"
            type="text"
            ref={sentenceRef}
          />
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
                key={`span${cindex}`}
                className="text-white cursor-pointer font-lexend underline decoration-wavy decoration-red-600 underline-offset-2 md:underline-offset-8 text-base md:text-base lg:text-lg"
                onMouseOver={(e) => {
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
                  setContent(state[index]);
                }}
                onMouseOut={(e) => {
                  setDisplay(false);
                }}
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
        {display && <ErrorTypeIndicator location={location} />}
        <PrevNextContainer
          index={index}
          setIndex={setIndex}
          state={state}
          updateTheColor={updateTheColor}
          updateTheV={updateTheV}
          updateShowBelow={updateShowBelow}
          updateTheCorrectedOne={updateTheCorrectedOne}
        />
      </div>
      <PromptAndButton sentenceRef={sentenceRef} ref={sentenceRef} />
      <MainErrorMessageDescriberParent
        display={display}
        state={state}
        index={index}
        setLocation={setLocation}
        setDisplay={setDisplay}
        setShowBelow={setShowBelow}
        setContent={setContent}
        location={location}
        setIndex={setIndex}
        updateTheColor={updateTheColor}
        updateTheV={updateTheV}
        updateShowBelow={updateShowBelow}
        updateTheCorrectedOne={updateTheCorrectedOne}
      />

      {showBelow && (
        <MainParentErrorBox
          content={content}
          color={color}
          updateTheColor={updateTheColor}
          state={state}
          v={v}
          callMe={callMe}
          updateTheCorrectedOne={updateTheCorrectedOne}
          updateTheV={updateTheV}
        />
      )}
      {correctone && <ShowingCorrectOne sentence={sentence} />}
    </div>
  );
}

export default SpellChecker;
