import React, { forwardRef } from "react";
import EnterSentenceBlock from "./EnterSentenceBlock";
import CheckItButton from "./CheckItButton";
const PromptAndButton = forwardRef((props, ref) => {
  return (
    <div className="w-full flex lg:flex-row mt-4 flex-col gap-2 lg:gap-0 justify-evenly  lg:pl-4  items-center">
      <EnterSentenceBlock ref={ref} />
      <CheckItButton sentenceRef={props.sentenceRef} />
    </div>
  );
});

export default PromptAndButton;
