import OrangeButton from "../UI/OrangeButton";
import logopng from "../../images/ThinkSmarterLogo.png";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <img src={logopng} alt="logo" className={classes.headerLogo} />
        <h1 className={classes.logoLabel}>ThinkSmarter</h1>
      </div>
      <div className={classes.btns}>
        <OrangeButton onClick={() => navigate("/signIN")}>Sign in</OrangeButton>
      </div>
    </header>
  );
};
export default Header;
