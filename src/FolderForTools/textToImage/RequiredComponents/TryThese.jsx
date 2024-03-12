// import React from "react";
import { TbBulb } from "react-icons/tb";

function TryThese() {
  return (
    <div className="w-full flex justify-center items-center py-2">
      <h1 className="w-full p-2 group/H1 flex flex-row justify-center items-center text-[.9rem] md:text-base text-[#ffffff] gap-2 hover:text-white">
        <TbBulb fontSize="1.5rem" color="yellow" />
        Don’t have idea ? Try these!
      </h1>
    </div>
  );
}

export default TryThese;
