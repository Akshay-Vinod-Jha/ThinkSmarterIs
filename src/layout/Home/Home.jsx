// import React from "react";
import OrangeButton from "../../UI/OrangeButton";
import WhiteButton from "../../UI/WhiteButton";
import HomeAnimation from "./HomeAnimation";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div className={classes["home-cantainer"]}>
      <HomeAnimation />
      <div>
        <h1 className={classes.heading}>
          {["Your", "One-Stop", "Shop", "for"].map((val, ind) => {
            return (
              <span key={`span${ind}`} className={classes.span}>
                {val}
              </span>
            );
          })}
          <br />
          {["AI", "Tools", "and", "Solutions"].map((val, ind) => {
            return (
              <span className={classes.span} key={`spann${ind}`}>
                {val}
              </span>
            );
          })}
        </h1>
        <div className={classes.homeBtns}>
          <OrangeButton>Explore More</OrangeButton>
          <WhiteButton>Know More</WhiteButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
