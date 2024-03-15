import React from "react";

const Synonyms = (props) => {
  return (
    <div className="w-full flex flex-col justify-start items-center text-white gap-2">
      <h1 className="w-full">
        Synonyms
        <span className="text-[#fc0001] ml-2">({props.avalue.length})</span>
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 text-sm gap-2 lg:gap-4">
        {props.avalue.length !== 0 &&
          props.avalue.map((av, ai) => {
            return (
              <div
                className="w-full text-center py-2 rounded-lg text-sm bg-[#FD5D38] text-[black]"
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

export default Synonyms;
