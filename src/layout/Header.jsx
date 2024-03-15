import OrangeButton from "../UI/OrangeButton";
import logopng from "../../images/ThinkSmarterLogo.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <img src={logopng} alt="logo" className={classes.headerLogo} />
        <h1 className={classes.logoLabel}>ThinkSmarter</h1>
      </div>
      <div className={classes.btns}>
        <OrangeButton>Log in</OrangeButton>
      </div>
    </header>
  );
};
export default Header;
