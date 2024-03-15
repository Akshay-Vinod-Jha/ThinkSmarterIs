import React, { useRef, useState } from "react";
import History from "../../UI/History";
import Title from "../Summarizer/RequiredComponents/Title";
import PromptAreaForMail from "../Summarizer/RequiredComponents/PromptAreaForMail";
import ParentYt from "./ParentYt";
import { FaSearch } from "react-icons/fa";
import Loading from "../../UI/Loading";
import { useDispatch } from "react-redux";
import { hidePopUp, showPopUp } from "../../store/popupSlice.jsx";
import { MdError } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
const YT = () => {
  const dispatch = useDispatch();
  async function my(videoId) {
    const url = `https://youtube-transcriptor.p.rapidapi.com/transcript?video_id=${videoId}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9a80c4118amshc8f71e453f28de7p1e6248jsn99ca17e8c1a6",
        "X-RapidAPI-Host": "youtube-transcriptor.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setOutput([...result]);
      setParent(true);
    } catch (error) {
      setParent(false);
      console.error(error);
      dispatch(
        showPopUp({
          color: "#892330",
          bgColor: "#e5c2c2",
          title: "Something went Wrong!",
          description: "The Specified Video Do Not Have Sub-Titles",
          icon: <MdError color="#892330" fontSize="4rem" />,
        })
      );
      setTimeout(() => {
        dispatch(hidePopUp());
      }, 5000);
    } finally {
      setRequest(false);
      setRequested(false);
    }
  }
  //   my();
  const [showHistory, setShowHistory] = useState(false);
  const [requested, setRequested] = useState(false);
  const [output, setOutput] = useState([]);
  const [request, setRequest] = useState(false);
  const [parent, setParent] = useState(false);
  const wordref = useRef();
  const callThisFunction = (receivedvalue) => {
    setRequest(true);
    setParent(false);
    console.log(receivedvalue);
    setRequested(true);
    my(receivedvalue);
  };
  return (
    <div className="w-screen h-auto grid pb-10 grid-cols-1 md:grid-cols-4 place-content-center place-items-start gap-2">
      <div className="w-full col-span-1 md:col-span-3 h-auto p-2 md:p-4">
        <Title title="Yotube Transcriptor" setShowHistory={setShowHistory} />
        <PromptAreaForMail
          placeholder="Enter The Video Id here.."
          ref={wordref}
          callThisFunction={callThisFunction}
          buttonText="Search"
          icon={<FaSearch />}
          requested={requested}
        />
        {request && (
          <Loading
            label="Extracting Video Details For You , This can Take Some Time.."
            size="40px"
          />
        )}
        {parent && output.length !== 0 && (
          <>
            {output.map((value, index) => {
              return <ParentYt value={value} index={index} key={index} />;
            })}
          </>
        )}
        <div className="w-full flex flex-col my-4 font-lexend text-sm md:text-base lg:text-lg xl:text-xl justify-center items-center gap-2 bg-[#1E1E1E] rounded-xl">
          <h1 className="w-full text-center flex justify-center text-sm md:text-base lg:text-lg xl:text-xl gap-2 font-extrabold items-center py-2 text-white">
            <TbBulb color="yellow" fontSize="1.5rem" />
            Don’t have idea ? Try these!
          </h1>
          <div className="w-full p-4 rounded-lg bg-[#1E1E1E]  font-normal grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-2">
            {[
              ["PGUdWfB8nLg"],
              ["Tuw8hxrFBH8"],
              ["PWDQpEBq_pUg"],
              ["TqA0tiD5z5Y"],
              ["tMdFGrnp5XI"],
              ["pPaNRlZTX4Y"],
            ].map((value, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    wordref.current.value = value;
                    closeAll();
                  }}
                  className="w-full px-8 py-4 text-justify h-20 overflow-scroll no-scrollbar text-sm bg-[#080b10] border-2 border-black hover:border-[#728894] hover:bg-black  rounded-md text-[#ffffffa0]"
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

export default YT;
