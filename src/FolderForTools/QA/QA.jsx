import { useState, useRef } from "react";
import classes from "./QA.module.css";
import History from "../../UI/History";
import InputBox from "./RequiredComponents/InputBox";
import Output from "./RequiredComponents/Output";
import { HfInference } from "@huggingface/inference";
import { useDispatch } from "react-redux";
import { MdError } from "react-icons/md";
import { hidePopUp, showPopUp } from "../../store/popupSlice.jsx";
import TryThese from "./RequiredComponents/TryThese.jsx";
const HF_TOKEN = "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";

const QA = () => {
  const dispatch = useDispatch();
  const questionRef = useRef();
  const contextRef = useRef();
  const [display, setDipslay] = useState("textarea");
  const [src, setSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [answer, setAnswer] = useState("Output will be display here...");

  const errorHandler = () => {
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
  };

  const getAnswer = async (context, question) => {
    window.scroll(0, 500);
    setIsLoading(true);
    try {
      const inference = new HfInference(HF_TOKEN);
      const data = await inference.questionAnswering({
        model:
          "google-bert/bert-large-uncased-whole-word-masking-finetuned-squad",
        inputs: { question, context },
      });
      setAnswer(data.answer);
    } catch (err) {
      console.log(err);
      errorHandler;
    } finally {
      setIsLoading(false);
    }
  };

  const getAnswerFromImage = async (url, question) => {
    console.log(url);
    window.scroll(0, 500);
    try {
      const blob = await (await fetch(url)).blob();
      const inference = new HfInference(HF_TOKEN);
      const data = await inference.documentQuestionAnswering({
        model: "impira/layoutlm-document-qa",
        inputs: { image: blob, question },
      });
      setAnswer(data.answer);
    } catch (err) {
      console.log(err.message);
      errorHandler();
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
          getAnswerFromImage={getAnswerFromImage}
          setIsLoading={setIsLoading}
          questionRef={questionRef}
          contextRef={contextRef}
          display={display}
          setDipslay={setDipslay}
          src={src}
          setSrc={setSrc}
        />
        <History
          height="660px"
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
      <div>
        <TryThese
          setSrc={setSrc}
          questionRef={questionRef}
          getAnswerFromImage={getAnswerFromImage}
          display={display}
          trythisHandler={(context, question) => {
            window.scroll(0, 0);
            contextRef.current.value = context;
            questionRef.current.value = question;
          }}
        />
      </div>
    </div>
  );
};

export default QA;
