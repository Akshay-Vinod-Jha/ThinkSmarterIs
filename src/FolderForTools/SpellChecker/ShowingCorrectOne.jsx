import React from "react";
import Copy from "../../UI/Copy";
function ShowingCorrectOne(props) {
  return (
    <div className="mt-4 w-[100%] mb-4 text-base md:text-lg lg:text-xl font-lexend lg:w-[92.5%] p-2 rounded-xl lg:ml-4 flex flex-col justify-center items-center text-white bg-[#1E1E1E]">
      <h1 className="w-full flex justify-center text-center mt-2 items-center">
        {"'" + props.sentence + "'"}
      </h1>
      <div className="w-max flex self-end justify-end items-center border-2 border-[#ffffff57] rounded-xl mt-4">
        <Copy text={props.sentence}></Copy>
      </div>
    </div>
  );
}

export default ShowingCorrectOne;
