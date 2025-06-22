//Library
import { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
//Components
//CSS
import "../styles/reset.css";

//API
import { ForgetPasswordApi } from "../../../Api/api";

function Reset(props) {
  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const checkObjectValid = () => {
    if (email) {
      setInputError(false);
      return true;
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleGetNewPasswordSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      ForgetPasswordApi({ _data: { email: email } })
        .then((forgetData) => {
          if (forgetData.status === 1) {
            window.location.href = `/resetconfirmpassword/${forgetData.data}`;
          } else {
            setEmail("");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return (
    <Fragment>
      <section className="lost-content">
        <Container>
          <Row>
            <Col md="12">
              <div className="lost-form-wrap">
                <div className="lost-main-div">
                  <form>
                    <div className="lost-field-div">
                      <label className="lost-label">Email</label>
                      <input
                        id="email"
                        type="email"
                        required="required"
                        value={email}
                        onChange={handleInputEmailChange}
                        className="lost-field"
                      />
                      {inputError && !email ? (
                        <span className="preEmpt-error-msg">
                          This field is required !
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                    <input
                      type="submit"
                      value="GET NEW PASSWORD"
                      className="lost-btn"
                      onClick={handleGetNewPasswordSubmit}
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

export default Reset;
