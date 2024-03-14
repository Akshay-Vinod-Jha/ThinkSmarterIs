import React from "react";

const POS = (props) => {
  return (
    <div className="w-max px-4 py-2 bg-white text-[#fc0001] rounded-lg hover:bg-[#728894] hover:text-white">
      {props.pos}
    </div>
  );
};

export default POS;
