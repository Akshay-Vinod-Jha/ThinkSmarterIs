import React from "react";

function ActualBoxes(props) {
  return (
    <div className="bg-[#1E1E1E] p-2 rounded-xl m-1 hover:border-2 hover:border-[#728894]  border-2 border-black font-mono font-extrabold tracking-widest text-[#728894] flex justify-start items-center">
      <h1>{props.children}</h1>
    </div>
  );
}

export default ActualBoxes;
