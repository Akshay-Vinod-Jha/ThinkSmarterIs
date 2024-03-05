import React from "react";
import { GiThink } from "react-icons/gi";
import OrangeButton from "../UI/OrangeButton";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import AdvantageText from "./AdvantageText";
function Advantage(props) {
  return (
    <div className="w-full flex flex-col justify-center items-center p-6 md:p-6 font-mono ">
      <div className="w-40 md:w-50 lg:w-60 aspect-square overflow-hidden rounded-xl outline outline-1 outline-offset-8 outline-white">
        <img
          src={props.information.imageUrl}
          alt=""
          className="w-40 md:w-50 hover:scale-110 duration-150 lg:w-60 aspect-square object-cover rounded-xl "
        />
      </div>
      <h1 className="tracking-widest font-extrabold text-white mt-4 uppercase text-base md:text-lg lg:text-xl xl:text-2xl border-b-2 border-[#728894]">
        {props.information.name}
      </h1>
      <div className="w-full border-2 border-[#72889426] hover:border-[#728894] duration-150 rounded-xl py-4 pl-3 md:pl-6 mt-8">
        <h1 className="tracking-widest font-extrabold text-[white] text-base md:text-lg flex justify-start group/hii  lg:text-xl xl:text-2xl items-start">
          Why Choose Our Expertise ?
          <GiThink className="ml-2 group-hover/hii:text-yellow-500"></GiThink>
        </h1>
        <h1 className="tracking-widest mt-4 font-extrabold text-[#728894] text-base md:text-lg lg:text-xl xl:text-2xl">
          {props.information.slogan}
        </h1>
      </div>
      <AdvantageText advantages={props.information.advantages}></AdvantageText>
      <div className="w-screen h-auto flex  flex-col-reverse  md:flex-row justify-center items-center px-6 md:px-6 gap-4 my-4">
        <div className="w-full md:col-span-1 md:w-[50%] lg:w-[25%]">
          <OrangeButton onClick={props.updateState}>
            <FaBackward className="mr-2"></FaBackward>Go Back
          </OrangeButton>
        </div>
        <div className="w-full md:col-span-1 md:w-[50%] lg:w-[25%]">
          <OrangeButton>
            Start<FaForward className="ml-2"></FaForward>
          </OrangeButton>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
