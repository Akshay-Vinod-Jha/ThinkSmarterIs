import React from "react";
import ErrorBoxSc from "./ErrorBoxSc";
import LikeDislike from "./LikeDislike";
function MainParentErrorBox(props) {
  return (
    <div className="mt-4 w-[100%] px-4 py-2 lg:w-[100%] rounded-xl flex flex-col justify-center items-center text-white bg-[#1E1E1E]">
      {[
        ["General Error Type", props.content.general_error_type],
        ["Replacement String ", props.content.replacement],
      ].map((value, index) => {
        return (
          <ErrorBoxSc
            key={index}
            first={value[0]}
            index={index}
            second={value[1]}
          ></ErrorBoxSc>
        );
      })}
      {props.v && (
        <LikeDislike
          color={props.color}
          updateTheColor={props.updateTheColor}
          state={props.state}
          callMe={props.callMe}
          updateTheCorrectedOne={props.updateTheCorrectedOne}
          updateTheV={props.updateTheV}
        ></LikeDislike>
      )}
    </div>
  );
}

export default MainParentErrorBox;
