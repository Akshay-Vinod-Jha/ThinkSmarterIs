import { useRef, useState } from "react";
import { MdHistory } from "react-icons/md";
import classes from "./InputBox.module.css";
import PromptInputField from "../../../UI/PromptInputField";
import OrangeButton from "../../../UI/OrangeButton";
import Loader from "../../../UI/Loader";
import MainBox from "./MainBox";
import { getTextFromPdf } from "../../../common-funtions/getTextFromPdf";

let current = {
  currentSrc: "",
  currentText: "",
};
const InputBox = ({
  setShowHistory,
  getAnswer,
  isLoading,
  getAnswerFromImage,
  setIsLoading,
  questionRef,
  contextRef,
  display,
  setDipslay,
  src,
  setSrc,
}) => {
  const [filetype, setFileType] = useState(null);

  const answerHandler = async () => {
    setIsLoading(true);
    if (display === "textarea") {
      getAnswer(contextRef.current.value, questionRef.current.value);
    } else if (display === "getDocument") {
      if (src.split(";")[0].includes("image")) {
        getAnswerFromImage(src, questionRef.current.value);
        current.currentText = "";
      } else {
        if (current.src !== src) {
          current.src = src;
          current.currentText = await getTextFromPdf(src);
        }
        getAnswer(current.currentText.join("\n"), questionRef.current.value);
      }
    }
  };

  return (
    <div className={classes["InputBox-container"]}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>INQUIRY RESPONSE</h1>
        <MdHistory
          color="#728894"
          fontSize="2rem"
          className={classes.history}
          onClick={() => setShowHistory(true)}
        />
      </div>
      <MainBox
        contextRef={contextRef}
        display={display}
        setDipslay={setDipslay}
        src={src}
        setSrc={setSrc}
        filetype={filetype}
        setFileType={setFileType}
      />
      <div className={classes.question}>
        <PromptInputField placeholder="Ask Any Question?" ref={questionRef} />
        <div className={classes.answer}>
          <OrangeButton onClick={answerHandler} isLoading={isLoading}>
            {isLoading && <Loader />}
            Answer
          </OrangeButton>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
