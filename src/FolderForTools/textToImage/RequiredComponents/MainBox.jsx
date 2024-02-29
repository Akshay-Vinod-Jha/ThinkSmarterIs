import React from "react";
import ActualBoxes from "./ActualBoxes";
function MainBox() {
  return (
    <div className="w-full h-[70%] grid grid-cols-4 gap-4 overflow-hidden grid-rows-2">
      {Array(5)
        .fill(6)
        .map((value, index) => {
          return <ActualBoxes>{Math.random().toString()}</ActualBoxes>;
        })}
    </div>
  );
}

export default MainBox;
