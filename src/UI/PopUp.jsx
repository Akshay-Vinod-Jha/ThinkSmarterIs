import Reveal from "../UI/Reveal.jsx";
import classes from "./Popup.module.css";

export const OverLay = ({ children }) => {
  return <div className={classes.overlay}>{children}</div>;
};

const PopUp = ({ content }) => {
  const { title, icon, description, bgColor, color } = content;
  return (
    <OverLay>
      <Reveal>
        <div className={classes.lastOption}>
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
        </div>
      </Reveal>
    </OverLay>
  );
};

export default PopUp;
