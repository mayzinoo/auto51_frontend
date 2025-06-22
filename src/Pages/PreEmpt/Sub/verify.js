//Library
import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";

//Css
import "../styles/verify.css";
//API
import { VerifyEmailApi } from "../../../Api/api";

import { setLogin, setGetUserApi } from "../../../reducers/userActionsStore";

function Verify(props) {
  const search = useLocation().search;
  const user_email = new URLSearchParams(search).get("email");
  const user_token = new URLSearchParams(search).get("token");
  const user_id = new URLSearchParams(search).get("id");

  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [message, setMessage] = useState("");

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    VerifyEmailApi({
      _data: {
        email: user_email,
        token: user_token,
        id: user_id,
      },
    })
      .then((verifyData) => {
        if (verifyData.status === 1) {
          setInvisibleSuccess(true);
          setMessage(verifyData.message);
          setTimeout(() => {
            // 2 seconds later which is closing
            setInvisibleSuccess(false);
            setMessage("");
          }, 4000);

          const profile = verifyData.data;
          if (profile.role === "customer") {
            props.dispatch(setLogin(true));
            props.dispatch(setGetUserApi(JSON.stringify(profile)));
            window.location.href = "/";
          }
        } else {
          setInvisibleDanger(true);
          setMessage(verifyData.message);
          setTimeout(() => {
            // 2 seconds later which is closing
            setInvisibleDanger(false);
            setMessage("");
          }, 4000);
        }
      })
      .catch((error) => {
        setInvisibleDanger(true);
        setMessage("Verify Fail!");
        setTimeout(() => {
          // 2 seconds later which is closing
          setInvisibleDanger(false);
          setMessage("");
        }, 4000);
        console.log("error", error);
      });
  };

  return (
    <Fragment>
      <section className="verify-content">
        <Container>
          <Row>
            <Col md="12">
              <div className="verify-form-wrap">
                <div className="verify-main-div">
                  <form>
                    <div>
                      <p className="verify-title-text">
                        Please click the button below to confirm your request: !
                      </p>
                    </div>
                    <div>
                      <p className="verify-text">
                        You are just one click away from getting started with
                        Auto 51. All you need to do is verify your email
                        address to activate your Auto 51 account.
                      </p>
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <input
                        type="submit"
                        value="Verify"
                        className="verify-btn"
                        onClick={handleVerifySubmit}
                      ></input>
                    </div>
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

export default connect(mapStateToProp)(Verify);
