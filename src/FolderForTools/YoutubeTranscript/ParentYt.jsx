import React from "react";
import YoutubeTitle from "./YoutubeTitle";

const ParentYt = (props) => {
  return (
    <div className="w-full mt-4 flex flex-col justify-start items-start gap-2 font-lexend text-sm md:text-base lg:text-lg text-white">
      <YoutubeTitle title={props.value.title} />
    </div>
  );
};

export default ParentYt;
