import React, { forwardRef } from "react";
import InputField from "../../../UI/InputField";
import OrangeButton from "../../../UI/OrangeButton";
import { MdCompress } from "react-icons/md";
import Loader from "../../../UI/Loader";
const PromptAreaForMail = forwardRef((props, ref) => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row justify-center font-bold items-end  gap-2 lg:gap-4">
      <div className="w-full lg:w-[75%]">
        <InputField
          placeholder="Enter Your Text Here..."
          onChange={props.changeHandler}
          change={props.onChange}
          ref={ref}
        ></InputField>
      </div>
      <div className="w-full lg:w-[25%] flex justify-center items-end mb-2">
        <OrangeButton
          onClick={(e) => {
            props.callThisFunction(ref.current.value);
          }}
        >
          {props.requested && <Loader />}
          Summarize It
          <MdCompress className="text-base lg:text-lg" />
        </OrangeButton>
      </div>
    </div>
  );
});

export default PromptAreaForMail;
