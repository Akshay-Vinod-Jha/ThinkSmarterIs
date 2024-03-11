// import React from "react";
import { forwardRef } from "react";
const PromptInputField = forwardRef((props, ref) => {
  return (
    <textarea
      rows={3}
      ref={ref}
      type={props.type}
      className="w-[100%] text-[.9rem] border-none outline-none lg:col-span-3 bg-[#1E1E1E] p-1 rounded-md text-[rgba(255,255,255,.75)] px-2 overflow-scroll no-scrollbar resize-none font-lexend"
      autoFocus={true}
      placeholder={props.placeholder}
    />
  );
});

export default PromptInputField;
