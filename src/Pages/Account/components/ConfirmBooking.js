/* eslint-disable no-unused-vars */
//Libaries
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Alert, Button } from "react-bootstrap";
//CSS
import "../components/styles/confirmbooking.css";
//API
import {
  BookingIDApi,
  BookingUploadDocumentApi,
  img_url,
} from "../../../Api/api";

import NoImage from "../../../assets/images/no-image.jpg";
import LoadingSpinner from "../../../Components/LoadingSpinner";

function ConfirmBooking(props) {
  const { id } = useParams();
  const booking_id = id;
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [waitStatus, setWaitStatus] = useState(true);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const driving_license_front_inputRef = React.useRef();
  const driving_license_back_inputRef = React.useRef();
  const national_id_front_inputRef = React.useRef();
  const national_id_back_inputRef = React.useRef();

  const imageUrl = "http://admin.auto51.com.sg/upload/usersinfo/";

  useEffect(() => {
    BookingIDApi({ _data: { bid: booking_id } })
      .then((bookingIDData) => {
        console.log("bookingIDData... ", bookingIDData);
        if (bookingIDData.driving_license_front !== "" &&
          bookingIDData.driving_license_back !== "" &&
          bookingIDData.national_id_front !== "" &&
          bookingIDData.national_id_back !== "") {
          setWaitStatus(false)
        }
        setBookingData(bookingIDData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [booking_id, props.GetUserApi]);

  const [validationError, setValidationError] = useState(false);
  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  let drivingLicenseFrontImg = "";
  const onChangeDrivingLicenseFront = (e) => {
    drivingLicenseFrontImg = e.target.files[0];
  };

  let drivingLicenseBackImg = "";
  const onChangeDrivingLicenseBack = (e) => {
    drivingLicenseBackImg = e.target.files[0];
  };

  let nationalIDFrontImg = "";
  const onChangeNationalIDFront = (e) => {
    nationalIDFrontImg = e.target.files[0];
  };

  let nationalIDBackImg = "";
  const onChangeNationalIDBack = (e) => {
    nationalIDBackImg = e.target.files[0];
  };

  const checkObjectValid = () => {
    if (
      drivingLicenseFrontImg !== "" &&
      drivingLicenseBackImg !== "" &&
      nationalIDFrontImg !== "" &&
      nationalIDBackImg !== ""
    ) {
      setValidationError(false);
      return true;
    } else {
      setValidationError(true);
      return false;
    }
  };

  const handleSendBookingSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      setValidationError(false);
      setIsLoading(true);
      BookingUploadDocumentApi({
        _data: {
          booking_id: booking_id,
          driving_license_front: drivingLicenseFrontImg,
          driving_license_back: drivingLicenseBackImg,
          national_id_front: nationalIDFrontImg,
          national_id_back: nationalIDBackImg,
        },
      })
        .then((bookingUploadData) => {
          driving_license_front_inputRef.current.value = "";
          driving_license_back_inputRef.current.value = "";
          national_id_front_inputRef.current.value = "";
          national_id_back_inputRef.current.value = "";
          setIsLoading(false);   // Hide loading screen 
          setWaitStatus(false); // Hide waiting text
          setInvisibleSuccess(true);
          setResponseMessage("Upload Documents Successful!");
          setTimeout(() => {
            // 2 seconds later which is closing
            setInvisibleSuccess(false);
            setResponseMessage("");
          }, 4000);
          if (bookingUploadData.status) {
            window.location.href = "/account/booking/";
          }
        })
        .catch((error) => {
          console.log("error", error);
          setIsLoading(false);   // Hide loading screen 
          setInvisibleDanger(true);
          setResponseMessage("The uploaded file exceeds the maximum allowed size.");
          setTimeout(() => {
            // 2 seconds later which is closing
            setInvisibleDanger(false);
            setResponseMessage("");
          }, 4000);
        });
    }
  };


  return (
    <Fragment>
      <div className="main-content">
        {isLoading && <LoadingSpinner />}
        <div className="confirmbooking">
          <p className="sub-title">
            My Bookings / Booking ID: {bookingData.booking_no}
          </p>
          <div className="row">
            <div
              style={{ marginBottom: "20px" }}
              className="col-sm-12 col-md-12 col-lg-8"
            >
              <Container className="confirmbooking-form-wrap">
                <div
                  className="sessionForm-wrap"
                  style={{ paddingBottom: "0px" }}
                >
                  <div className="title-main-div">
                    <p className="title-sub-div">
                      {waitStatus ? " Waiting for your documentations" : " Your documents"}
                    </p>
                    <span className="title-span-div">
                      {bookingData.check_status === "1" ||
                        bookingData.check_status === "2"
                        ? "Pending"
                        : "Reject"}
                    </span>
                  </div>
                  <div className="line"></div>
                  <div>
                    <p className="nextstep-css">Next Step</p>
                    <p className="document-css">Upload Documents</p>
                  </div>
                  <div className="row" style={{ paddingTop: "20px" }}>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <p
                        style={{
                          marginBottom: "0.1rem",
                          marginTop: "10px",
                          color: validationError ? "red" : "",
                        }}
                      >
                        Driving License Front
                      </p>
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        ref={driving_license_front_inputRef}
                        onChange={onChangeDrivingLicenseFront}
                      />
                      {validationError ? (
                        <div className="validation-Error">
                          <p>This field is required *</p>
                        </div>
                      ) : (
                        ""
                      )}
                      {bookingData.driving_license_front !== "" &&
                        <div>
                          <img
                            src={imageUrl + bookingData.driving_license_front}
                            alt=""
                            className="vehicleImg"
                          />
                        </div>
                      }
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <p
                        style={{
                          marginBottom: "0.1rem",
                          marginTop: "10px",
                          color: validationError ? "red" : "",
                        }}
                      >
                        Driving License Back
                      </p>
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        ref={driving_license_back_inputRef}
                        onChange={onChangeDrivingLicenseBack}
                      />
                      {validationError ? (
                        <div className="validation-Error">
                          <p>This field is required*</p>
                        </div>
                      ) : (
                        ""
                      )}
                      {bookingData.driving_license_back !== "" &&
                        <div>
                          < img
                            src={imageUrl + bookingData.driving_license_back}
                            alt=""
                            className="vehicleImg"
                          />
                        </div>
                      }
                    </div>
                  </div>
                  <div className="row" style={{ paddingTop: "20px" }}>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <p
                        style={{
                          marginBottom: "0.1rem",
                          marginTop: "10px",
                          color: validationError ? "red" : "",
                        }}
                      >
                        NRIC Front
                      </p>
                      <input type="file"
                        accept=".png,.jpg,.jpeg"
                        ref={national_id_front_inputRef}
                        onChange={onChangeNationalIDFront} />
                      {validationError ? (
                        <div className="validation-Error">
                          <p>This field is required *</p>
                        </div>
                      ) : (
                        ""
                      )}
                      {bookingData.national_id_front !== "" &&
                        <div>
                          < img
                            src={imageUrl + bookingData.national_id_front}
                            alt=""
                            className="vehicleImg"
                          />
                        </div>
                      }
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <p
                        style={{
                          marginBottom: "0.1rem",
                          marginTop: "10px",
                          color: validationError ? "red" : "",
                        }}
                      >
                        NRIC Back
                      </p>
                      <input type="file"
                        accept=".png,.jpg,.jpeg"
                        ref={national_id_back_inputRef}
                        onChange={onChangeNationalIDBack} />
                      {validationError ? (
                        <div className="validation-Error">
                          <p>This field is required*</p>
                        </div>
                      ) : (
                        ""
                      )}
                      {bookingData.national_id_back !== "" &&
                        <div>
                          < img
                            src={imageUrl + bookingData.national_id_back}
                            alt=""
                            className="vehicleImg"
                          />
                        </div>
                      }
                    </div>
                  </div>
                  <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
                    <p style={{ fontWeight: "700", marginBottom: "5px" }}>
                      Mark sure the picture is:
                    </p>
                    <ul className="note-css">
                      <li>Readable and without any glare</li>
                      <li>Showing all 4 corners on a plain background</li>
                      <li>Only png, jpg and jpeg are allowed </li>
                    </ul>
                  </div>
                  {invisibleSuccess && (
                    <div className="row">
                      <div className="col-sm-12">
                        <Alert show={invisibleSuccess} className="success-css">
                          <Alert.Heading>{responseMessage}</Alert.Heading>
                        </Alert>
                      </div>
                    </div>
                  )}
                  {invisibleDanger && (
                    <div className="row">
                      <div className="col-sm-12">
                        <Alert show={invisibleDanger} className="danger-css">
                          <Alert.Heading>{responseMessage}</Alert.Heading>
                        </Alert>
                      </div>
                    </div>
                  )}
                  <div className="confirmSubmitgrp pageButtongrp">
                    <Button
                      className="sendSubmitForm"
                      onClick={(e) => {
                        handleSendBookingSubmit(e);
                      }}
                    >
                      Confirm and Send
                    </Button>
                  </div>
                </div>
              </Container>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <Container className="confirmbooking-form-wrap">
                <div>
                  <p style={{ marginBottom: "0.25rem" }}>Booking Summary</p>
                  <p className="car-title">{bookingData.model_name}</p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="confirmbooking-data-main-css">
                      <p className="confirmbooking-data-sub-css">
                        {bookingData.modelname}
                      </p>
                      <p className="confirmbooking-data-sub-css">
                        <span className="font-semibold text-green-500">
                          ${bookingData.subscription_price !== undefined ? addCommas(removeNonNumeric(bookingData.subscription_price)) : bookingData.subscription_price}
                        </span>
                        {bookingData.price_status === "leasing" &&
                          bookingData.duration === "0" && (
                            <span>/day</span>
                          )}

                        {bookingData.price_status === "leasing" &&
                          bookingData.duration !== "0" && (
                            <span>/month</span>
                          )}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 img-main-div">
                    {bookingData.photo === "" ? (
                      <img src={NoImage} alt="" className="img-css" />
                    ) : (
                      <img
                        src={img_url + bookingData.photo}
                        alt=""
                        className="img-css"
                      />
                    )}
                  </div>
                </div>
                <div className="line1"></div>
                <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <p style={{ textAlign: "center", marginBottom: "0.75rem" }}>
                    Disclaimer: This monthly price also includes tax, insurance,
                    maintenance and breakdown cover.
                  </p>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(ConfirmBooking);
