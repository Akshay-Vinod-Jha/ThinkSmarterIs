import React from "react";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";

function HistoryBox(props) {
  return (
    <div className="w-full p-3 bg-black rounded-xl flex flex-col justify-start items-start hover:text-white">
      <h1>{props.children}</h1>
      <MdOutlineMarkUnreadChatAlt></MdOutlineMarkUnreadChatAlt>
    </div>
  );
}

export default HistoryBox;
