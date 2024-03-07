import React from "react";

function ErrorBoxSc(props) {
  return (
    <div
      className="w-full text-base md:text-base  pb-2 lg:text-lg font-lexend px-1   grid grid-cols-1 md:grid-cols-2 place-content-center items-start gap-2 md:justify-between md:gap-0"
      style={{
        borderBottom: props.index === 0 ? ".10rem solid #72889435" : "none",
      }}
    >
      <h1 className="w-full font-extrabold pt-2">
        {props.first}
        <span className="inline lg:hidden"> :-</span>
      </h1>
      <h1 className="w-full text-[#fc0001] pt-4 pb-2">{props.second}</h1>
    </div>
  );
}

export default ErrorBoxSc;
