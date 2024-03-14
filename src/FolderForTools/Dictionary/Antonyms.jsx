import React from "react";

const Antonyms = (props) => {
  return (
    <div className="w-full flex flex-col justify-start items-center text-white gap-2">
      <h1 className="w-full">
        Antonyms
        <span className="text-[#fc0001] ml-2">({props.avalue.length})</span>
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
        {props.avalue.length !== 0 &&
          props.avalue.map((av, ai) => {
            return (
              <div
                className="w-full text-sm text-center py-2 rounded-lg bg-[#fc0001] hover:text-[#fc0001] hover:bg-white"
                key={ai}
              >
                {av}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Antonyms;
