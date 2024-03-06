// import React from "react";
import { forwardRef } from "react";
const PromptInputField = forwardRef((props, ref) => {
  return (
    <textarea
      rows={3}
      ref={ref}
      type={props.type}

      className="w-[100%] border-none outline-none lg:col-span-3 bg-[#1E1E1E] p-1 rounded-md text-white px-4 overflow-scroll no-scrollbar resize-none font-lexend text-base md:text-base lg:text-lg"

      autoFocus={true}
      placeholder={props.placeholder}
    />
  );
});

export default PromptInputField;
