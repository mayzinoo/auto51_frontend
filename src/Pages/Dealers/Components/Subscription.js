//libraries
import React, { Fragment } from "react";
//components
import businessImage from '../../../assets/images/business2.png';
//css
import "./styles/subscription.css";

function Subscription(props) {
  return (
    <Fragment>
      <div className="business-container-wrap">
        <div className="su-container">
          <h1 className="su-mainheader">
            Car Subscription vs Corporate Leasing
          </h1>
          <div className="su-image">
            <img src={businessImage} alt="" className='businessimage'/>
          </div>
          <div className="su-div">
            <p>
              A car subscription offers all the benefits of owning or leasing
              vehicles without long term commitments and tedious paperwork.You
              get exclusive access to your preferred car that is yours to use
              24/7.
            </p>
            <p>
              With over 50 brand new and used car models that are mostly
              delivered within 24 hours, there is something for everyone.
            </p>
            <p>
              Dreaming of flexibility? Auto 51 offers you the possibility to
              drive a brand new car every year and it only takes 3 minutes to
              sign up online.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Subscription;
