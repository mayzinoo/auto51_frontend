//libraries
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import $ from "jquery";
//components
import { Container, Row, Col, Alert } from "react-bootstrap";
//css
import "../styles/resetconfirm.css";
//API
import { ChangePasswordApi } from "../../../Api/api";

function ChangePwd(props) {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [userDetails, setUserDetails] = useState({ id: "" });
  const [inputError, setInputError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setUserDetails(JSON.parse(props.GetUserApi));
  }, [props.GetUserApi]);

  const handleInputOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleInputPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleInputCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };

  $("#cPassword").on("keyup", function () {
    if (password !== cPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  });

  const checkObjectValid = () => {
    if (oldPassword && password && cPassword) {
      if (!passwordError) {
        setInputError(false);
        return true;
      }
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleChangePasswordSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      ChangePasswordApi({
        _data: {
          id: userDetails.id,
          password: oldPassword,
          newpassword: password,
        },
      })
        .then((changePasswordData) => {
          if (changePasswordData.status === 1) {
            setInvisibleSuccess(true);
            setMessage("Change Password Successful !");
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleSuccess(false);
              setMessage("");
            }, 4000);
            window.location.href = "/login";
          } else {
            setInvisibleDanger(true);
            setMessage(changePasswordData.message);
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleDanger(false);
              setMessage("");
            }, 4000);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return (
    <Fragment>
      <section className="login-content">
        <Container>
          <Row>
            <Col md="12">
              <div className="login-form-wrap">
                <div className="login-main-div">
                  <form>
                    <div className="login-field-div">
                      <label className="login-label">Old Password</label>
                      <input
                        id="oldPassword"
                        type="password"
                        className="login-field"
                        required="required"
                        value={oldPassword}
                        onChange={handleInputOldPasswordChange}
                      />
                      {inputError && !oldPassword ? (
                        <span className="preEmpt-error-msg">
                          This field is required !
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="login-field-div">
                      <label className="login-label">New Password</label>
                      <input
                        id="password"
                        type="password"
                        className="login-field"
                        required="required"
                        value={password}
                        onChange={handleInputPasswordChange}
                      />
                      {inputError && !password ? (
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
                        id="cPassword"
                        type="password"
                        className={`login-field ${
                          (passwordError || inputError) &&
                          password !== cPassword
                            ? "error"
                            : ""
                        }`}
                        required="required"
                        value={cPassword}
                        onChange={handleInputCPasswordChange}
                      />
                      {passwordError && cPassword !== password ? (
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
                    <input
                      type="submit"
                      value="Change Password"
                      className="login-btn"
                      onClick={handleChangePasswordSubmit}
                    ></input>
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

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(ChangePwd);
