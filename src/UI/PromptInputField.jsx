// import React from "react";
import { forwardRef } from "react";
const PromptInputField = forwardRef((props, ref) => {
  return (
    <textarea
      rows={3}
      ref={ref}
      type={props.type}
      className="w-[100%] lg:col-span-3 bg-[#1E1E1E] p-2 rounded-md overflow-scroll no-scrollbar resize-none text-[.8rem]"
      autoFocus={true}
      placeholder={props.placeholder}
    />
  );
});

export default PromptInputField;
