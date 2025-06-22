//Library
import React, { Fragment, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
//Components
import { LoginApi } from "../../../Api/api";
//Css
import "../styles/login.css";

import { setLogin, setGetUserApi } from "../../../reducers/userActionsStore";

function Login(props) {
  const [email, setEmail] = useState("");
  const [current_password, setPassword] = useState("");
  const [inputError, setInputError] = useState(false);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const checkObjectValid = () => {
    if (email && current_password) {
      setInputError(false);
      return true;
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      LoginApi({ _data: { email: email, password: current_password } })
        .then((logRes) => {
          if (logRes.status === 1) {
            setInvisibleSuccess(true);
            setMessage("Login Successful !");
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleSuccess(false);
              setMessage("");
            }, 4000);
            props.dispatch(setLogin(true));
            const profile = logRes.data;
            //store user information in redux store
            props.dispatch(setGetUserApi(JSON.stringify(profile)));
            window.location.href = "/";
          } else {
            setInvisibleDanger(true);
            setMessage("Login Fail");
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleDanger(false);
              setMessage("");
            }, 4000);
            props.dispatch(setLogin(false));
            setEmail("");
            setPassword("");
          }
        })
        .catch((error) => {
          setInvisibleDanger(true);
          setMessage("Login Fail!");
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
                      <label className="login-label">Email</label>
                      <input
                        id="email"
                        type="email"
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
                      <label className="login-label">Password</label>
                      <input
                        id="current_password"
                        type="password"
                        className="login-field"
                        required="required"
                        value={current_password}
                        onChange={handleInputPasswordChange}
                      />
                      {inputError && !current_password ? (
                        <span className="preEmpt-error-msg">
                          This field is required !
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="login-field-div">
                      <input type="checkbox" className="login-field-check" />
                      <label className="login-label-check">Remember me</label>
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
                      value="LOG IN"
                      className="login-btn"
                      onClick={handleLoginSubmit}
                    ></input>
                    <ul className="forgotpass-ul">
                      <li className="forgotpass-li">
                        <a className="forgotpass-a" href="/resetpassword">
                          Lost your password?
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

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp)(Login);
