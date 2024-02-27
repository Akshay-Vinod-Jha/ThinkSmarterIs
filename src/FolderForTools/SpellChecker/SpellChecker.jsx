import cssClasses from "./SpellChecker.module.css";
import BigContainer from "./SpellCheckerComponents/BigContainer";
import DisplaySentence from "./SpellCheckerComponents/DisplaySentence";
import ErrorBox from "./SpellCheckerComponents/ErrorBox";
import StartEnd from "./SpellCheckerComponents/StartEnd";
function SpellChecker() {
  const spellCheckerResponse = JSON.parse(localStorage.getItem("SpellChecker"));
  //   console.log(spellCheckerResponse);
  return (
    <div className="w-[100%] md:w-[95%] h-auto px-2 py-1 text-sm md:text-base lg:text-lg xl:text-xl gap-4 grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
      {spellCheckerResponse.edits.map((eachIterationValue, key) => {
        console.log(eachIterationValue.error_type);
        return (
          <BigContainer key={key}>
            <ErrorBox errorType={"Error Type :-"}>
              {eachIterationValue.error_type}
            </ErrorBox>
            <ErrorBox errorType={"General Error Type :-"}>
              {eachIterationValue.general_error_type}
            </ErrorBox>
            <StartEnd errorType={"Start :-"}>
              {eachIterationValue.start}
            </StartEnd>
            <StartEnd errorType={"End :-"}>{eachIterationValue.end}</StartEnd>
            <DisplaySentence
              first={"Original Sentence"}
              second={eachIterationValue.sentence}
            ></DisplaySentence>
            <DisplaySentence
              first={"Replacement Sentence"}
              second={eachIterationValue.replacement}
            ></DisplaySentence>
          </BigContainer>
        );
      })}
    </div>
  );
}
export default SpellChecker;
