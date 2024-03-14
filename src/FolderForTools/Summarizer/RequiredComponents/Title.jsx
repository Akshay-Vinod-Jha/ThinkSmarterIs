import React from "react";
import { MdHistory } from "react-icons/md";
import cssClasses from "./Title.module.css";
const Title = (props) => {
  return (
    <div className="w-full flex justify-between items-center mb-2 mt-4 text-white">
      <h1 className="border-b-[.15rem] text-base md:text-lg lg:text-xl xl:text-2xl border-transparent hover:border-[#728894] font-lexend text-[#728894]">
        {props.title}
      </h1>
      <MdHistory
        color="#728894"
        fontSize="2rem"
        className={cssClasses.history}
        onClick={() => props.setShowHistory(true)}
      />
    </div>
  );
};

export default Title;
