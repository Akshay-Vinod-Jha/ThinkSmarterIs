import React from "react";

function StartEnd(props) {
  return (
    <div className="w-[90%] text-sm md:text-base lg:text-lg xl:text-xl p-2 grid grid-cols-1 gap-4 md:grid-cols-3 space-x-4">
      <h1 className="font-extrabold border-b-2 border-gray-600 tracking-widest md:col-span-2">
        {props.errorType}
      </h1>
      <div className="w-auto h-10 px-6 py-2 rounded-xl text-sm flex border-2 border-gray-800 items-center justify-center bg-[#080b10] text-white font-extrabold">
        {props.children} <sup>th</sup>
        <pre> Character</pre>
      </div>
    </div>
  );
}

export default StartEnd;
