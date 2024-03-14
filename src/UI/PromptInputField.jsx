// import React from "react";
import { forwardRef } from "react";
const PromptInputField = forwardRef((props, ref) => {
  return (
    <textarea
      rows={3}
      ref={ref}
      type={props.type}
      className="w-[100%] text-justify border-2 border-[#ffffff50] outline-none lg:col-span-3 bg-[#1E1E1E] p-2 rounded-md text-[rgba(255,255,255,.75)]  overflow-scroll no-scrollbar resize-none font-lexend text-sm md:text-base lg:text-lg"
      autoFocus={true}
      placeholder={props.placeholder}
      onChange={props.change ? props.onChange : () => {}}
    />
  );
});

export default PromptInputField;
