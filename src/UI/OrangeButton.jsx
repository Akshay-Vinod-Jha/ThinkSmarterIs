import classes from "./OrangeButton.module.css";
const OrangeButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default OrangeButton;
