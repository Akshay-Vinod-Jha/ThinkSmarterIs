import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import SliderCantainer from "./slider/SliderCantainer";
import React, { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Home />
      <SliderCantainer />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
