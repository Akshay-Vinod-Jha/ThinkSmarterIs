import React from "react";

function ToolsTitle(props) {
  return (
    <h1 className="w-full text-base md:text-base lg:text-lg xl:text-xl lg:pl-4  font-extrabold flex justify-start items-start text-white font-lexend tracking-widest text-left">
      {props.children}
    </h1>
  );
}

export default ToolsTitle;
