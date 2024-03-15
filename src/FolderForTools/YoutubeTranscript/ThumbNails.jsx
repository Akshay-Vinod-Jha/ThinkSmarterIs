import React from "react";

const ThumbNails = (props) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4">
      <h1 className="text-base underline underline-offset-8 decoration-[#ffffff97]">
        Thumbnail
      </h1>
      <div className="w-full grid grid-cols-1 gap-4  place-content-center place-items-center">
        <img
          src={props.value[props.value.length - 1].url}
          className="w-full md:w-[50%] h-64 md:h-80 aspect-[1/0.5] object-cover rounded-xl"
        ></img>
      </div>
      {/* <h1 className="text-sm text-[#ffffff97]">{props.value}</h1> */}
    </div>
  );
};

export default ThumbNails;
