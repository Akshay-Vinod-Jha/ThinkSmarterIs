import OrangeButton from "../UI/OrangeButton";
import logopng from "../../images/logopng.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logopng} alt="logo" className={classes.headerLogo} />
      <div className={classes.btns}>
        <OrangeButton>Log in</OrangeButton>
      </div>
    </header>
  );
};
export default Header;
