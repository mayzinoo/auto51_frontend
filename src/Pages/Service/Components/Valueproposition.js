/* eslint-disable jsx-a11y/anchor-is-valid */
import "@fortawesome/fontawesome-free/js/all";
import { useState } from "react";
//component
import { Row, Col } from "react-bootstrap";
//css
import "./styles/valueproposition.css";
const ValueProp = (props) => {
  const [insuranceReadMore, setInsuranceReadMore] = useState(false);
  const [serviceReadMore, setServiceReadMore] = useState(false);
  const [flexiblReadMore, setFlexiblReadMore] = useState(false);
  const [choiceReadMore, setChoiceReadMore] = useState(false);
  const insuranceText =
    "In exchange for your paying a premium, the insurance company agrees to pay your losses as outlined in your policy.";
  const serviveText =
    "Vehicle Maintenance means service, repair, or maintenance of any type of motor vehicle, including but not limited to: vehicle and equipment rehabilitation and mechanical repairs.";
  const flexibleText =
    "Any pricing strategy that tries to split value creation somewhat evenly between a firm and its customers. This is in contrast to raising prices as high as consumers will pay.";
  const choiceText =
    "Put a positive spin on things to take some pressure off your decision: Rather than being stuck, you are lucky to have 2 good choices.";

  return (
    <div className="valueprop-container">
      <div className="valueprop-banner">
        <div className="services-columns">
          <Row>
            <Col md={3}>
              <span>01.</span>
              <h3>Insurance</h3>
              <p>
                {insuranceReadMore
                  ? insuranceText
                  : `${insuranceText.substring(0, 100)}`}
              </p>
              <a onClick={() => setInsuranceReadMore(!insuranceReadMore)}>
                {insuranceReadMore ? "Read Less <<" : "Read More >>"}
              </a>
            </Col>
            <Col md={3}>
              <span>02.</span>
              <h3>Flexible Usage and Pricing</h3>
              <p>
                {flexiblReadMore
                  ? flexibleText
                  : `${flexibleText.substring(0, 100)}`}
              </p>
              <a onClick={() => setFlexiblReadMore(!flexiblReadMore)}>
                {flexiblReadMore ? "Read Less <<" : "Read More >>"}
              </a>
            </Col>
            <Col md={3}>
              <span>03.</span>
              <h3>Maintenance & Servicing</h3>
              <p>
                {serviceReadMore
                  ? serviveText
                  : `${serviveText.substring(0, 100)}`}
              </p>
              <a onClick={() => setServiceReadMore(!serviceReadMore)}>
                {serviceReadMore ? "Read Less <<" : "Read More >>"}
              </a>
            </Col>
            <Col md={3}>
              <span>04.</span>
              <h3>Choice of Right Vehicles</h3>
              <p>
                {choiceReadMore
                  ? choiceText
                  : `${choiceText.substring(0, 100)}`}
              </p>
              <a onClick={() => setChoiceReadMore(!choiceReadMore)}>
                {choiceReadMore ? "Read Less <<" : "Read More >>"}
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ValueProp;
