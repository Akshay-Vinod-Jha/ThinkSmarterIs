import classes from "./WhiteButton.module.css";
const WhiteButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default WhiteButton;
