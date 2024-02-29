import React from "react";
import SpellChecker from "./FolderForTools/SpellChecker/SpellChecker";
import TextToImage from "./FolderForTools/textToImage/TextToImage";
function App() {
  const mainContainer =
    "w-screen h-auto bg-[#080b10]  grid grid-cols-1 place-content-center place-items-center";
  return (
    <div className={mainContainer}>{/* <TextToImage></TextToImage> */}</div>
  );
}

export default App;
