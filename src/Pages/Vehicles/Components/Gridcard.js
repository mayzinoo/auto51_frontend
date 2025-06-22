//Libraries
import React from "react";
import ReactHtmlParser from "react-html-parser";
//CSS
import "./styles/Gridcard.css";
import { Card } from "react-bootstrap";

function Gridcard(props) {

  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  return (
    <Card className="item">
      <a href={props.href}>
        <div className="popular-item">
          <span className="catego-title">{props.titleStatus}</span>
        </div>
        <img
          src={props.src}
          alt=""
          className="vehicleImg"
        />

        <h4 className="vehicle-title">
          <p>{props.hrefValue}</p>
        </h4>
        <div className="vehicle-description">
          {ReactHtmlParser(props.pValue)}
        </div>
        <div className="vehicle-status">{props.pricingStatus}</div>
        <div className="vehicle-specs" style={{ justifyContent: "space-between", display: 'flex' }}>
          <div style={{ display: "flex" }}>
            <i>
              <img src={require('../../../assets/images/car-calender.svg').default} alt='mySvgImage'
                style={{ width: '17px', height: '21px', marginTop: '-4px' }} />
            </i>
            <div>{props.spanRegistration}</div>
          </div>

          <div style={{ display: "flex" }} >
            <i>
              <img src={require('../../../assets/images/car_door.svg').default} alt='mySvgImage'
                style={{ width: '21px', height: '21px', marginTop: '-4px' }} />
            </i>
            <div>{props.spanDoor}</div>
          </div>

          <div style={{ display: "flex" }}>
            <i>
              <img src={require('../../../assets/images/car_seat.svg').default} alt='mySvgImage'
                style={{ width: '29px', height: '21px', marginTop: '-4px' }} />
            </i>
            <div style={{ marginLeft: '-6px' }}>{props.spanSeat}</div>
          </div>
        </div>
        {/*    <div className="row vehicle-specs">
          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ display: "flex" }}
          >
            <i>
              <img src={require('../../../assets/images/car-calender.svg').default} alt='mySvgImage'
                style={{ width: '17px', height: '21px', marginTop: '-4px' }} />
            </i>
            <div>{props.spanRegistration}</div>
          </div>

          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ display: "flex" }}
          >
            <i>
              <img src={require('../../../assets/images/car_door.svg').default} alt='mySvgImage'
                style={{ width: '21px', height: '21px', marginTop: '-4px' }} />
            </i>
            <div>{props.spanDoor}</div>
          </div>

          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ display: "flex" }}
          >
            <i>
              <img src={require('../../../assets/images/car_seat.svg').default} alt='mySvgImage'
                style={{ width: '29px', height: '21px', marginTop: '-4px' }} />
            </i>
            <div style={{ marginLeft: '-6px' }}>{props.spanSeat}</div>
          </div>
        </div> */}
        <p className="vehicle-pricing">
          <span className="vehicle-price">SGD {addCommas(removeNonNumeric(props.spanPcdprice))}</span>
        </p>
      </a>
    </Card>
  );
}

export default Gridcard;
