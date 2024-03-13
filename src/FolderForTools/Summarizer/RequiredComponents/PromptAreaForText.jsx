import React, { forwardRef } from "react";
import PromptInputField from "../../../UI/PromptInputField";
import OrangeButton from "../../../UI/OrangeButton";
import Loader from "../../../UI/Loader";
import { MdCompress } from "react-icons/md";
const PromptAreaForText = forwardRef((props, ref) => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-end font-bold text-justify  gap-2 lg:gap-4">
      <div className="w-full lg:w-[75%]">
        <PromptInputField
          placeholder="Enter Your Text Here..."
          onChange={props.onChange}
          change={props.change}
          ref={ref}
        ></PromptInputField>
      </div>
      <div className="w-full lg:w-[25%] lg:px-8 flex justify-center items-end mb-2">
        <OrangeButton
          onClick={(e) => {
            props.clickHandler(e, props.temp);
          }}
        >
          {props.requested && <Loader />}
          Summarize
          <MdCompress className="text-base lg:text-lg" />
        </OrangeButton>
      </div>
    </div>
  );
});

export default PromptAreaForText;
