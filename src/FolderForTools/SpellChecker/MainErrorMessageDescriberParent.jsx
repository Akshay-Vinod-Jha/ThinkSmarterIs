import React from "react";
import UnderlinedError from "./UnderlinedError";
import ErrorTypeIndicator from "./ErrorTypeIndicator";
import PrevNextContainer from "./PrevNextContainer";
function MainErrorMessageDescriberParent(received) {
  return (
    <div className="mt-4 w-[100%] lg:w-[100%] rounded-xl flex flex-col justify-center items-center bg-[#1E1E1E]">
      {/* error message */}
      <UnderlinedError
        state={received.state}
        index={received.index}
        setLocation={received.setLocation}
        setDisplay={received.setDisplay}
        setShowBelow={received.setShowBelow}
        setContent={received.setContent}
      ></UnderlinedError>
      {received.display && (
        <ErrorTypeIndicator location={received.location}></ErrorTypeIndicator>
      )}
      <PrevNextContainer
        index={received.index}
        setIndex={received.setIndex}
        state={received.state}
        updateTheColor={received.updateTheColor}
        updateTheV={received.updateTheV}
        updateShowBelow={received.updateShowBelow}
        updateTheCorrectedOne={received.updateTheCorrectedOne}
      ></PrevNextContainer>
    </div>
  );
}

export default MainErrorMessageDescriberParent;
