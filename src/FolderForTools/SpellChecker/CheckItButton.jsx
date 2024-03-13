import React from "react";
import { LuMonitorCheck } from "react-icons/lu";
import OrangeButton from "../../UI/OrangeButton";
import Loader from "../../UI/Loader";
function CheckItButton(parameters) {
  return (
    <div className="lg:w-[20%] p-2 flex justify-end items-end h-full w-[50%] text-base md:text-base lg:text-lg xl:text-lg">
      <OrangeButton
        onClick={() => {
          console.log(parameters.sentenceRef.current.value);
          parameters.importantFun(parameters.sentenceRef.current.value);
          parameters.setRequested(true);
        }}
      >
        {parameters.requested && <Loader />}
        Check
        <LuMonitorCheck className="text-base md:text-lg lg:text-xl"></LuMonitorCheck>
      </OrangeButton>
    </div>
  );
}

export default CheckItButton;
