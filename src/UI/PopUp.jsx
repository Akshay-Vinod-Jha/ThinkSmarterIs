import Reveal from "../UI/Reveal.jsx";
import classes from "./Popup.module.css";

const PopUp = ({ content }) => {
  const { title, icon, description, bgColor, color } = content;
  return (
    <div className={classes.overlay}>
      <Reveal>
        <div
          className={classes.model}
          style={{ backgroundColor: bgColor, color: color }}
        >
          {icon}
          <div className={classes.right}>
            <h2 className={classes.h3}>{title}</h2>
            <p>{`${description}`}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default PopUp;
