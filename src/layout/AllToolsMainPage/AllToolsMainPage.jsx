import React from "react";
import cssclasses from "./AllToolsMainPage.module.css";
import AllParent from "../../UI/AllParent";
function AllToolsMainPage() {
  return (
    <div
      className={
        cssclasses.mainContainer +
        " p-2 flex flex-col justify-center gap-6 items-center"
      }
    >
      <h1 className="w-full mt-4 font-extrabold tracking-widest text-white text-center text-base md:text-2xl lg:text-3xl">
        "Welcome to the AI Integration Hub: Your Gateway to Integrated
        Intelligence"
      </h1>
      <AllParent></AllParent>
    </div>
  );
}

export default AllToolsMainPage;
