//libraries
import React, { Fragment } from "react";
//components
import { Container } from "react-bootstrap";
//css
import "./styles/about.css";

function About(props) {
  return (
    <Fragment>
      <div className="business-container-wrap">
        <Container className="ab-container">
          <h1 className="ab-mainHeader">About Auto 51</h1>
          <div className="ab-header-wrap">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <p className="ab-subHeader">
                  Auto 51 was founded here in Singapore by two automotive
                  enthusiasts and veterans with over 25 years of industry
                  experience from Grab, Uber and Hertz. Auto 51's mission to
                  offer all the benefits of car ownership, but none of the
                  hassle.
                </p>
                <p className="ab-subHeader">
                  Our Concierge team is always ready to assist you in selecting
                  the right car model and subscription period and answer any
                  questions that might arise during the subscription period.{" "}
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <img
                  className="ab-hide-Image"
                  src="https://st.depositphotos.com/2528559/2859/i/600/depositphotos_28592441-stock-photo-blue-car-front-view.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default About;
