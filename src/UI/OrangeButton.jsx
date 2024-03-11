import classes from "./OrangeButton.module.css";
const OrangeButton = (props) => {
  const { isLoading } = props;
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      style={{
        opacity: isLoading ? 0.5 : 1,
        cursor: isLoading ? "not-allowed" : "pointer",
      }}
      disabled={isLoading}
    >
      {props.children}
    </button>
  );
};

export default OrangeButton;
