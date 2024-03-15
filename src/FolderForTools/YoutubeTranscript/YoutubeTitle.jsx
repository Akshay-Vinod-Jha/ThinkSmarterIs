import React from "react";

const YoutubeTitle = (props) => {
  return (
    <div className="w-full text-left flex flex-col gap-2">
      <h1 className="text-base underline underline-offset-8">Video Title</h1>
      <h1 className="text-sm text-[#ffffff97]">{props.title}</h1>
    </div>
  );
};

export default YoutubeTitle;
