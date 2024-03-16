// import React from "react";
import logopng from "../../images/ThinkSmarterLogo.png";
import InputField from "../UI/InputField.jsx";
import classes from "./SignUp.module.css";
import signup from "../../images/signup.jpeg";
import OrangeButton from "../UI/OrangeButton.jsx";
import { FaGoogle } from "react-icons/fa";
import Reveal from "../UI/Reveal.jsx";
import { useRef, useState, useCallback } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.config.js";
import { showPopUp, hidePopUp } from "../store/popupSlice.jsx";
import { useDispatch } from "react-redux";
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import Loader from "../UI/Loader.jsx";

const SignUp = () => {
  const dispatch = useDispatch();
  const [isValidEmail, setIsvalidEmail] = useState(true);
  const [isValidPassword, setIsvalidPassword] = useState(true);
  const [isValidRepeatPassword, setIsValidRepeatPassword] = useState(true);
  const [eheckbox, setCheckbox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const errorHandler = useCallback((message) => {
    dispatch(
      showPopUp({
        color: "#892330",
        bgColor: "#e5c2c2",
        title: "Something went Wrong!",
        description: message,
        icon: <MdError color="#892330" fontSize="2.25rem" />,
      })
    );
    setTimeout(() => {
      dispatch(hidePopUp());
    }, 5000);
  }, []);

  const successHandler = useCallback(() => {
    dispatch(
      showPopUp({
        color: "#fefefe",
        bgColor: "#2c2c2c",
        title: "Congratulations!",
        description: "You are Successfully Authenticated.",
        icon: <FaCheckCircle color="#71c346" fontSize="2.25rem" />,
      })
    );
    setTimeout(() => {
      dispatch(hidePopUp());
    }, 5000);
  }, []);

  const signUpHandler = useCallback(async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      successHandler();
    } catch (err) {
      errorHandler(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUpWithGoogleHandler = useCallback(async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });
      const response = await signInWithPopup(auth, provider);
      console.log(response);
      successHandler();
    } catch (err) {
      errorHandler(err.message);
    }
  }, []);

  const formSubmitHandler = useCallback((e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const repeatpassword = repeatPasswordRef.current.value.trim();
    if (
      isValidEmail &&
      isValidPassword &&
      isValidRepeatPassword &&
      email.length &&
      password.length >= 6 &&
      repeatpassword.length >= 6
    ) {
      setIsLoading(true);
      signUpHandler(email, password);
    } else {
      setIsvalidEmail(email.length);
      setIsvalidPassword(password.length);
      setIsValidRepeatPassword(repeatpassword.length);
    }
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const checkboxRef = useRef(null);

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
          <form className={classes.form}>
            <label className={classes.label}>
              Email
              {!isValidEmail && <p>*Invalid Email</p>}
            </label>
            <InputField
              type="email"
              placeholder="Enter Email Here"
              ref={emailRef}
              onChange={() =>
                setIsvalidEmail(
                  validateEmail(emailRef.current.value) &&
                    emailRef.current.value.trim().length
                )
              }
            />
            <label className={classes.label}>
              Password
              {!isValidPassword && <p>*Incorrect Password</p>}
            </label>
            <InputField
              type="password"
              placeholder="6+ Strong Character"
              ref={passwordRef}
              onChange={() =>
                setIsvalidPassword(passwordRef.current.value.trim().length >= 6)
              }
            />
            <label className={classes.label}>
              Repeat password
              {!isValidRepeatPassword && <p>*Incorrect Password</p>}
            </label>
            <InputField
              type="password"
              placeholder="6+ Strong Character"
              ref={repeatPasswordRef}
              onChange={() =>
                setIsValidRepeatPassword(
                  passwordRef.current.value ===
                    repeatPasswordRef.current.value &&
                    repeatPasswordRef.current.value.trim().length >= 6
                )
              }
            />
            <div className={classes.leftbottom}>
              <label className={classes["checkbox-label"]}>
                <input
                  type="checkbox"
                  className={classes.checkbox}
                  ref={checkboxRef}
                  onChange={(e) => setCheckbox(e.target.checked)}
                />
                <p className={classes.remember}>Remember for 30 days</p>
              </label>
              {/* <a className={classes["forget-password"]}>Forget password?</a> */}
            </div>

            <OrangeButton
              isLoading={isLoading}
              onClick={formSubmitHandler}
              disabled={
                isValidEmail &&
                isValidPassword &&
                isValidRepeatPassword &&
                eheckbox
              }
            >
              {isLoading && <Loader />}
              {isLoading ? ` Creating An Account` : `Create An Account`}
            </OrangeButton>
            <div className={classes.or}>or</div>
            <OrangeButton onClick={signUpWithGoogleHandler}>
              <FaGoogle color="white" fontSize="1.25em" />
              <p className={classes.signwith}>SignUp With Google</p>
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
