/* eslint-disable no-const-assign */
//libraries
import React, { Fragment, useState, useRef, useEffect } from "react";
//components
import { Container, Form, Row, Col, Alert } from "react-bootstrap";
//css
import "./styles/interest.css";

import { BusinessRegisterApi } from "../../../Api/api";

function Interest() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [interest_option, setInterested] = useState("");
  const [qtyofcars, setQtyOfCars] = useState("");
  const [message, setMessage] = useState("");
  const [registerno, setRegisterno] = useState("");
  const [officeno, setOfficeno] = useState("");
  const [files, setFiles] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [checkFiles, setCheckFile] = useState(false);
  const filesInputRef = useRef(); //See Supporting Documentation #2
  const interestInputRef = useRef();
  const qtyOfCarInputRef = useRef();

  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setPhoneNumber(onlyDigits);
  };

  const checkObjectValid = () => {
    if (
      firstName &&
      companyName &&
      email &&
      phonenumber &&
      registerno &&
      officeno
    ) {
      if (checkFiles) {
        setInputError(true);
      }
      else {
        setInputError(false);
      }
      return true;
    } else {
      if (checkFiles) {
        setInputError(true);
      }
      else {
        setInputError(false);
      }
      return false;
    }
  };

  const uploadFileHandler = (event) => {
    setFiles([...event.target.files]);
  };

  useEffect(() => {
    if (files.length > 0) {
      setCheckFile(false);
    } else {
      setCheckFile(true);
    }
  }, [files]);

  const handleBusinessRegisterSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid() && !checkFiles) {
      BusinessRegisterApi({
        _data: {
          firstName,
          lastName,
          companyName,
          email,
          phonenumber,
          interest_option,
          qtyofcars,
          message,
          registerno,
          officeno,
          files,
        },
      })
        .then((businessRegData) => {
          if (businessRegData.status === 1) {
            setFirstName("");
            setLastName("");
            setCompanyName("");
            setEmail("");
            setPhoneNumber("");
            setInterested("Select an option");
            setQtyOfCars("Select an option");
            setMessage("");
            setRegisterno("");
            setOfficeno("");
            setFiles("");
            filesInputRef.current.value = "";
            interestInputRef.current.value = "Select an option";
            qtyOfCarInputRef.current.value = "Select an option";
            setInvisibleSuccess(true);
            setResponseMessage(businessRegData.message);
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleSuccess(false);
              setResponseMessage("");
            }, 4000);
          } else {
            setInvisibleDanger(true);
            setResponseMessage(businessRegData.message);
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleDanger(false);
              setResponseMessage("");
            }, 4000);
            setFirstName("");
            setLastName("");
            setCompanyName("");
            setEmail("");
            setPhoneNumber("");
            setInterested("Select an option");
            setQtyOfCars("Select an option");
            setMessage("");
            setRegisterno("");
            setOfficeno("");
            setFiles("");
            filesInputRef.current.value = "";
            interestInputRef.current.value = "Select an option";
            qtyOfCarInputRef.current.value = "Select an option";
          }
        })
        .catch((error) => {
          setInvisibleDanger(true);
          setResponseMessage("Network Error");
          setTimeout(() => {
            // 2 seconds later which is closing
            setInvisibleDanger(false);
            setResponseMessage("");
          }, 4000);
          console.log("error", error);
        });
    }
  };

  return (
    <Fragment>
      <div className="interest-container-wrap">
        <h1 className="in-mainheader"> Register Your Interest </h1>
        <p className="in-subheader">
          Register your interest with us and our Concierge team will be in touch
          shortly. We'll guide your step-by-step to your next business car.
        </p>
      </div>
      <Container className="interest-container">
        <div className="interest-form-wrap">
          <Form className="interest-form">
            <Row className="mb-6">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                  {inputError && !firstName ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {inputError && !email ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridCompanyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                  />
                  {inputError && !companyName ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPnoneNo">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    maxLength="11"
                    value={phonenumber}
                    onChange={(e) => checkInput(e)}
                  />
                  {inputError && !phonenumber ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formGridInterested">
                  <Form.Label>Are you primarily interested in:</Form.Label>
                  <Form.Select
                    defaultValue="Select an option"
                    onChange={(event) => setInterested(event.target.value)}
                    id="InterestedForm"
                    ref={interestInputRef}
                  >
                    <option>Select an option</option>
                    <option>Corporate Leasing</option>
                    <option>Employee Benefit Program</option>
                    <option>I have a car allowance</option>
                    <option>Multiple of the options above</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridQty">
                  <Form.Label>How many cars will you need?</Form.Label>
                  <Form.Select
                    defaultValue="Select an option"
                    onChange={(event) => setQtyOfCars(event.target.value)}
                    id="QtyForm"
                    ref={qtyOfCarInputRef}
                  >
                    <option>Select an option</option>
                    <option>1-2 cars</option>
                    <option>3-5 cars</option>
                    <option>6-10 cars</option>
                    <option>10+ cars</option>
                    <option>20+ cars</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridRegisterno">
                  <Form.Label>Business Registration Number / UEN</Form.Label>
                  <Form.Control
                    type="tel"
                    maxLength="11"
                    value={registerno}
                    onChange={(event) => setRegisterno(event.target.value)}
                  />
                  {inputError && !registerno ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridOfficeno">
                  <Form.Label>Office Number</Form.Label>
                  <Form.Control
                    type="tel"
                    maxLength="11"
                    value={officeno}
                    onChange={(event) => setOfficeno(event.target.value)}
                  />
                  {inputError && !officeno ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridOfficeno">
                  <Form.Label>Upload Documents (.pdf,.xlsx,.docx)</Form.Label>
                  <input
                    className="file-input-css"
                    type="file"
                    accept=".pdf,.xlsx,.docx"
                    multiple
                    onChange={uploadFileHandler}
                    ref={filesInputRef}
                  />
                  {inputError && checkFiles ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridMessage">
                <Form.Label> Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Your Message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Form.Group>
            </Row>
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
            <div className="interest-formSubmitBtn-wrap">
              <button
                className="message-btn"
                onClick={(e) => {
                  handleBusinessRegisterSubmit(e);
                }}
              >
                Message Us
              </button>
            </div>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
}

export default Interest;
