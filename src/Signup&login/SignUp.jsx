// import React from "react";
import logopng from "../../images/logopng.png";
import InputField from "../UI/InputField.jsx";
import classes from "./SignUp.module.css";
import signup from "../../images/signup.jpeg";
import OrangeButton from "../UI/OrangeButton.jsx";
import { FaGoogle } from "react-icons/fa";
// import { IconContext } from "react-icons";

const SignUp = () => {
  return (
    <div className={classes["signup-cantainer"]}>
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
          <InputField />
          <label className={classes.label}>Password</label>
          <InputField />
          <label className={classes.label}>Repeat password</label>
          <InputField />
          <div className={classes.leftbottom}>
            <label className={classes["checkbox-label"]}>
              <input type="checkbox" className={classes.checkbox} />
              Remember for 30 days
            </label>
            <a className={classes["forget-password"]}>Forget password</a>
          </div>
          <OrangeButton>create an account</OrangeButton>
          <OrangeButton>
            <FaGoogle color="white" fontSize="1.25em" />
            <p className={classes.signwith}>sign up with Google</p>
          </OrangeButton>
        </form>
      </div>
      <div>
        <img src={signup} className={classes.singupimage} />
      </div>
    </div>
  );
};

export default SignUp;
