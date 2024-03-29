import HomePage from "./layout/HomePage";
import SignUp from "./Signup&login/SignUp";
import TextExtraction from "./FolderForTools/TextExtraction/TextExtraction";
import TextToImage from "./FolderForTools/textToImage/TextToImage";
import SignIN from "./Signup&login/SignIN";
import VisionVerbalizer from "./FolderForTools/VisionVerbalizer/VisionVerbalizer";
import SpellChecker from "./FolderForTools/SpellChecker/SpellChecker";
import { createPortal } from "react-dom";
import PopUp from "./UI/PopUp";
import { useSelector } from "react-redux";
import { getPopUpState } from "./store/popupSlice";
import QA from "./FolderForTools/QA/QA";
import Summarizer from "./FolderForTools/Summarizer/Summarizer";
import Chatbot from "./FolderForTools/ChatBot/Chatbot";
import Dictionary from "./FolderForTools/Dictionary/Dictionary";
import TTS from "./FolderForTools/TextToSpeech/TTS";
import YT from "./FolderForTools/YoutubeTranscript/YT";
import AllToolsMainPage from "./layout/AllToolsMainPage/AllToolsMainPage";
import TTC from "./FolderForTools/TextToCode/TTC";
import { Route, Routes } from "react-router-dom";
import Translation from "./FolderForTools/Translation/Translation";
// import TextExtraction from "./FolderForTools/TextExtraction/TextExtraction";
import { auth } from "../firebase.config";
const App = () => {
  console.log(auth);
  const showPop = useSelector(getPopUpState);
  return (
    <div>
      {showPop.visible &&
        createPortal(
          <PopUp content={showPop.style} />,
          document.getElementById("popup")
        )}
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="SignIn" element={<SignIN />} />
          <Route path="AllToolsMainPage">
            <Route index element={<AllToolsMainPage />} />
            <Route path="VISUALIZEAI" element={<TextToImage />} />
            <Route path="VISIONVERBALIZER" element={<VisionVerbalizer />} />
            <Route path="AITRANSCRIBETUBE" element={<YT />} />
            <Route path="AIBRIEFBUDDY" element={<Summarizer />} />
            <Route path="INQUIRYRESPONSE" element={<QA />} />
            <Route path="SPELLCHECKER" element={<SpellChecker />} />
            <Route path="CODECRAFT" element={<TTC />} />
            <Route path="CHATBOT" element={<Chatbot />} />
            <Route path="INTELLIDICT" element={<Dictionary />} />
            <Route path="TRANSLATEXPERT" element={<Translation />} />
            <Route path="VOICESYNC" element={<TTS />} />
            <Route path="AIEXTRACTA" element={<TextExtraction />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
