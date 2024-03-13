import { useEffect, useRef, useState } from "react";
import ToolsTitle from "../../UI/ToolsTitle";
import ShowingCorrectOne from "./ShowingCorrectOne";
import MainParentErrorBox from "./MainParentErrorBox";
import MainErrorMessageDescriberParent from "./MainErrorMessageDescriberParent";
import PromptAndButton from "./PromptAndButton";
import { useDispatch } from "react-redux";
import { hidePopUp, showPopUp } from "../../store/popupSlice.jsx";
import { MdError } from "react-icons/md";
import History from "../../UI/History.jsx";
import { MdHistory } from "react-icons/md";
import cssClasses from "./SpellChecker.module.css";
import { TbBulb } from "react-icons/tb";
function SpellChecker() {
  const dispatch = useDispatch();
  const importantFun = async (text) => {
    setUnderlinedText(true);
    try {
      const response = await fetch("https://api.sapling.ai/api/v1/edits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: "SZ8UPZQ1YFFHDJRL3BPERB2OZ7GANIPY", // replace with your API key
          session_id: "test session",
          text,
        }),
      });
      const important = await response.json();
      console.log(important);
      if (important.edits.length === 0) {
        throw Error("Error Occurred");
      }
      setState(important.edits);

      setBhetla(true);
    } catch (err) {
      console.log(err);
      closeAll();
      dispatch(
        showPopUp({
          color: "#892330",
          bgColor: "#e5c2c2",
          title: "Something went Wrong!",
          description:
            "Either Your Provided Statement Is a Correct one or You entered Nothing...",
          icon: <MdError color="#892330" fontSize="4rem" />,
        })
      );
      setTimeout(() => {
        dispatch(hidePopUp());
      }, 5000);
    } finally {
      setRequested(false);
    }
  };
  const closeAll = () => {
    setUnderlinedText(false);
    setBhetla(false);
    setDisplay(false);
    setShowBelow(false);
    setColor([false, "#728894"]);
    setCorrectedOne(false);
  };
  // importantFun("I seen him yesterday at the store.");
  const sentenceRef = useRef();
  const [state, setState] = useState([
    { sentence: "", start: 0, end: 0 },
    { sentence: "", start: 0, end: 0 },
  ]);
  const [showHistory, setShowHistory] = useState(false);

  const [location, setLocation] = useState({ text: "", x: 0, y: 0 });
  const [display, setDisplay] = useState(false);
  const [index, setIndex] = useState(0);
  const [showBelow, setShowBelow] = useState(false);
  const [content, setContent] = useState([]);
  const [color, setColor] = useState([false, "#728894"]);
  const [v, setV] = useState(true);
  const [correctone, setCorrectedOne] = useState(false);
  const [sentence, setSentence] = useState("");
  const [requested, setRequested] = useState(false);

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
  const [a, setA] = useState(false);
  const [underlinedText, setUnderlinedText] = useState(false);
  const [bhetla, setBhetla] = useState(false);
  return (
    <div
      className={`w-screen ${a ? "h-[100vh]" : "h-auto"} grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 place-content-center place-items-start pt-2`}
    >
      <div className="w-full col-span-1 md:col-span-3 lg:col-span-3 p-2 mt-4 grid grid-cols-1 place-content-center place-items-center">
        <div className="w-full flex justify-between items-center mb-2 mt-4 text-white">
          <h1 className="border-b-[.15rem] text-base md:text-lg lg:text-xl xl:text-2xl border-transparent hover:border-[#728894] font-lexend text-[#728894]">
            Spell Checker
          </h1>
          <MdHistory
            color="#728894"
            fontSize="2rem"
            className={cssClasses.history}
            onClick={() => setShowHistory(true)}
          />
        </div>
        <PromptAndButton
          sentenceRef={sentenceRef}
          ref={sentenceRef}
          importantFun={importantFun}
          requested={requested}
          setRequested={setRequested}
          setBhetla={setBhetla}
          setIndex={setIndex}
          setV={setV}
        />
        <MainErrorMessageDescriberParent
          bhetla={bhetla}
          underlinedText={underlinedText}
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
        <div className="w-full fle flex-col my-4 font-lexend text-sm md:text-base lg:text-lg xl:text-xl justify-center items-center gap-2 bg-[#1E1E1E] rounded-xl">
          <h1 className="w-full text-center flex justify-center text-sm md:text-base lg:text-lg xl:text-xl gap-2 font-extrabold items-center py-2 text-white">
            <TbBulb color="yellow" fontSize="1.5rem" />
            Don’t have idea ? Try these!
          </h1>
          <div className="w-full p-4 rounded-lg bg-[#1E1E1E]  font-normal grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-2">
            {[
              ["Their going to there house for they're dinner."],
              ["I seen him yesterday at the store."],
              ["I cant believe its raining hear, its such a dissapointment."],
              ["u r mine."],
              ["Your going to love this movie."],
              ["I could of done better on the test."],
            ].map((value, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    sentenceRef.current.value = value;
                    closeAll();
                  }}
                  className="w-full px-8 py-4 text-justify max-h-40 overflow-scroll no-scrollbar text-sm bg-[#080b10] border-2 border-black hover:border-[#728894] hover:bg-black  rounded-md text-[#ffffffa0]"
                >
                  {value}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <History
        height="650px"
        showHistory={showHistory}
        setShowHistory={setShowHistory}
        history={Array(5).fill(
          "The Generated text History from the uploaded image is displayed here."
        )}
      />
    </div>
  );
}

export default SpellChecker;
