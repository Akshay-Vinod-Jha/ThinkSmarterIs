import React from "react";
import ActualBoxes from "./ActualBoxes";
function MainBox() {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2">
      {Array(5)
        .fill(6)
        .map((value, index) => {
          return <ActualBoxes>{Math.random().toString()}</ActualBoxes>;
        })}
    </div>
  );
}

export default MainBox;
