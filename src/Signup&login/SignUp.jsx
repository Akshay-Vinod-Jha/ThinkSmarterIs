// import React from "react";
import logopng from "../../images/logopng.png";
import InputField from "../UI/InputField.jsx";
import classes from "./SignUp.module.css";
import signup from "../../images/signup.jpeg";
import OrangeButton from "../UI/OrangeButton.jsx";
import { FaGoogle } from "react-icons/fa";
import Reveal from "../UI/Reveal.jsx";
// import { IconContext } from "react-icons";
const SignUp = () => {
  return (
    <div className={classes["signup-cantainer"]}>
      <Reveal>
        <div className={classes.left}>
          <div className={classes.lefttop}>
            <h1 className={classes.welcometo}>Welcome to</h1>
            <img
              src={logopng}
              alt="ThinkSmarter"
              className={classes["welcome-image"]}
            />
          </div>
          <p className={classes.create}>Create your account</p>
          <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
            <label className={classes.label}>E-mail</label>
            <InputField type="email" />
            <label className={classes.label}>Password</label>
            <InputField type="password" placeholder="6+ Strong Character" />
            <label className={classes.label}>Repeat password</label>
            <InputField type="password" placeholder="6+ Strong Character" />
            <div className={classes.leftbottom}>
              <label className={classes["checkbox-label"]}>
                <input type="checkbox" className={classes.checkbox} />
                <p className={classes.remember}>Remember for 30 days</p>
              </label>
              <a className={classes["forget-password"]}>Forget password?</a>
            </div>
            <OrangeButton onClick={() => {}}>create an account</OrangeButton>
            <div className={classes.or}>or</div>
            <OrangeButton onClick={() => {}}>
              <FaGoogle color="white" fontSize="1.25em" />
              <p className={classes.signwith}>sign up with Google</p>
            </OrangeButton>
          </form>
        </div>
      </Reveal>
      <div className={classes.right}>
        <img src={signup} className={classes.singupimage} />
      </div>
    </div>
  );
};

export default SignUp;
