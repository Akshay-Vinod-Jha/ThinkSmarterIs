import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import SliderCantainer from "./slider/SliderCantainer";

import React from "react";

const HomePage = () => {
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
