import React from "react";

const ALanguages = (props) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4">
      <h1 className="text-base underline underline-offset-8 decoration-[#ffffff97]">
        Available Languages
        <span className="text-[#fc0001] ml-2 underline underline-offset-8 decoration-[#fc0001]">
          ({props.value.length})
        </span>
      </h1>
      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-4">
        {props.value.map((value, index) => {
          return (
            <div
              key={index}
              className="w-full  text-center py-2 rounded-lg text-[11px] md:text-[12px] bg-[#FD5D38] font-extrabold text-[black]"
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ALanguages;
