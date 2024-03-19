import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Copy from "../../UI/Copy";
const ActualCodeBox = (props) => {
  console.log(props.slanguage);
  return (
    <>
      <div className="w-full md:max-h-80 max-h-60 overflow-scroll no-scrollbar mt-4 flex flex-col justify-start items-start gap-2">
        <SyntaxHighlighter
          language={props.slanguage}
          style={atomOneDark}
          id="code"
          className="rounded-xl overflow-scroll no-scrollbar"
        >
          {props.actualCode}
        </SyntaxHighlighter>
      </div>
      <div className="w-full flex justify-end items-center">
        <Copy text={props.actualCode} />
      </div>
    </>
  );
};

export default ActualCodeBox;
