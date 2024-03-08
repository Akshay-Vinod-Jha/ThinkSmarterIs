import React, { forwardRef } from "react";
import PromptInputField from "../../UI/PromptInputField";
const EnterSentenceBlock = forwardRef((parameters, ref) => {
  return (
    <div className="lg:w-[70%] w-[100%] text-base md:text-base lg:text-lg xl:text-lg">
      <PromptInputField
        placeholder="Enter Sentence Here"
        type="text"
        ref={ref}
      ></PromptInputField>
    </div>
  );
});

export default EnterSentenceBlock;
