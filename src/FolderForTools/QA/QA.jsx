import { useState } from "react";
import classes from "./QA.module.css";
import History from "../../UI/History";
import InputBox from "./RequiredComponents/InputBox";
import Output from "./RequiredComponents/Output";
import { HfInference } from "@huggingface/inference";
import { useDispatch } from "react-redux";
import { MdError } from "react-icons/md";
import { hidePopUp, showPopUp } from "../../store/popupSlice.jsx";
const HF_TOKEN = "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";

const QA = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [answer, setAnswer] = useState("Ouput will be display here...");
  const getAnswer = async (context, question) => {
    window.scroll(0, 500);
    setIsLoading(true);
    try {
      const inference = new HfInference(HF_TOKEN);
      const data = await inference.questionAnswering({
        model: "deepset/roberta-base-squad2",
        inputs: { question, context },
      });
      setAnswer(data.answer);
    } catch (err) {
      console.log(err);
      dispatch(
        showPopUp({
          color: "#892330",
          bgColor: "#e5c2c2",
          title: "Something went Wrong!",
          description: "Failed to Find Answer",
          icon: <MdError color="#892330" fontSize="4rem" />,
        })
      );
      setTimeout(() => {
        dispatch(hidePopUp());
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={classes.QA}>
      <div className={classes.upper}>
        <InputBox
          setShowHistory={setShowHistory}
          getAnswer={getAnswer}
          isLoading={isLoading}
        />
        <History
          height="650px"
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          history={Array(5).fill(
            "The Generated text History from the uploaded image is displayed here."
          )}
        />
      </div>
      <div className={classes.lower}>
        <Output isLoading={isLoading} output={answer} />
      </div>
    </div>
  );
};

export default QA;
