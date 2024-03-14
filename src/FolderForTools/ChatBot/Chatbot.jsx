import React, { useRef, useState } from "react";
import History from "../../UI/History";
import { HfInference } from "@huggingface/inference";
import ChatingScreen from "./ChatingScreen";
import { MdError } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import Title from "../Summarizer/RequiredComponents/Title";
import { TbBulb } from "react-icons/tb";
import PromptAreaForText from "../Summarizer/RequiredComponents/PromptAreaForText";
import { useDispatch } from "react-redux";
import { hidePopUp, showPopUp } from "../../store/popupSlice.jsx";
import { all } from "axios";
const Chatbot = () => {
  const dispatch = useDispatch();
  const callMe = async (userMessage) => {
    setProcessState(true);
    const apiUrl = "https://api.edenai.run/v2/text/chat";
    const authToken =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzYyODMxYjgtMjZkNS00ZjM2LTg5NzAtOWJjZGJhNDVlOTFjIiwidHlwZSI6ImFwaV90b2tlbiJ9.TNWbM7zN5KQaqoHfWj5r4N8u0QJenA_Q-gzULTYC6vo";

    const requestData = {
      providers: "openai",
      text: userMessage,
      chatbot_global_action: "Act as an assistant",
      previous_history: [],
      temperature: 0.0,
      max_tokens: 150,
      fallback_providers: "",
    };

    const options = {
      method: "POST",
      headers: {
        Authorization: authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    };

    fetch(apiUrl, options)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error("Failed");
        }
      })
      .then((data) => {
        setAllMessages((previousMessage) => {
          return [
            ...previousMessage,
            [data["openai"]["generated_text"], new Date().toLocaleTimeString()],
          ];
        });
        sett(Math.random());
        setProcessState(false);
        setRequested(false);
        sett(Math.random());
      })
      .catch((error) => {
        console.error(error);
        sett(Math.random());
        setProcessState(false);
        setRequested(false);
        dispatch(
          showPopUp({
            color: "#892330",
            bgColor: "#e5c2c2",
            title: "Something went Wrong!",
            description: "The ChatBot Failed To Reply",
            icon: <MdError color="#892330" fontSize="4rem" />,
          })
        );
        setTimeout(() => {
          dispatch(hidePopUp());
        }, 5000);
        setAllMessages((previousMessaages) => {
          return [
            ...previousMessaages,
            [<MdError />, new Date().toLocaleTimeString()],
          ];
        });
        sett(Math.random());
        setProcessState(false);
        setRequested(false);
        sett(Math.random());
      });
  };
  const [showHistory, setShowHistory] = useState(false);
  const [takeToTop, sett] = useState(0);
  const [requested, setRequested] = useState(false);
  const [allMessages, setAllMessages] = useState([]);
  const [processState, setProcessState] = useState(false);
  const inputRef = useRef();
  const clickHandler = (e, temp) => {
    sett(Math.random());
    if (inputRef.current.value.trim().length > 0) {
      setRequested(true);
      console.log(inputRef.current.value);
      setAllMessages((previousValue) => {
        return [
          ...previousValue,
          [inputRef.current.value, new Date().toLocaleTimeString()],
        ];
      });
      setTimeout(() => {
        callMe(inputRef.current.value);
      }, 300);
    }
  };
  return (
    <div className="rounded-lg w-screen p-1 md:p-2 lg:p-4 h-auto grid grid-cols-1 md:grid-cols-4 place-content-center place-items-start md:gap-2 lg:gap-3">
      <div className="col-span-1 md:col-span-3 w-full bg-[#1e1e1e] p-2 flex flex-col justify-center items-center gap-2">
        <Title title="ChatBot" setShowHistory={setShowHistory} />
        <ChatingScreen
          allMessages={allMessages}
          processState={processState}
          takeToTop={takeToTop}
        />
        <PromptAreaForText
          requested={requested}
          processState={processState}
          isLoading={processState}
          ref={inputRef}
          clickHandler={clickHandler}
          buttonText="Send"
          placeholder="Type Here.."
          icon={<IoSend className="text-lg" />}
        />
        <div className="w-full flex flex-col my-4 font-lexend text-sm md:text-base lg:text-lg xl:text-xl justify-center items-center gap-2 bg-[#1E1E1E] rounded-xl">
          <h1 className="w-full text-center flex justify-center text-sm md:text-base lg:text-lg xl:text-xl gap-2 font-extrabold items-center py-2 text-white">
            <TbBulb color="yellow" fontSize="1.5rem" />
            Don’t have idea ? Try these!
          </h1>
          <div className="w-full p-4 rounded-lg bg-[#1E1E1E]  font-normal grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-2">
            {[
              ["Hii"],
              ["Nice To Meet You"],
              [
                "Tommy has 3 apples. He gives 1 apple to his friend Sally. How many apples does Tommy have left?",
              ],
              ["What Is Software Testing,explain in few words?"],
            ].map((value, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    inputRef.current.value = value;
                  }}
                  className="w-full px-8 py-4 text-justify md:h-24 h-20 overflow-scroll no-scrollbar text-sm bg-[#080b10] border-2 border-black hover:border-[#728894] hover:bg-black  rounded-md text-[#ffffffa0]"
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
};

export default Chatbot;
