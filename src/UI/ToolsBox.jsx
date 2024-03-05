import React from "react";
import parse from "html-react-parser";

function ToolsBox(props) {
  return (
    <div
      onClick={props.onClick}
      className="w-full h-full border-2 border-[#72889496] bg-[#080b10] rounded-xl p-4 flex flex-col justify-center items-center gap-4 font-lexend font-extrabold tracking-widest "
    >
      <div className="text-[white] hover:text-[#728894]   uppercase text-base md:text-lg lg:text-xl xl:text-xl text-left w-full border-b-2 border-[#ffffff51] py-2">
        {props.toolName}
      </div>
      <div className="w-full h-[80%] flex flex-row justify-around items-center">
        <div className="w-[25%] md:w-[25%] lg:w-[20%] overflow-hidden rounded-full aspect-[1/1] border-4 border-[#72889496]">
          <img
            src={props.imageUrl}
            style={{
              objectFit: "cover",
            }}
            alt=""
            className="w-full aspect-square hover:scale-125 duration-200"
          />
        </div>
        <h1 className="text-[white] capitalize hover:text-[#728894] text-base md:text-lg lg:text-xl xl:text-xl  text-left w-[55%]">
          {parse(props.slogan)}
        </h1>
      </div>
    </div>
  );
}

export default ToolsBox;
