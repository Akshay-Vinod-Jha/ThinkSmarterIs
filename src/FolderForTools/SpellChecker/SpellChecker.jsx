import React, { useEffect, useRef, useState } from "react";
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
        ></MainParentErrorBox>
      )}
      {correctone && (
        <ShowingCorrectOne sentence={sentence}></ShowingCorrectOne>
      )}
    </div>
  );
}

export default SpellChecker;
