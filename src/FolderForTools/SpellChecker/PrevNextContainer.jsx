import React from "react";
import OrangeButton from "../../UI/OrangeButton";
import WhiteButton from "../../UI/WhiteButton";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
function PrevNextContainer(props) {
  return (
    <div className="w-full mt-4 px-2 md:px-4 flex flex-row justify-between items-center">
      <div className="w-max">
        <OrangeButton
          onClick={() => {
            if (props.index === 0) {
              props.setIndex(props.state.length - 1);
            } else {
              props.setIndex((previousIndex) => {
                return previousIndex - 1;
              });
            }
            props.updateShowBelow(false);
            props.updateTheCorrectedOne(false);
            props.updateTheColor([false, "#728894"]);
            props.updateTheV(true);
          }}
        >
          <FaBackward></FaBackward>
        </OrangeButton>
      </div>
      <div className="w-max">
        <WhiteButton
          onClick={() => {
            if (props.index === props.state.length - 1) {
              props.setIndex(0);
            } else {
              props.setIndex((previousIndex) => {
                return previousIndex + 1;
              });
            }
            props.updateShowBelow(false);
            props.updateTheCorrectedOne(false);
            props.updateTheColor([false, "#728894"]);
            props.updateTheV(true);
          }}
        >
          <FaForward></FaForward>
        </WhiteButton>
      </div>
    </div>
  );
}

export default PrevNextContainer;
