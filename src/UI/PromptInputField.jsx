// import React from "react";
import { forwardRef } from "react";
const PromptInputField = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type={props.type}
      className="w-[100%] lg:col-span-3 bg-[#1E1E1E] p-1 rounded-md px-4"
      autoFocus={true}
      placeholder={props.placeholder}
    />
  );
});

export default PromptInputField;
