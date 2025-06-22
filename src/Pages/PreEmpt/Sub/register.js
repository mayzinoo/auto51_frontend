/* eslint-disable jsx-a11y/anchor-is-valid */
//Library
import React, { Fragment, useState } from "react";
import { Col, Row, Container, Alert } from "react-bootstrap";
import { connect } from "react-redux";

import $ from "jquery";
//API
import { RegisterApi } from "../../../Api/api";
//CSS
import "../styles/register.css";
import "../styles/login.css";

function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [new_password, setPassword] = useState("");
  const [confirm_password, setCfmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleInputLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPhoneChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleInputPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleInputCfmPasswordChange = (e) => {
    setCfmPassword(e.target.value);
  };

  $("#confirm_password").on("keyup", function () {
    if (new_password !== confirm_password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  });

  const checkObjectValid = () => {
    if (
      firstName &&
      lastName &&
      email &&
      phoneNo &&
      new_password &&
      confirm_password
    ) {
      if (!passwordError) {
        setInputError(false);
        return true;
      }
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      RegisterApi({
        _data: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phNumber: phoneNo,
          password: new_password,
          cfmPassword: confirm_password,
        },
      })
        .then((registerData) => {
          if (registerData.status === 1) {
            setInvisibleSuccess(true);
            setMessage(registerData.message);
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleSuccess(false);
              setMessage("");
            }, 16000);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNo("");
            setPassword("");
            setCfmPassword("");
          } else {
            setInvisibleDanger(true);
            setMessage(registerData.message);
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleDanger(false);
              setMessage("");
            }, 16000);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNo("");
            setPassword("");
            setCfmPassword("");
          }
        })
        .catch((error) => {
          setInvisibleDanger(true);
          setMessage("Register Fail!");
          setTimeout(() => {
            // 2 seconds later which is closing
            setInvisibleDanger(false);
            setMessage("");
          }, 4000);
          console.log("error", error);
        });
    }
  };

  return (
    <Fragment>
      <section className="Register-form">
        <Container>
          <Row>
            <Col md={12}>
              <div className="form-wrap">
                <div className="login-main-div">
                  <form>
                    <div className="login-field-div">
                      <label className="login-label">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        className="login-field"
                        required="required"
                        value={firstName}
                        onChange={handleInputFirstNameChange}
                      />
                      {inputError && !firstName ? (
                        <span className="preEmpt-error-msg">
                          This field is required !
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="login-field-div">
                      <label className="login-label">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        className="login-field"
                        required="required"
                        value={lastName}
                        onChange={handleInputLastNameChange}
                      />
                      {inputError && !lastName ? (
                        <span className="preEmpt-error-msg">
                          This field is required !
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="login-field-div">
                      <label className="login-label">Email</label>
                      <input
                        id="email"
                        type="text"
                        className="login-field"
                        required="required"
                        value={email}
                        onChange={handleInputEmailChange}
                      />
                      {inputError && !email ? (
                        <span className="preEmpt-error-msg">
                          This field is required !
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="login-field-div">
                      <label className="login-label">Mobile Number</label>
                      <input
                        id="phoneNo"
                        type="text"
                        className="login-field"
                        required="required"
                        value={phoneNo}
                        onChange={handleInputPhoneChange}
                      />
                      {inputError && !phoneNo ? (
                        <span className="preEmpt-error-msg">
                          This field is required !
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="login-field-div">
                      <label className="login-label">Password</label>
                      <input
                        id="new_password"
                        type="password"
                        className="login-field"
                        required="required"
                        value={new_password}
                        onChange={handleInputPasswordChange}
                      />
                      {inputError && !new_password ? (
                        <span className="preEmpt-error-msg">
                          This field is required !
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="login-field-div">
                      <label className="login-label">Confirm Password</label>
                      <input
                        id="confirm_password"
                        type="password"
                        className={`login-field ${(passwordError || inputError) &&
                          new_password !== confirm_password
                          ? "error"
                          : ""
                          }`}
                        required="required"
                        value={confirm_password}
                        onChange={handleInputCfmPasswordChange}
                      />
                      {passwordError && confirm_password !== new_password ? (
                        <span className="register-error-msg">
                          Password does not match !
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                    {invisibleSuccess && (
                      <div className="row">
                        <div className="col-sm-12">
                          <Alert
                            show={invisibleSuccess}
                            className="success-css"
                          >
                            <Alert.Heading>{message}</Alert.Heading>
                          </Alert>
                        </div>
                      </div>
                    )}
                    {invisibleDanger && (
                      <div className="row">
                        <div className="col-sm-12">
                          <Alert show={invisibleDanger} className="danger-css">
                            <Alert.Heading>{message}</Alert.Heading>
                          </Alert>
                        </div>
                      </div>
                    )}
                    <br />
                    <Row className="buttons">
                      <Col md={6}>
                        <input
                          type="submit"
                          value="Register"
                          className="Btn"
                          onClick={(e) => handleRegisterSubmit(e)}
                        ></input>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}
const mapStateToProp = (state) => ({});

export default connect(mapStateToProp)(Register);
