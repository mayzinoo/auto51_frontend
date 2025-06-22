//libraries
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import $ from "jquery";
//components
import { Container, Row, Col, Alert } from "react-bootstrap";
//css
import "../styles/resetconfirm.css";
//API
import { ForgetConfirmPasswordApi } from "../../../Api/api";

function ResetComfirm() {
  const { id } = useParams();
  const user_id = id;

  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [inputError, setInputError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [message, setMessage] = useState("");

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
    if (password && cPassword) {
      if (!passwordError) {
        setInputError(false);
        return true;
      }
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleResetConfirmSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      ForgetConfirmPasswordApi({
        _data: { id, user_id, password: password },
      })
        .then((forgetconfirmData) => {
          if (forgetconfirmData.status === 1) {
            setInvisibleSuccess(true);
            setMessage("Forgot Password Successful !");
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleSuccess(false);
              setMessage("");
            }, 4000);
            window.location.href = "/login";
          }
          else{
            setInvisibleDanger(true);
            setMessage(forgetconfirmData.message);
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
                      <label className="login-label">Password</label>
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
                      value="Submit"
                      className="login-btn"
                      onClick={handleResetConfirmSubmit}
                    ></input>
                    <ul className="forgotpass-ul">
                      <li className="forgotpass-li">
                        <a className="forgotpass-a" href="/login">
                          Login
                        </a>
                      </li>
                    </ul>
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

export default ResetComfirm;
