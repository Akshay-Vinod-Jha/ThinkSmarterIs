import classes from "./InputField.module.css";
const InputField = (props) => {
  return (
    <input className={classes.inputfield} placeholder={props.placeholder} />
  );
};
export default InputField;
