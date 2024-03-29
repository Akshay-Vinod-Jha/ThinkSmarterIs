import React, { useEffect } from "react";
import Copy from "../../UI/Copy";
const Trancription = (props) => {
  useEffect(() => {
    props.setCopyText(() => {
      let temp = "";
      for (let i = 0; i < props.value.length; i++) {
        temp = temp + props.value[i].subtitle;
      }
      return temp;
    });
  }, []);
  return (
    <div className="w-full flex flex-col justify-start items-start h-auto gap-4">
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="w-full flex justify-start items-center">
          Transcription
          <span className="text-[#fc0001] ml-2 underline underline-offset-8 decoration-[#fc0001]">
            (Subtitles Length :- {props.value.length})
          </span>
        </h1>
        <Copy text={props.copyText} />
      </div>
      <div className="w-full h-[30rem] border-2 border-[#ffffff37] overflow-scroll no-scrollbar bg-[black] rounded-xl px-4 py-4">
        {props.value.map((nestedValue, i) => {
          return (
            <div className="w-full" key={i}>
              <h1 className="w-full text-[12px] md:text-[14px] font-lexend flex justify-start items-start">
                {nestedValue.subtitle}
              </h1>
              <h1 className="ml-8 mb-2 w-[90%] flex justify-end items-center text-[10px] md:text-[12px] text-[#FD5D38]">
                {+nestedValue.start} -{" "}
                {(+nestedValue.start + +nestedValue.dur).toFixed(2)}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trancription;
