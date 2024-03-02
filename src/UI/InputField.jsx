import classes from "./InputField.module.css";
import { forwardRef } from "react";
const InputField = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className={classes.inputfield}
      placeholder={props.placeholder}
      type={props.type}
      required
    />
  );
});
export default InputField;
