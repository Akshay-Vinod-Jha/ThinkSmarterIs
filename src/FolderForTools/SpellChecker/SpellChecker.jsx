import React, { useEffect, useState } from 'react'
import ToolsTitle from '../../UI/ToolsTitle';
import InputButtonCombo from '../../UI/InputButtonCombo';
function SpellChecker() {
    const [state,setState]=useState([]);
    useEffect(()=>{
        setState(JSON.parse(localStorage.getItem("SpellChecker")).edits);
    },[])
  return (
    <div className='w-screen p-2 mt-4 grid grid-cols-1 place-content-center place-items-center'>
      <ToolsTitle>Spell Checker</ToolsTitle>
      <InputButtonCombo></InputButtonCombo>
      {state.map((output)=>{
        console.log(output);
      })}
    </div>
  )
}

export default SpellChecker
