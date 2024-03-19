import React, { useState } from "react";
import WhiteButton from "../UI/WhiteButton";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";

function AdvantageText(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full py-4 mt-4 text-white font-lexend flex flex-col justify-center items-center border-2 border-[#72889426] hover:border-[#728894] duration-150 rounded-xl">
      <h1 className="w-full pl-4 capatilize text-base md:text-lg lg:text-xl xl:text-xl">
        Advantages
      </h1>
      <ul className="w-full text-[#728894] list-disc pl-8 mt-2 text-base md:text-lg lg:text-xl xl:text-xl">
        <li>{props.advantages[0]}</li>
        {visible &&
          props.advantages.map((value, index) => {
            if (index != 0) {
              return <li key={`advantage${index}`}>{value}</li>;
            }
          })}
      </ul>
      <div className="w-max self-start pl-4">
        <WhiteButton
          onClick={() => {
            setVisible((previousState) => {
              return !previousState;
            });
          }}
        >
          See {visible ? "Less" : "More"}
          {!visible ? <RxEyeOpen></RxEyeOpen> : <GoEyeClosed></GoEyeClosed>}
        </WhiteButton>
      </div>
    </div>
  );
}

export default AdvantageText;
