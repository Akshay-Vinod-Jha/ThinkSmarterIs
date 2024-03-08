import React from "react";
function UnderlinedError(received) {
  return (
    <div>
      {received.state[received.index].sentence
        .split("")
        .map((value, cindex) => {
          return cindex >= received.state[received.index].start &&
            cindex <= received.state[received.index].end ? (
            <span
              key={`span${cindex}`}
              className="text-white cursor-pointer font-lexend underline decoration-wavy decoration-red-600 underline-offset-2 md:underline-offset-8 text-base md:text-base lg:text-lg"
              onMouseOver={(e) => {
                received.setLocation({
                  text: received.state[received.index].error_type,
                  x: e.clientX,
                  y: e.clientY,
                });
                received.setDisplay(true);
              }}
              onClick={() => {
                received.setShowBelow((previousState) => {
                  return !previousState;
                });
                received.setContent(received.state[received.index]);
              }}
              onMouseOut={(e) => {
                received.setDisplay(false);
              }}
            >
              {value}
            </span>
          ) : (
            <span
              className="text-white font-lexend text-base md:text-base lg:text-lg"
              key={cindex}
            >
              {value}
            </span>
          );
        })}
    </div>
  );
}

export default UnderlinedError;
