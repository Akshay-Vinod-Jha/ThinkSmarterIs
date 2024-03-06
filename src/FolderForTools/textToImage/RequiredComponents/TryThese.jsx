// import React from "react";
import { TbBulb } from "react-icons/tb";

function TryThese() {
  return (
    <div className="sticky bg-black left-0 top-0 z-20 w-full flex justify-center items-center">
      <h1 className="w-full p-3 group/H1 flex flex-row justify-center items-center text-[1rem] lg:text-lg xl:text-xl md:text-base text-[#ffffff] gap-2 hover:text-white mb-2">
        <TbBulb className="text-yellow-500"/>
        Don’t have idea ? Try these
      </h1>
    </div>
  );
}

export default TryThese;
