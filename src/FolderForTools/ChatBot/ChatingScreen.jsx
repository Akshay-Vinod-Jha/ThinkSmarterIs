import React, { useEffect } from "react";
import Loading from "../../UI/Loading";
const ChatingScreen = (props) => {
  useEffect(() => {
    let bj = document.getElementById("random");
    bj.scrollTop = bj.scrollHeight;
    console.log(bj.scrollHeight);
  }, [props.takeToTop]);

  return (
    <div
      id="random"
      className={`w-full border-2 border-[#ffffff61] overflow-scroll no-scrollbar h-[60vh] bg-black px-6 py-2 md:px-6 lg:px-8 md:py-4 rounded-lg flex flex-col gap-2 ${props.processState ? "justify-center" : "justify-start"} items-center`}
    >
      {props.processState ? (
        <Loading
          label="Generating Response, This Can Take Some Time.."
          size="40px"
        />
      ) : (
        <>
          {props.allMessages.map((value, index) => {
            return (
              <div
                className={`relative lg:w-[50%] font-lexend text-smmd:text-base lg:text-lg md:w-[60%] w-[70%] gap-1 flex flex-col justify-center items-center  px-2 py-2 ${index % 2 !== 0 ? "self-start bg-white text-[#fc0008] rounded-e-lg rounded-b-lg" : "self-end rounded-s-lg rounded-b-lg bg-[#fc0008] text-white"}`}
              >
                <h1 className="w-[100%]  flex justify-start items-center text-start">
                  {value[0]}
                </h1>
                <h1 className="w-[100%] text-[10px] flex justify-end items-end text-end">
                  {value[1]}
                </h1>
                <div
                  className={`absolute border-[.60rem] border-b-transparent   top-0 ${index % 2 !== 0 ? "right-[99.92%] border-l-transparent border-t-white border-r-white" : "border-t-[#fc0008] left-[99.92%] border-l-[#fc0008] border-r-transparent"}`}
                ></div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ChatingScreen;
