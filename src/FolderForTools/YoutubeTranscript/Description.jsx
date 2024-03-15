import React from "react";

const Description = (props) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <h1 className="text-base underline underline-offset-8 decoration-[#ffffff97]">
        Description
      </h1>
      <h1 className="text-[11px] md:text-[12px] px-2 text-justify text-[#ffffff97]">
        {props.des}
      </h1>
    </div>
  );
};

export default Description;
