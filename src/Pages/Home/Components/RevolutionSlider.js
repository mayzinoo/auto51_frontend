//Library
import React, { Fragment } from "react";
//Component
import { Carousel, Container } from "react-bootstrap";
// Css
import "./styles/RevolutionSlider.css";

function RevolutionSlider(props) {
  return (
    <Fragment>
      <Carousel className="main-carousel" fade>
        <Carousel.Item interval={7500} className="first-carousel-item">
          <Container className="carousel-container">
            <div className="carousel-content-container">
              <h1 className="carousel-title">FAST & EASY WAY <span style={{color:"#02a854"}}>TO RENT A CAR</span></h1>
              <h4 className="carousel-Subtitle">Easy steps for renting a car</h4>
              
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item interval={7500} className="second-carousel-item">
          <Container>
            <div className="carousel-content-container">
              <h1 className="carousel-title">FAST & EASY WAY <span style={{color:"#02a854"}}>TO RENT A CAR</span></h1>
              <h4 className="carousel-Subtitle">Easy steps for renting a car</h4>
              
            </div>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default RevolutionSlider;
