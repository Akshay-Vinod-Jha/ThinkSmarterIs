import React from "react";

function ActualBoxes({setPrompt,children}) {
  return (
    <div className="bg-[#1E1E1E] text-[.8rem] p-2 rounded-xl m-1 my-2 hover:border-2 hover:border-[#728894]  border-2 border-black text-[#728894] flex justify-start items-center cursor-pointer" onClick={()=>setPrompt(children)}>
      <h1>{children}</h1>
    </div>
  );
}

export default ActualBoxes;
