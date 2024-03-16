import classes from "./OrangeButton.module.css";
const OrangeButton = (props) => {
  const { isLoading } = props;
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      style={{
        opacity:
          isLoading || (props.hasOwnProperty("disabled") && !props.disabled)
            ? 0.5
            : 1,
        cursor:
          isLoading || (props.hasOwnProperty("disabled") && !props.disabled)
            ? "not-allowed"
            : "pointer",
      }}
      disabled={
        isLoading || (props.hasOwnProperty("disabled") && !props.disabled)
      }
    >
      {props.children}
    </button>
  );
};

export default OrangeButton;
