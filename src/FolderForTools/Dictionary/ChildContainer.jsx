import React from "react";
import POS from "./POS";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";
import Defination from "./Defination";
const ChildContainer = (props) => {
  return (
    <div className="w-full flex flex-col border-2 border-[#ffffff28] rounded-lg bg-[#1E1E1E] p-4 justify-start items-start font-semibold gap-8">
      <POS pos={props.nestedValue.partOfSpeech} />
      {props.nestedValue.antonyms.length !== 0 && (
        <Antonyms avalue={props.nestedValue.antonyms} />
      )}
      {props.nestedValue.synonyms.length !== 0 && (
        <Synonyms avalue={props.nestedValue.synonyms} />
      )}
      {props.nestedValue.definitions.length !== 0 && (
        <Defination
          dvalue={props.nestedValue.definitions}
          requested={props.requested}
        />
      )}
    </div>
  );
};

export default ChildContainer;
