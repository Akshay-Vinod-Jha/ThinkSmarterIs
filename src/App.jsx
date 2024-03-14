import SliderCantainer from "./layout/slider/SliderCantainer";
import Header from "./layout/Header";
import Home from "./layout/Home/Home";
import Footer from "./layout/Footer";
import SignUp from "./Signup&login/SignUp";
import TextToImage from "./FolderForTools/textToImage/TextToImage";
import SignIN from "./Signup&login/SignIN";
import VisionVerbalizer from "./FolderForTools/VisionVerbalizer/VisionVerbalizer";
import SpellChecker from "./FolderForTools/SpellChecker/SpellChecker";
import { createPortal } from "react-dom";
import PopUp from "./UI/PopUp";
import { useSelector } from "react-redux";
import { getPopUpState } from "./store/popupSlice";
import TextExtraction from "./FolderForTools/TextExtraction/TextExtraction";
import QA from "./FolderForTools/QA/QA";
import Summarizer from "./FolderForTools/Summarizer/Summarizer";
import Chatbot from "./FolderForTools/ChatBot/Chatbot";
const App = () => {
  const showPop = useSelector(getPopUpState);
  return (
    <div>
      {showPop.visible &&
        createPortal(
          <PopUp content={showPop.style} />,
          document.getElementById("popup")
        )}
      <Chatbot />
    </div>
  );
};
export default App;
