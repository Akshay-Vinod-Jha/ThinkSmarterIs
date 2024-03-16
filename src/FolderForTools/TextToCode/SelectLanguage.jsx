import React, { useRef } from "react";
import cssClasses from "./SelectLanguage.module.css";
const SelectLanguage = (props) => {
  const programming_languages = [
    "Python",
    "Java",
    "JavaScript",
    "C",
    "C++",
    "C#",
    "Ruby",
    "Go",
    "Swift",
    "Kotlin",
    "R",
    "PHP",
    "TypeScript",
    "Scala",
    "Perl",
    "Objective-C",
    "Rust",
    "HTML/CSS",
    "SQL",
    "Shell scripting (e.g., Bash)",
    "MATLAB",
    "Assembly language",
    "Haskell",
    "Lua",
    "Dart",
    "Julia",
    "Groovy",
    "Visual Basic",
    "Ada",
    "Clojure",
    "Fortran",
    "Lisp",
    "Scheme",
    "Prolog",
    "Erlang",
    "Scratch",
    "ABAP",
    "Apex",
    "COBOL",
    "Delphi/Object Pascal",
    "F#",
    "LabVIEW",
    "Pascal",
    "PowerShell",
    "Tcl",
    "VBScript",
    "Verilog",
    "VHDL",
  ];

  const selectedLangugae = useRef();
  return (
    <div className="w-full grid grid-cols-4 place-content-center place-items-start">
      <h1 className="w-full col-span-3 text-white font-lexend text-[10px] md:text-sm">
        Select The Language For Text Beautifier
      </h1>
      <div className="w-full col-span-1">
        <select
          id="select"
          className={
            cssClasses.selectEle +
            "    w-full  text-white px-4 rounded-md py-2  no-scrollbar font-lexend text-[10px] md:text-sm  border-none outline-none"
          }
          ref={selectedLangugae}
          onChange={(e) => {
            console.log(selectedLangugae.current.value.toLowerCase());
            props.setSLanguage(selectedLangugae.current.value.toLowerCase());
          }}
        >
          {programming_languages.map((value, index) => {
            return (
              <option
                value={value.toLowerCase()}
                key={`pl${index}`}
                className={cssClasses.any + " text-[7px] m-2 p-4 md:text-sm"}
              >
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectLanguage;
