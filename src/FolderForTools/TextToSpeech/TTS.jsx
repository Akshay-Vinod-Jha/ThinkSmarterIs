import React, { useState } from "react";
import History from "../../UI/History";
import Title from "../Summarizer/RequiredComponents/Title";
import MainContainer from "./MainContainer";

const TTS = () => {
  const [showHistory, setShowHistory] = useState(false);
  return (
    <div className="w-screen h-auto grid grid-cols-1 md:grid-cols-4 place-content-start place-items-start py-4 px-2 gap-2">
      <div className="w-full col-span-1 md:col-span-3 px-1 gap-4">
        <Title title="VoiceSync" />
        <MainContainer />
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

export default TTS;
