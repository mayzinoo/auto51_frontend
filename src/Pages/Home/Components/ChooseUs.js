/* eslint-disable jsx-a11y/anchor-is-valid */
//Libraies
import React, { Fragment, useState } from "react";

//Components
import { Container, Row, Col } from "react-bootstrap";
import HeaderAndDes from "./HeaderAndDes";
import Imadaz from "../Components/assets/imadaz.png";

//CSS
import "./styles/ChooseUs.css";

export default function ChooseUs() {
  const [trustedPlatReadMore, setTrustedPlatReadMore] = useState(false);
  const [safeSecureReadMore, setSafeSecureReadMore] = useState(false);
  const [seamlessConvReadMore, setSeamlessConvReadMore] = useState(false);
  const [reponsiveFlexReadMore, setReponsiveFlexReadMore] = useState(false);
  const trustedPlatText =
    "Our agents are equipped with vast experience in the transport industry, serving our customers with the utmost professionalism. Here at Auto 51, we guarantee transparency in every deal.";
  const safeSecureText =
    "We only work with established LTA-approved partners. We ensure confidentiality, and we have strict quality control measures to uphold integrity.";
  const seamlessConvText =
    "At Auto 51, we ensure that our customers need not visit multiple car dealerships for the best offer. Seatback and relax while we handle all the paperwork for you. ";
  const reponsiveFlexText =
    "We understand if you are uncertain and require more time to think about it. Our dedicated team will provide a quick response time to your enquires. ";

  return (
    <Fragment>
      <Container className="chooseus-container">
        <HeaderAndDes
          titleName="Why Choose us"
          Description="A business process begins with a mission objective and ends with achievement of the business objective of providing a result that provides customer value."
        ></HeaderAndDes>
        <div className="chooseus-columns">
          <Row>
            <Col md={6}>
              <div className="chooseus-columns-inner">
                <Row>
                  <Col md={6}>
                    <span>01.</span>
                    <h3>Singapore's Most Trusted Platform</h3>
                    <p>
                      {trustedPlatReadMore
                        ? trustedPlatText
                        : `${trustedPlatText.substring(0, 100)}`}
                    </p>
                    <a
                      className="chooseus-columns-readMore"
                      onClick={() =>
                        setTrustedPlatReadMore(!trustedPlatReadMore)
                      }
                    >
                      {trustedPlatReadMore ? "Read Less <<" : "Read More >>"}
                    </a>
                  </Col>
                  <Col md={6}>
                    <span>02.</span>
                    <h3>Safe and Secure</h3>
                    <p>
                      {safeSecureReadMore
                        ? safeSecureText
                        : `${safeSecureText.substring(0, 100)}`}
                    </p>
                    <a
                      className="chooseus-columns-readMore"
                      onClick={() => setSafeSecureReadMore(!safeSecureReadMore)}
                    >
                      {safeSecureReadMore ? "Read Less <<" : "Read More >>"}
                    </a>
                  </Col>
                </Row>
              </div>
              <div className="chooseus-columns-inner">
                <Row>
                  <Col md={6}>
                    <span>03.</span>
                    <h3>Seamless and Convenient</h3>
                    <p>
                      {seamlessConvReadMore
                        ? seamlessConvText
                        : `${seamlessConvText.substring(0, 100)}`}
                    </p>
                    <a
                      className="chooseus-columns-readMore"
                      onClick={() =>
                        setSeamlessConvReadMore(!seamlessConvReadMore)
                      }
                    >
                      {seamlessConvReadMore ? "Read Less <<" : "Read More >>"}
                    </a>
                  </Col>
                  <Col md={6}>
                    <span>04.</span>
                    <h3>Responsive and Flexible</h3>
                    <p>
                      {reponsiveFlexReadMore
                        ? reponsiveFlexText
                        : `${reponsiveFlexText.substring(0, 100)}`}
                    </p>
                    <a
                      className="chooseus-columns-readMore"
                      onClick={() =>
                        setReponsiveFlexReadMore(!reponsiveFlexReadMore)
                      }
                    >
                      {reponsiveFlexReadMore ? "Read Less <<" : "Read More >>"}
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="chooseus-columns-img-inner">
                <img src={Imadaz} alt=""></img>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}
