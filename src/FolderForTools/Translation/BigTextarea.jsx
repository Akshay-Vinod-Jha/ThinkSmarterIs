import React, { forwardRef } from "react";

const BigTextarea = forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      placeholder={props.placeholder}
      name="bigtextarea"
      id="bigtextarea"
      className="w-[100%] border-2 outline-none resize-none border-[#ffffff39] h-80 font-lexend text-sm md:text-base text-white bg-black rounded-xl px-2 py-4"
    ></textarea>
  );
});

export default BigTextarea;
