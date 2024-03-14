import React, { forwardRef } from "react";
import PromptInputField from "../../../UI/PromptInputField";
import OrangeButton from "../../../UI/OrangeButton";
import Loader from "../../../UI/Loader";

const PromptAreaForText = forwardRef((props, ref) => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-end font-bold text-justify  gap-2 lg:gap-4">
      <div className="w-full lg:w-[75%]">
        <PromptInputField
          placeholder={props.placeholder}
          onChange={props.onChange}
          change={props.change}
          ref={ref}
        ></PromptInputField>
      </div>
      <div className="w-full lg:w-[25%] lg:pl-8 flex justify-center items-end mb-2">
        <OrangeButton
          onClick={
            props.processState
              ? (e) => {}
              : (e) => {
                  props.clickHandler(e, props.temp);
                }
          }
          isLoading={props.processState}
          className={`${props.processState ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          {props.requested && <Loader />}
          {props.buttonText}
          {props.icon}
        </OrangeButton>
      </div>
    </div>
  );
});

export default PromptAreaForText;
