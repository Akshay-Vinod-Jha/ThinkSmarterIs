import React from "react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
function LikeDislike(props) {
  return (
    <h1 className="w-full  flex justify-start items-center text-left px-1 py-2 text-sm md:text-sm lg:text-sm font-lexend text-[#728894]">
      Do You Want To Fix All Error's?
      <TiTick
        fontSize="2rem"
        className=""
        style={{
          color: props.color[0] ? props.color[1] : "#728894",
        }}
        onClick={() => {
          props.updateTheColor([true, "#00f700"]);
          props.callMe(props.state[0].sentence);
          props.updateTheCorrectedOne(true);
          setTimeout(() => {
            props.updateTheV(true);
          }, 500);
        }}
      />
      <ImCross
        className="ml-2 text-base"
        style={{
          color: !props.color[0] ? props.color[1] : "#728894",
        }}
        onClick={() => {
          props.updateTheColor([false, "#f60002"]);
          setTimeout(() => {
            props.updateTheV(false);
            props.updateTheCorrectedOne(false);
          }, 500);
        }}
      />
    </h1>
  );
}

export default LikeDislike;
