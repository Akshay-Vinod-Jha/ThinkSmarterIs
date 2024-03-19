import OrangeButton from "../UI/OrangeButton";
import logopng from "../../images/ThinkSmarterLogo.png";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
const Header = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    if (auth.currentUser) {
      navigate("AllToolsMainPage", { state: { userId: auth.currentUser.uid } });
    } else {
      navigate("SignIN");
    }
  };
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <img src={logopng} alt="logo" className={classes.headerLogo} />
        <h1 className={classes.logoLabel}>ThinkSmarter</h1>
      </div>
      <div className={classes.btns}>
        <OrangeButton onClick={navigateHandler}>Sign in</OrangeButton>
      </div>
    </header>
  );
};
export default Header;
