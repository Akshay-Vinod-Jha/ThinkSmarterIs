import React from "react";
import ChildContainer from "./ChildContainer";
import Phonetics from "./Phonetics";
import Loader from "../../UI/Loader";
import Loading from "../../UI/Loading";
const ParentBox = (props) => {
  return (
    <div className="w-full rounded-lg font-lexend text-sm md:text-base bg-transparent grid grid-cols-1 place-content-center place-items-center px-2 py-4 gap-2 md:gap-4">
      {!props.requested && (
        <>
          <h1 className="w-full text-start text-white mb-4">
            Word:-
            <span className="bg-[#eb0900] capatilize text-[white]  font-semibold ml-4 px-4 py-2 rounded-lg">
              {props.value.word}
            </span>
          </h1>
          {props.value.meanings.length !== 0 &&
            props.value.meanings.map((nestedValue, nestedIndex) => {
              return (
                <ChildContainer
                  nestedIndex={nestedIndex}
                  nestedValue={nestedValue}
                  key={`Child${nestedIndex}`}
                  requested={props.requested}
                />
              );
            })}
          {props.value.phonetics.length !== 0 && (
            <Phonetics
              pvalue={props.value.phonetics}
              requested={props.requested}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ParentBox;
