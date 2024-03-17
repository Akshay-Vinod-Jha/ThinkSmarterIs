import React from "react";
import { SiConvertio } from "react-icons/si";

const Conversion = (props) => {
  return (
    <div className="w-full grid grid-cols-7 font-lexend text-sm text-white md:text-base place-content-center place-items-center gap-2 md:gap-4">
      <div className="w-full col-span-3 text-center bg-white text-[#fc0001] py-2 rounded-lg">
        {props.sdl[1]}
      </div>
      <SiConvertio className="w-full col-span-1 text-2xl" />
      <select
        className="w-full col-span-3 bg-[white] py-2 rounded-lg text-black"
        onChange={(e) => {
          console.log(e.target.value);
          props.setimpl(e.target.value);
        }}
      >
        {props.languagecode.map((value, index) => {
          return (
            <option value={value.language} key={index}>
              {value.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Conversion;
