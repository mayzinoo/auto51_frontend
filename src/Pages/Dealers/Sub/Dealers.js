import React, { Fragment } from "react";
// css
import "@fortawesome/fontawesome-free";
import "../Components/styles/dealer.css";
//components
import Businesscar from "../Components/Businesscar";
import Services from "../Components/Services";
import Subscription from "../Components/Subscription";
import Interest from "../Components/Interest";
import About from "../Components/About";
import Corporate from "../Components/Corporate";

const Dealers = () => {
  return (
    <Fragment>
      <Businesscar />
      <Services />
      <Subscription />
      <Interest />
      <About />
      <Corporate />
    </Fragment>
  );
};

export default Dealers;
