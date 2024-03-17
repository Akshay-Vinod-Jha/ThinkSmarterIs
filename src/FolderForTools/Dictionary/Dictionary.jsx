import React, { useRef, useState } from "react";
import History from "../../UI/History";
import Title from "../Summarizer/RequiredComponents/Title";
import PromptAreaForMail from "../Summarizer/RequiredComponents/PromptAreaForMail";
import { FaSearch } from "react-icons/fa";
import ParentBox from "./ParentBox";
import { useDispatch } from "react-redux";
import { hidePopUp, showPopUp } from "../../store/popupSlice.jsx";
import { MdError } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import Loading from "../../UI/Loading.jsx";
const Dictionary = () => {
  const dispatch = useDispatch();
  const [showHistory, setShowHistory] = useState(false);
  const [requested, setRequested] = useState(false);
  const [object, setObject] = useState([]);
  const wordref = useRef();
  const callThisFunction = (receivedvalue) => {
    console.log(receivedvalue);
    seta(true);
    setRequested(true);
    callingApi(receivedvalue);
  };
  const callingApi = (receivedWord) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${receivedWord}`)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        setObject(data);
        closingAll();
        seta(true);
      })
      .catch((error) => {
        console.log("invalid word specified");
        console.log(error);
        dispatch(
          showPopUp({
            color: "#892330",
            bgColor: "#e5c2c2",
            title: "Something went Wrong!",
            description: "Nothing Related To The Specified Word Found...",
            icon: <MdError color="#892330" fontSize="4rem" />,
          })
        );

        // to hide popup
        setTimeout(() => {
          dispatch(hidePopUp());
        }, 5000);
        closingAll();
        seta(false);
      });
  };
  const closingAll = () => {
    setRequested(false);
  };
  const [a, seta] = useState(true);
  return (
    <div className="w-screen h-auto grid grid-cols-1 md:grid-cols-4 place-content-center place-items-start gap-2">
      <div className="w-full col-span-1 md:col-span-3 h-auto p-2 md:p-4">
        <Title title="IntelliDict" setShowHistory={setShowHistory} />
        <PromptAreaForMail
          placeholder="Enter The Word Here..."
          ref={wordref}
          callThisFunction={callThisFunction}
          buttonText="Search"
          icon={<FaSearch />}
          requested={requested}
        />
        {a &&
          object.map((value, index) => {
            return (
              <ParentBox
                value={value}
                index={index}
                key={`ParentBox${index}`}
                requested={requested}
              ></ParentBox>
            );
          })}
        {requested && (
          <Loading
            label="Searching The Specified Word..This Can Take Some Time"
            size="40px"
          />
        )}
        <div className="w-full flex flex-col my-4 font-lexend text-sm md:text-base lg:text-lg xl:text-xl justify-center items-center gap-2 bg-[#1E1E1E] rounded-xl">
          <h1 className="w-full text-center flex justify-center text-sm md:text-base lg:text-lg xl:text-xl gap-2 font-extrabold items-center py-2 text-white">
            <TbBulb color="yellow" fontSize="1.5rem" />
            Don’t have idea ? Try these!
          </h1>
          <div className="w-full p-4 rounded-lg bg-[#1E1E1E]  font-normal grid grid-cols-1 lg:grid-cols-3 place-content-start place-items-start gap-2">
            {[
              ["Immortal"],
              ["Royal"],
              ["Pacemaker"],
              ["Arctic"],
              ["Knowledge"],
              ["Discount"],
            ].map((value, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    wordref.current.value = value;
                    closingAll();
                    seta(false);
                  }}
                  className="w-full px-8 py-4 h-auto overflow-scroll no-scrollbar text-sm bg-[#080b10] border-2 border-black hover:border-[#728894] hover:bg-black  rounded-md text-[#ffffffa0]"
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

export default Dictionary;
