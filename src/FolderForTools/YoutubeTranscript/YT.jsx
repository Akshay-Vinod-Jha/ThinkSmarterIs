import React, { useRef, useState } from "react";
import History from "../../UI/History";
import Title from "../Summarizer/RequiredComponents/Title";
import PromptAreaForMail from "../Summarizer/RequiredComponents/PromptAreaForMail";
import ParentYt from "./ParentYt";
import { FaSearch } from "react-icons/fa";
const YT = () => {
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
    } catch (error) {
      console.error(error);
    } finally {
      setRequested(false);
    }
  }
  //   my();
  const [showHistory, setShowHistory] = useState(false);
  const [requested, setRequested] = useState(false);
  const [output, setOutput] = useState([]);
  const wordref = useRef();
  const callThisFunction = (receivedvalue) => {
    console.log(receivedvalue);
    setRequested(true);
    my(receivedvalue);
  };
  return (
    <div className="w-screen h-auto grid grid-cols-1 md:grid-cols-4 place-content-center place-items-start gap-2">
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
        {output.length !== 0 && (
          <>
            {output.map((value, index) => {
              return <ParentYt value={value} index={index} key={index} />;
            })}
          </>
        )}
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
