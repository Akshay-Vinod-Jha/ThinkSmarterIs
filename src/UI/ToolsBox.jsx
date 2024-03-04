import React from "react";

function ToolsBox(props) {
  return (
    <div className="w-full border-2 border-[#2a2a2b] bg-[#000000d6] rounded-xl p-4 flex flex-col justify-center items-center gap-4 font-mono font-extrabold tracking-widest ">
      <div className="text-[#728894] hover:text-white text-base tracking-widest uppercase md:text-lg lg:text-xl text-left w-full border-b-2 border-[#ffffff31] py-2">
        {props.toolName}
      </div>
      <div className="w-full flex flex-row justify-around items-center">
        <img
          src={props.imageUrl}
          alt=""
          className="w-[40%] md:w-[35%] lg:w-[30%] rounded-full aspect-[1/1]"
        />
        <h1 className="text-[#728894] hover:text-white text-sm md:text-base lg:text-lg tracking-widest  text-left w-[40%]">
          {props.slogan}
        </h1>
      </div>
    </div>
  );
}

export default ToolsBox;
