import React, { useState } from "react";
import OrangeButton from "../UI/OrangeButton";
import WhiteButton from "../UI/WhiteButton";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
function Steps(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="w-full pt-4 mt-4 text-white font-lexend flex flex-col justify-between items-center border-2 border-[#72889426] hover:border-[#728894] duration-150 rounded-xl">
      <h1 className="w-full pl-4 capatilize text-base md:text-lg lg:text-xl xl:text-xl">
        How It Works?
      </h1>
      <div className="w-full h-20  overflow-scroll no-scrollbar text-[#728894] pl-8 mt-2 text-base md:text-lg lg:text-xl xl:text-xl">{`Step ${
        currentIndex + 1
      }:-${props.arrayOfSteps[currentIndex]}`}</div>
      <div className="w-full mt-4 px-2 md:px-4 flex flex-row justify-between items-center">
        <div className="w-max">
          <OrangeButton
            onClick={() => {
              if (currentIndex === 0) {
                setCurrentIndex(props.arrayOfSteps.length - 1);
              } else {
                setCurrentIndex((previousIndex) => {
                  return previousIndex - 1;
                });
              }
            }}
          >
            <FaBackward></FaBackward>
          </OrangeButton>
        </div>
        <div className="w-max">
          <WhiteButton
            onClick={() => {
              if (currentIndex === props.arrayOfSteps.length - 1) {
                setCurrentIndex((previousIndex) => {
                  return 0;
                });
              } else {
                setCurrentIndex((previousIndex) => {
                  return previousIndex + 1;
                });
              }
            }}
          >
            <FaForward></FaForward>
          </WhiteButton>
        </div>
      </div>
    </div>
  );
}

export default Steps;
