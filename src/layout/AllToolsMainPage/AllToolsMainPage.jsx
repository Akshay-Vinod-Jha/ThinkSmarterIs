import { useState } from "react";
import cssclasses from "./AllToolsMainPage.module.css";
import Advantage from "../../Advantage/Advantage";
import AllParent from "../../UI/AllParent";
<<<<<<< HEAD
=======
import Bottom from "../../UI/Bottom";
import { useLocation } from "react-router-dom";
// import { Outlet } from "react-router-dom";
>>>>>>> 62e70018569f3375778880805f595cbac29f0cf3
function AllToolsMainPage() {
  const [state, setState] = useState(false);
  const [clicked, updateOnClicked] = useState({});
  const updateState = () => {
    setState((previousState) => {
      return !previousState;
    });
  };
  const updateClicked = (passedObj) => {
    updateOnClicked({ ...passedObj });
  };
  return (
    <>
      {!state && (
        <div
          className={
            cssclasses.mainContainer +
            " p-2 flex flex-col justify-center gap-6 items-center font-lexend"
          }
        >
<<<<<<< HEAD
          <h1 className="w-full md:w-[50%] lg:w-[50%] mt-4 font-extrabold tracking-widest text-white text-center text-xl md:text-2xl lg:text-3xl">
            "Welcome to the{" "}
            <span className="text-[#fc0001] scale-150">AI Integration Hub</span>
=======
          <h1 className="w-full md:w-[50%] lg:w-[50%] mt-4 font-semibold tracking-widest text-white text-center text-xl md:text-2xl lg:text-3xl">
            "Welcome to the
            <span className="text-[#fc0001] scale-150">
              {" "}
              AI Integration Hub
            </span>
>>>>>>> 62e70018569f3375778880805f595cbac29f0cf3
            : Your Gateway to Integrated Intelligence"
          </h1>
          <AllParent
            updateState={updateState}
            updateClicked={updateClicked}
          ></AllParent>
        </div>
      )}
      {state && (
        <Advantage information={clicked} updateState={updateState}></Advantage>
      )}
      <Bottom label="Go To Home" navigateTo="/" />
    </>
  );
}

export default AllToolsMainPage;
