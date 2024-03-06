import React from 'react'
import InputField from "./InputField"
import OrangeButton from './OrangeButton'
import { LuMonitorCheck } from "react-icons/lu";
function InputButtonCombo() {
  return (
    <div className='w-full flex lg:flex-row mt-4 flex-col justify-around items-center'>
            <div className='lg:w-[70%] w-[100%] text-base md:text-base lg:text-lg xl:text-lg'><InputField placeholder="Enter Sentence Here" type="text"></InputField></div>
            <div className='lg:w-[20%] w-[50%] text-base md:text-base lg:text-lg xl:text-lg'><OrangeButton>Check It<LuMonitorCheck className='text-base md:text-lg lg:text-xl'></LuMonitorCheck></OrangeButton></div>
      </div>
  )
}

export default InputButtonCombo
