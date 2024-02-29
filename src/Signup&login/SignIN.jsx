// import React from "react";
// import logopng from "../../images/logopng.png";
import InputField from "../UI/InputField.jsx";
import classes from "./SignUp.module.css";
import signup from "../../images/signup.jpeg";
import OrangeButton from "../UI/OrangeButton.jsx";
import { FaGoogle } from "react-icons/fa";
// import { IconContext } from "react-icons";

const SignIN = () => {
  return (
    <div
      className={`${classes["signup-cantainer"]} ${classes["signIn-cantainer"]}`}
    >
      <div className={classes.left}>
        <div className={classes.lefttop}>
          <h1 className={classes.welcometo}>Welcome Back !</h1>
        </div>
        <p className={classes.create}>
          Sign in to access your dashboard <br />
          settings and tasks
        </p>
        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
          <label className={classes.label}>E-mail</label>
          <InputField type="text" />
          <label className={classes.label}>Password</label>
          <InputField type="password" />

          <div className={classes.leftbottom}>
            <label className={classes["checkbox-label"]}>
              <input type="checkbox" className={classes.checkbox} />
              <p className={classes.remember}> Keep me signed in</p>
            </label>
            <a className={classes["forget-password"]}>Forget password?</a>
          </div>
          <OrangeButton onClick={() => {}}>Sign In</OrangeButton>
          <div className={classes.or}>or</div>
          <OrangeButton onClick={() => {}}>
            <FaGoogle color="white" fontSize="1.25em" />
            <p className={classes.signwith}>sign up with Google</p>
          </OrangeButton>
          <p className={classes.remember}>
            Don’t have an account? <a className={classes.signupp}>sign-up</a>
          </p>
        </form>
      </div>
      <div className={classes.right}>
        <img src={signup} className={classes.singupimage} />
      </div>
    </div>
  );
};

export default SignIN;
