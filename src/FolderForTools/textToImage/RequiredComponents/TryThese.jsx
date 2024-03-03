// import React from "react";
import { TbBulb } from "react-icons/tb";

function TryThese() {
  return (
    <div className="w-full flex justify-center items-center">
      <h1 className="w-full group/H1 flex flex-row justify-center items-center text-sm lg:text-lg xl:text-xl md:text-base font-mono font-extrabold tracking-widest text-[#728894] gap-2 hover:text-white mb-2">
        <TbBulb className="text-white group-hover/H1:text-yellow-500"></TbBulb>
        Don’t have idea ? Try these :
      </h1>
    </div>
  );
}

export default TryThese;
