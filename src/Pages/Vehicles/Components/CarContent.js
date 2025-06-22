/* eslint-disable jsx-a11y/iframe-has-title */
import { React, useState } from 'react'
import './styles/CarContent.css'
import { TiTickOutline } from "react-icons/ti";
import {
  Row,
  Col,
  Form,
} from 'react-bootstrap';
function CarContent() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container-tab">
      <div className="bloc-tabs">
        <button 
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Vehicle Overview
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Feature & Options
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Request information
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <div className="overview-tab" id="vehicle-tabContent">
            <p>
              <strong>Black Full leather interior, 2 seats, Metallic Imola Grey, We are delighted to offer this stunning Mercedes SLS AMG Roadster for sale.
                Finished in a very nice AMG colour of Imola Grey with a Black Soft Top and Black Soft Semi Anilin Leather the car is very stylish indeed.
              </strong>
            </p>
            <p>
              This beautiful car benefits from the following equipment : AMG Carbon Fibre Trim; Reversing Camera;
              Blind Spot Assistant; Auto Dimming Interior & Exterior Mirrors; Electric Seats with Memory;
              AMG Performance Steering Wheel in Leather & Alcantara; AIRSCARF; Tyre Pressure Monitoring System;
              AMG Ride Control sports Suspension with Adjustable Damper System; Electric Folding Exterior Mirrors;
              COMAND APS with DVD Changer; Media Interface; Thermotronic Climate Control; Bi Xenon Headlamps; AMG Polished Alloy Wheels.
            </p>
            <p>
              This car is immaculate in every way – a simply stunning vehicle that would give years of pleasure and enjoyment or could grace any collection!
            </p>
            <Row>
              <Col md = {6} style={{paddingBottom:'20px'}}>
                <h4 className="tab1-header">Running Costs</h4>

                <TiTickOutline className="tick" /> 18″ 5-Spoke Light-Alloy Wheels
                <br />
                <br />
                <TiTickOutline className="tick" />  4-Wheel Disc Brakes
                <br />
                <br />
                <TiTickOutline className="tick" />  ABS brakes
                <br />
                <br />
                <TiTickOutline className="tick" />  AM/FM radio: SiriusXM
                <br />
                <br />
                <TiTickOutline className="tick" /> Adaptive suspension
              </Col>
              <Col md = {6}>
                <h4 className="tab1-header">Performance</h4>
                <TiTickOutline className="tick" /> Auto tilt-away steering wheel
                <br />
                <br />
                <TiTickOutline className="tick" /> Auto-dimming Rear-View mirror
                <br />
                <br />
                <TiTickOutline className="tick" />  Auto-dimming door mirrors
                <br />
                <br />
                <TiTickOutline className="tick" /> Auto-leveling suspension
                <br />
                <br />
                <TiTickOutline className="tick" /> Automatic temperature control
              </Col>
            </Row>
          </div>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <div className="tab2-content">
            <h3 className="tab2-header">2019 LEXUS IS 200t Fsport </h3>
            <p>This is general model information, and some of the features and/or specifications mentioned may not be available on all vehicles.</p>
            <h3 className="tab2-header">Summary </h3>
            <p>The 2013 Mercedes-Benz CL-Class comes in CL550 4MATIC, CL600, CL63 AMG and CL65 AMG models.
              The CL550 is powered by a 4.6L bi-turbo V8 engine that makes 429 horsepower.
              The CL600 comes with a 5.5L bi-turbo V12 that makes 510 horsepower.
              The CL63 AMG features an impressive 536-horsepower 5.5L V8 and the CL65 AMG comes with a 6.0L bi-turbo V12 that makes an astonishing 621 horsepower.
              On the CL63, an optional AMG Performance Package boosts the engine’s output to 563 hp and 664 lb-ft and makes that the choice for any who plan to bring this big luxury coupe out for track time.
            </p>
            <Row>
              <Col md = {6} className = 'column-group'>
                <h4 className="tab2-header">Engine</h4>
                <br />
                <li>Engine Type <strong className="tab2-bold">4.6L Gas V8</strong></li>
                <div className="dotted-line"></div>
                <li>Horsepower <strong className="tab2-bold">429 @ 5250 rpm</strong></li>
                <div className="dotted-line"></div>
                <li>Torque(lb-ft) <strong className="tab2-bold">516 @ 1800-3500 rpm</strong></li>
                <div className="dotted-line"></div>
                <li>Fuel Capacity <strong className="tab2-bold">21.9 gal</strong></li>
                <div className="dotted-line"></div>
                <li>Driven Wheels <strong className="tab2-bold">AWD</strong></li>
                <div className="dotted-line"></div>
              </Col>
              <Col md = {6} className = 'column-group'>
                <h4 className="tab2-header">Wheels </h4>
                <br />
                <li>Engine Type <strong className="tab2-bold">4.6L Gas V8</strong></li>
                <div className="dotted-line"></div>
                <li>Horsepower <strong className="tab2-bold">429 @ 5250 rpm</strong></li>
                <div className="dotted-line"></div>
                <li>Torque(lb-ft) <strong className="tab2-bold">516 @ 1800-3500 rpm</strong></li>
                <div className="dotted-line"></div>
                <li>Fuel Capacity <strong className="tab2-bold">21.9 gal</strong></li>
                <div className="dotted-line"></div>
                <li>Driven Wheels <strong className="tab2-bold">AWD</strong></li>
                <div className="dotted-line"></div>
              </Col>
            </Row>
            <Row>
              <Col md = {6} className = 'column-group'>
                <h4 className="tab2-header">Vehicle </h4>
                <br />
                <li>Curb Weight <strong className="tab2-bold">4619.0 lbs</strong></li>
                <div className="dotted-line"></div>
                <li>Wheelbase <strong className="tab2-bold">116.3 in.</strong></li>
                <div className="dotted-line"></div>
                <li>Height <strong className="tab2-bold">55.8 in.</strong></li>
                <div className="dotted-line"></div>
              </Col>
              <Col md = {6} className = 'column-group'>
                <h4 className="tab2-header">Interior Space </h4>
                <br />
                <li>Seating Capacity <strong className="tab2-bold">4</strong></li>
                <div className="dotted-line"></div>
                <li>Front Headroom/Legroom <strong className="tab2-bold">36.9 in. / 42.2 in.</strong></li>
                <div className="dotted-line"></div>
                <li>Rear Headroom/Legroom <strong className="tab2-bold">36.4 in. / 32.2 in.</strong></li>
                <div className="dotted-line"></div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={toggleState === 3 ? "content  active-content" : "content"}>
          <div className="tab3-content">
            <iframe src="//maps.google.com/maps?q=%201011%20L%20St%20NW%2CWashington%2C%20DC%2020001%2CHoa%20K%E1%BB%B3%20&amp;output=embed" title="" ></iframe>
          </div>
          <br />
          <div>
            <Row>
              <Col md="6">
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>YOUR NAME</Form.Label>
                    <Form.Control type="name" placeholder="John Doe" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>YOUR EMAIL</Form.Label>
                    <Form.Control type="email" placeholder="johndoe@gmail.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>MOBILE NUMBER</Form.Label>
                    <Form.Control type="input" placeholder="+1-888-456-8888" />
                  </Form.Group>
                </Form>
              </Col>
              <Col md="6">
                <Form.Label>YOUR MESSAGE</Form.Label>
                <textarea name="your-message" cols="40" rows="10" className="message-box" aria-invalid="false"></textarea>
              </Col>
            </Row>
            <input type="submit" value="SUBMIT FORM" className="submit-btn"></input>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CarContent;


