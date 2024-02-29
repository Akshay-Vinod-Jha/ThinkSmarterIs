import React from "react";

function ActualBoxes(props) {
  return (
    <div className="bg-[#1E1E1E] p-2 rounded-xl m-1 hover:text-[#1E1E1E] hover:bg-[#728894]   font-mono font-extrabold tracking-widest text-[#728894] flex justify-start items-center">
      <h1>{props.children}</h1>
    </div>
  );
}

export default ActualBoxes;
