import InputField from "../UI/InputField.jsx";
import classes from "./SignUp.module.css";
import OrangeButton from "../UI/OrangeButton.jsx";
import { FaGoogle } from "react-icons/fa";
import Reveal from "../UI/Reveal.jsx";
import { useRef, useCallback, useState } from "react";
import { hidePopUp, showPopUp } from "../store/popupSlice.jsx";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase.config.js";
import { FaCheckCircle } from "react-icons/fa";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { MdError } from "react-icons/md";
import Loader from "../UI/Loader.jsx";

const SignIN = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkboxRef = useRef();
  const [checkbox, setCheckbox] = useState(false);
  const [isValidEmail, setIsvalidEmail] = useState(true);
  const [isValidPassword, setIsvalidPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const errorHandler = useCallback(() => {
    dispatch(
      showPopUp({
        color: "#892330",
        bgColor: "#e5c2c2",
        title: "Something went Wrong!",
        description: "Invalid Credential is Provided!",
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

  const signInHandler = useCallback(async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      successHandler();
    } catch {
      errorHandler();
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signInWithGoogleHandler = useCallback(async (e) => {
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
    if (
      isValidEmail &&
      isValidPassword &&
      email.length &&
      password.length >= 6
    ) {
      setIsLoading(true);
      signInHandler(email, password);
    } else {
      setIsvalidEmail(email.length);
      setIsvalidPassword(password.length >= 6);
    }
  }, []);

  return (
    <div
      className={`${classes["signup-cantainer"]} ${classes["signIn-cantainer"]}`}
    >
      <Reveal>
        <div className={classes.left}>
          <div className={classes.lefttop}>
            <h1 className={classes.welcometo}>Welcome Back !</h1>
          </div>
          <p className={classes.create}>
            Sign in to access your dashboard <br />
            settings and tasks
          </p>
          <form className={classes.form}>
            <label className={classes.label}>
              Email {!isValidEmail && <p>*Invalid Email</p>}
            </label>
            <InputField
              type="email"
              ref={emailRef}
              onChange={() => {
                const email = emailRef.current.value.trim();
                setIsvalidEmail(email.length >= 6 && validateEmail(email));
              }}
            />
            <label className={classes.label}>
              Password {!isValidPassword && <p>*Incorrect Passoword</p>}
            </label>
            <InputField
              type="password"
              ref={passwordRef}
              onChange={() =>
                setIsvalidPassword(passwordRef.current.value.trim().length >= 6)
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
                <p className={classes.remember}> Keep me signed in</p>
              </label>
              {/* <a className={classes["forget-password"]}>Forget password?</a> */}
            </div>
            <OrangeButton
              onClick={formSubmitHandler}
              disabled={isValidEmail && isValidPassword && checkbox}
              isLoading={isLoading}
            >
              {isLoading && <Loader />}
              {isLoading ? "Signing.." : "Sign In"}
            </OrangeButton>
            <div className={classes.or}>or</div>
            <OrangeButton onClick={signInWithGoogleHandler}>
              <FaGoogle color="white" fontSize="1.25em" />
              <p className={classes.signwith}>sign up with Google</p>
            </OrangeButton>
            <p className={classes.remember}>
              Don’t have an account? <a className={classes.signupp}>sign-up</a>
            </p>
          </form>
        </div>
      </Reveal>
      <div className={`${classes.right} ${classes.ready}`}>
        <h1 className={classes.readdy}>
          Are you <br />
          Ready?
        </h1>
        <button
          className={classes.start}
          onClick={() => {
            emailRef.current.focus();
          }}
        >
          Start
        </button>
        <p className={classes.protected}>
          This site is protected. Your data will not be shared with anyone.
        </p>
      </div>
    </div>
  );
};

export default SignIN;
