//libraries
import React, { Fragment } from "react";
//components
import paymentImage from "../../../assets/images/payment.png";
//css
import "./styles/payment.css";

function Payment(props) {
  return (
    <Fragment>
      <div className="business-container-wrap">
        <div className="pa-container">
          <div className="pa-image">
            <img src={paymentImage} alt="" className="paymentimage" />
          </div>
          <h1 className="pa-mainheader">Payment options</h1>
          <div className="pa-div">
            <p>
              Auto 51 supports payments via credit cards, bank transfers/GIRO
              and Paynow. There’s never a downpayment with Auto 51, meaning no
              impact on your cash flow or balance sheet, just one monthly
              payment for the car, insurance, taxes and 24/7 roadside
              assistance.
            </p>
            <p style={{ fontStyle: "italic" }}>
              * The no deposit-policy is applicable for all credit card
              subscribers. For Bank Transfers/Paynow subscribers, there might be
              a 1 month refundable deposit but contact our Concierge team to
              discuss a tailored solution for your business.
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Own an experience, not a car.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Payment;
