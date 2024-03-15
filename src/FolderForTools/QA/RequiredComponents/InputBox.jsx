import { useRef, useState } from "react";
import { MdHistory } from "react-icons/md";
import classes from "./InputBox.module.css";
import PromptInputField from "../../../UI/PromptInputField";
import OrangeButton from "../../../UI/OrangeButton";
import Loader from "../../../UI/Loader";
import MainBox from "./MainBox";
import { getTextFromPdf } from "../../../common-funtions/getTextFromPdf";

let text = "";
const InputBox = ({
  setShowHistory,
  getAnswer,
  isLoading,
  getAnswerFromImage,
}) => {
  const questionRef = useRef();
  const contextRef = useRef();
  const [display, setDipslay] = useState("textarea");
  const [src, setSrc] = useState(null);

  const answerHandler = async () => {
    if (display === "textarea") {
      getAnswer(contextRef.current.value, questionRef.current.value);
      text = "";
    } else if (display === "getDocument") {
      if (src.split(";")[0].includes("image")) {
        getAnswerFromImage(src, questionRef.current.value);
      } else {
        text = !text && (await getTextFromPdf(src));
        getAnswer(text.join("\n"), questionRef.current.value);
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
      />
      <div className={classes.question}>
        <PromptInputField placeholder="Ask Any Question?" ref={questionRef} />
        <div className={classes.answer}>
          <OrangeButton onClick={answerHandler}>
            {isLoading && <Loader />}
            Answer
          </OrangeButton>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
