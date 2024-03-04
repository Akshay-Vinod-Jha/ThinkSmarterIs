import React from "react";
import ToolsBox from "./ToolsBox";

function AllParent() {
  const arrayOfTools = [
    {
      name: "visualize AI",
      imageUrl: "../../images/time.png",
      slogan: "WELCOME TO THINK  MASTER",
    },
    {
      name: "Vision verbalizer",
      imageUrl: "../../images/time.png",
      slogan: "WELCOME TO THINK  MASTER",
    },
    {
      name: "AI Transcribe Tube",
      imageUrl: "../../images/time.png",
      slogan: "WELCOME TO THINK  MASTER",
    },
    {
      name: "Inquiry Response",
      imageUrl: "../../images/time.png",
      slogan: "WELCOME TO THINK  MASTER",
    },
    {
      name: "Spell checker",
      imageUrl: "../../images/time.png",
      slogan: "WELCOME TO THINK  MASTER",
    },
    {
      name: "visualize AI",
      imageUrl: "../../images/time.png",
      slogan: "WELCOME TO THINK  MASTER",
    },
  ];
  return (
    <div className="w-[100%] rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center place-items-center gap-2 md:gap-3 lg:gap-6 p-1 md:p-2 lg:p-6 my-10">
      {arrayOfTools.map((value) => {
        return (
          <ToolsBox
            toolName={value.name}
            slogan={value.slogan}
            imageUrl={value.imageUrl}
          ></ToolsBox>
        );
      })}
    </div>
  );
}

export default AllParent;
