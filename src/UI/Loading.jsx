import classes from "./Loading.module.css";
const Loading = (props) => {
  return (
    <div className={classes.loadingContainer + " font-lexend"}>
      <div className={classes.loader} style={{ width: props.size }}></div>
      {props.hasOwnProperty("label") && <p>{props.label}</p>}
    </div>
  );
};

export default Loading;
