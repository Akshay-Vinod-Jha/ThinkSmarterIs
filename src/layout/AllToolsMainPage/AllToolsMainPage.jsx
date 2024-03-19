import { useState } from "react";
import cssclasses from "./AllToolsMainPage.module.css";
import Advantage from "../../Advantage/Advantage";
import AllParent from "../../UI/AllParent";
import { useLocation } from "react-router-dom";
// import { Outlet } from "react-router-dom";
function AllToolsMainPage() {
  const location = useLocation();
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
            " p-2 flex flex-col justify-center gap-6 items-center"
          }
        >
          <h1 className="w-full md:w-[50%] lg:w-[50%] mt-4 font-extrabold tracking-widest text-white text-center text-xl md:text-2xl lg:text-3xl">
            "Welcome to the
            <span className="text-[#fc0001] scale-150">AI Integration Hub</span>
            : Your Gateway to Integrated Intelligence"
          </h1>
          <AllParent
            updateState={updateState}
            updateClicked={updateClicked}
          ></AllParent>
        </div>
      )}
      {state && (
        <Advantage
          userId={location.state.userId}
          information={clicked}
          updateState={updateState}
        />
      )}
    </>
  );
}

export default AllToolsMainPage;
