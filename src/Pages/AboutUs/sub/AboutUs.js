//libraries
import React, { Fragment } from "react";
//components
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import carImage from "../../../assets/images/aboutus.png";
import howitworksImage from "../../../assets/images/business2.png";
import Space from "../components/Space";
import ItemBoxes from "../components/ItemBoxes";

//css
import "../components/styles/aboutUs.css";

function AboutUs(props) {
  return (
    <Fragment>
      <Header />
      <Container className="image-container">
        <img src={carImage} alt="" className="car-image" />
      </Container>
      <Container className="paragraph-container">
        <div className="paragraph-div">
          <p className="paragraph">
            AUTO 51 Pte Ltd was first incorporated in year 2010. Started as a small second hand car
dealer, over the years, AUTO 51 and its subsidiaries have expanded into selling a wide range of
vehicles namely from Japanese, Korea, Continental for 4-13 seater in the private sector as
well as covering commercial trucks.
          </p>
          <p className="paragraph">
            Over the years, AUTO 51 have expanded into chauffeur limousine service, vehicle leasing, in-
house vehicle financial loans, logistics delivery for hypermarket and parcel industry sector.

Equipped with vast experience in the transport industry and our one-stop solution service
provided to each client, enable us to serve them with utmost professionalism. Their journey
with us goes beyond just one transaction.
          </p>
        </div>
      </Container>

      <Space />
      <Container className="image-container">
        <img src={howitworksImage} alt="" className="car-image2" />
      </Container>
      <Container className="mini-container">
        <p className="para-text">
          How does it work? Simple. It’s a fully digital service. Subscribe
          online in 3 minutes and we’ll deliver the car to your doorstep within
          typically 24 hours.
          <br />
          <br />
          Auto 51 was founded here in Singapore by two automotive enthusiasts
          and veterans with over 25 years of industry experience from Grab, Uber
          and Hertz.
          <br />
          <br />
          Our goal is to enable everyone to get their ideal car and allow them
          to easily switch cars as their lifestyle changes over time. Just add
          fuel and enjoy your drive!
          <br />
          <br />
          <span className="" style={{ color: "#00a55e", fontSize: "23px", marginRight: "5px" }}>
            Own an experience
          </span>
          not a car.
        </p>
      </Container>
      <Container className="header-container2">
        <h2 className="sub-header2">Find Your Ideal Auto51 Auto Car</h2>
      </Container>
      <ItemBoxes />
    </Fragment>
  );
}

export default AboutUs;
