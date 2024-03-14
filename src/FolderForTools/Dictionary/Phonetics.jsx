import React, { useEffect, useState } from "react";
import { ImNext2 } from "react-icons/im";
const Phonetics = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentIndex(0);
  }, [props.requested]);
  return (
    <div className="w-full flex text-white text-sm md:text-base flex-col justify-start items-start gap-2">
      <h1>
        Phonetics
        <span className="text-[#fc0001] ml-2">({props.pvalue.length})</span>
      </h1>
      <div className="w-full rounded-lg p-2 bg-[#1e1e1e] flex flex-col justify-start items-start gap-1">
        <div className="w-full flex flex-col justify-start items-start">
          {props.pvalue[currentIndex].text && (
            <div className="w-full  flex flex-col justify-start items-start gap-1">
              <h1>
                Phonetic
                <span className="text-[#fc0001] ml-2">
                  ({currentIndex + 1}th)
                </span>
              </h1>
              <h1 className="pl-6 text-sm">
                "{props.pvalue[currentIndex].text}"
              </h1>
            </div>
          )}
          {props.pvalue[currentIndex].audio && (
            <div className="w-full mt-8 flex flex-col justify-start items-start gap-1">
              <h1>Audio:-</h1>
              <h1 className="w-[90%] pl-6 my-2 text-sm">
                <audio
                  controls={true}
                  className="w-full"
                  src={props.pvalue[currentIndex].audio}
                ></audio>
              </h1>
            </div>
          )}
          <div className="w-full flex flex-col justify-start items-start"></div>
        </div>
        <div className="w-full flex justify-end items-center">
          <ImNext2
            className="bg-[#fc0001] text-white text-base px-4 rounded-lg py-1 w-max h-max"
            onClick={() => {
              setCurrentIndex((previousIndex) => {
                if (previousIndex === props.pvalue.length - 1) {
                  return 0;
                } else {
                  return previousIndex + 1;
                }
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Phonetics;
