import { useRef } from "react";
import { MdHistory } from "react-icons/md";
import classes from "./InputBox.module.css";
import PromptInputField from "../../../UI/PromptInputField";
import OrangeButton from "../../../UI/OrangeButton";
import Loader from "../../../UI/Loader";
const InputBox = ({ setShowHistory, getAnswer, isLoading }) => {
  const contextRef = useRef();
  const questionRef = useRef();
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
      <div>
        <textarea
          ref={contextRef}
          rows={19}
          placeholder="Enter The Paragraph"
          className={classes.QAteatarea}
        />
      </div>
      <div className={classes.question}>
        <PromptInputField placeholder="Ask Any Question?" ref={questionRef} />
        <div className={classes.answer}>
          <OrangeButton
            onClick={() =>
              getAnswer(contextRef.current.value, questionRef.current.value)
            }
          >
            {isLoading && <Loader />}
            Answer
          </OrangeButton>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
