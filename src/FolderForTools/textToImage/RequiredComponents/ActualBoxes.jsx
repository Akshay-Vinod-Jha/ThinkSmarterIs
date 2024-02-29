import React from "react";

function ActualBoxes(props) {
  return (
    <div className="bg-[#1E1E1E] rounded-xl hover:text-[#1E1E1E] hover:bg-[#728894]  px-2 py-1 font-mono font-extrabold tracking-widest text-[#728894] flex justify-start items-center">
      {props.children}
    </div>
  );
}

export default ActualBoxes;
