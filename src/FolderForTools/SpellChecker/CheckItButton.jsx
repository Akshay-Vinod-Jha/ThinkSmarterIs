import React from "react";
import { LuMonitorCheck } from "react-icons/lu";
import OrangeButton from "../../UI/OrangeButton";
function CheckItButton(parameters) {
  return (
    <div className="lg:w-[20%] flex justify-end items-end h-full w-[50%] text-base md:text-base lg:text-lg xl:text-lg">
      <OrangeButton
        onClick={() => {
          console.log(parameters.sentenceRef.current.value);
        }}
      >
        Check It
        <LuMonitorCheck className="text-base md:text-lg lg:text-xl"></LuMonitorCheck>
      </OrangeButton>
    </div>
  );
}

export default CheckItButton;
