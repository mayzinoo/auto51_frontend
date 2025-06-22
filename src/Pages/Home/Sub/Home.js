//Libraries
import React, { Fragment } from "react";
import { connect } from "react-redux";
//Component
import RevolutionSlider from "../Components/RevolutionSlider";
import NewVehicleFilter from "../Components/NewVehicleFilter";
import ChooseUs from "../Components/ChooseUs";
import FeaturedVehicle from "../Components/FeaturedVehicle";
import ShowRoom from "../Components/ShowRoom";
import UserGuide from "../Components/UserGuide";
//CSS
import "../Components/styles/Home.css";

const Home = () => {
  return (
    <Fragment>
      <RevolutionSlider />
      <NewVehicleFilter />
      <ChooseUs />
      <FeaturedVehicle />
      <ShowRoom />
      <UserGuide />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Home);
