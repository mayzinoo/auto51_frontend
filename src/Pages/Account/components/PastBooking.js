//Libraries
import React, { Fragment } from "react";
//CSS

import { img_url } from "../../../Api/api";

import NoImage from "../../../assets/images/no-image.jpg";

function PastBooking(props) {
  const bookingData = props.bookingData;

  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");
  for (var j = 0; j < bookingData.length; j++) {
    if (
      bookingData[j].price_status === "leasing" &&
      bookingData[j].duration === "0"
    ) {
      bookingData[j].duration_name = "/day"
    } else if (
      bookingData[j].price_status === "leasing" &&
      bookingData[j].duration !== "0"
    ) {
      bookingData[j].duration_name = "/month"
    }
    else if (
      bookingData[j].price_status === "selling" &&
      bookingData[j].duration === "0"
    ) {
      bookingData[j].duration_name = ""
    }
  }
  return (
    <Fragment>
      {bookingData.length > 0 ? (
        <div>
          {bookingData.map((booking, index) => {
            return (
              <div className="main-div row" key={index}>
                <div className="img-main-div col-lg-2 col-md-2 col-sm-6">
                  {booking.photo === "" ? (
                    <img src={NoImage} alt="" className="img-css" />
                  ) : (
                    <img
                      src={img_url + booking.photo}
                      alt=""
                      className="img-css"
                    />
                  )}
                </div>
                <div className="detail-main-div col-lg-7 col-md-7 col-sm-12">
                  <div className="detail-sub-div">
                    <div className="title-main-div">
                      <p className="title-sub-div">{booking.model_name}</p>
                      <span
                        className="title-span-div"
                        style={{ backgroundColor: "#129540", color: "#fff" }}
                      >
                        {booking.check_status === "3" && "Success"}
                      </span>
                    </div>
                    <div className="booking-data-main-css">
                      <p className="booking-data-sub-css">
                        <span className="font-semibold text-green-500">
                          ${addCommas(removeNonNumeric(booking.subscription_price))}
                        </span>
                        <span>{booking.duration_name}</span>
                      </p>
                      <p className="booking-data-sub-css">
                        Booking ID: {booking.booking_no}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-data-main-div">
          <p className="no-data-css"> No Record Data Found !</p>
        </div>
      )}
    </Fragment>
  );
}

export default PastBooking;
