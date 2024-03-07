import React from "react";

function ErrorTypeIndicator(props) {
  return (
    <div
      className="absolute  rounded-xl flex justify-center  font-lexend  items-center bg-[#728894] text-[#fc0001]"
      style={{
        top: props.location.y - 100 + "px",
        left: props.location.x + "px",
        transform: "translateX(-50%)",
      }}
    >
      <div className="w-full h-full relative font-extrabold p-4 text-sm md:text-base lg:text-lg xl:text-lg">
        {props.location.text}{" "}
        <div
          className="absolute top-[95%] left-[50%] -translate-x-[50%] bg-[#728894] w-10 h-4"
          style={{
            clipPath: "polygon(0 0, 46% 100%, 100% 0)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ErrorTypeIndicator;
