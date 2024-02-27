import React from "react";

function BigContainer(props) {
  return (
    <div className="w-[100%] border-2 text-sm mx-auto md:text-base lg:text-lg xl:text-xl border-gray-800 h-auto p-4 rounded-xl bg-[#1c1e20ef] text-white font-mono font-extrabold tracking-widest grid grid-cols-1 place-content-center place-items-center">
      {props.children}
    </div>
  );
}

export default BigContainer;
