// import React from "react";
import ActualBoxes from "./ActualBoxes";
function MainBox({ setPrompt }) {
  return (
    <div className="w-99 p-2 h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 grid-rows-2 mx-1">
      {[
        "neon holography crystal cat",
        "a cat eating a piece of cheese",
        "a cute robot artist painting on an easel, concept art",
        "an astronaut riding a horse in space",
      ].map((value, index) => {
        return (
          <ActualBoxes
            key={`txttoimgActualBoxes${index}`}
            setPrompt={setPrompt}
          >
            {value}
          </ActualBoxes>
        );
      })}
    </div>
  );
}

export default MainBox;
