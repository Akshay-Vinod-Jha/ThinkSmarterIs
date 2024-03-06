import {copyTextToClipboard} from '../common-funtions/copy'
import { FaRegCopy } from "react-icons/fa6";
import classes from './Copy.module.css'
import { useState ,Fragment} from 'react';
const Copy = ({size,text}) => {
    const [copy,setCopy]= useState(false)
    
    return <div
    className={classes.copy}
    onClick={() => {
        copyTextToClipboard(text)
    setCopy((copy)=>!copy)
    setTimeout(() => {
        setCopy((copy)=>!copy)

    }, 1000);
    }}
  >
   {copy ? <p>Copied</p>: <Fragment> Copy
    <FaRegCopy
      fontSize={size}
      color="rgba(255,255,255,0.75)"
      className={classes.icon}
    /></Fragment>}
  </div>
}

export default Copy;