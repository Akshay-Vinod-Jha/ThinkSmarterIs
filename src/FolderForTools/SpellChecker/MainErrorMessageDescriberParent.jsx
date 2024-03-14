import React from "react";
import UnderlinedError from "./UnderlinedError";
import ErrorTypeIndicator from "./ErrorTypeIndicator";
import PrevNextContainer from "./PrevNextContainer";
import Loading from "../../UI/Loading";
function MainErrorMessageDescriberParent(received) {
  return (
    <>
      {received.underlinedText && (
        <div className="mt-4 w-[100%] lg:w-[100%] rounded-xl flex flex-col justify-center items-center bg-[#1E1E1E] p-2">
          {/* error message */}
          {!received.bhetla && (
            <Loading
              label="Checking the Provided Sentence , This Can Take Some Time"
              size="40px"
            />
          )}
          {received.bhetla && (
            <>
              <UnderlinedError
                state={received.state}
                index={received.index}
                setLocation={received.setLocation}
                setDisplay={received.setDisplay}
                setShowBelow={received.setShowBelow}
                setContent={received.setContent}
              ></UnderlinedError>

              {received.display && (
                <ErrorTypeIndicator
                  location={received.location}
                ></ErrorTypeIndicator>
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
            </>
          )}
        </div>
      )}
    </>
  );
}

export default MainErrorMessageDescriberParent;
