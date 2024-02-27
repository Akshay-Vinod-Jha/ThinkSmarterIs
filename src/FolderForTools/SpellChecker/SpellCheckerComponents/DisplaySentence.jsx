import React from "react";

function DisplaySentence(props) {
  return (
    <div className="w-[90%] h-auto px-2 text-sm md:text-base lg:text-lg xl:text-xl py-4 grid grid-cols-1 place-content-center place-items-center text-white">
      <h1 className="w-full flex justify-start items-center py-2 tracking-widest">
        <h1 className="w-max border-b-2 mb-1 border-gray-600">{props.first}</h1>
      </h1>
      <div className="w-full flex p-4 rounded-xl border-2 tracking-widest border-gray-800 justify-center items-center  bg-[#080b10] text-[#728894] font-extrabold">
        {props.second}
      </div>
    </div>
  );
}

export default DisplaySentence;
