import React from "react";
import SliderCantainer from "./layout/slider/SliderCantainer";
import SpellChecker from "./FolderForTools/SpellChecker/SpellChecker";
function App() {
  const mainContainer =
    "w-screen h-auto bg-[#080b10] p-1 md:p-4 grid grid-cols-1 place-content-center place-items-center";
  return (
    <div className={mainContainer}>
      {/* <SpellChecker></SpellChecker> */}
      <SliderCantainer/>
    </div>
  );
}

export default App;
