/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Col, Row } from "react-bootstrap";
import "../style/MiddleContact.css";

function MiddleContact(props) {
  return (
    <div className="middlecontact-content" ref={props.reference}>
      <div className="containerr">
        <div className="map-and-form">
          <Row>
            <Col md={6} className="map-col-css">
              <iframe
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                src="https://www.google.com/maps/d/u/0/embed?mid=15O6gBjdDCkXmG715BfJqLlkdFXeQ6E8&ehbc=2E312F"
              ></iframe>
            </Col>
            <Col md={6} className="contactbg">
              <div className="head-icon-main">
                <div className="head-address-div contactinfo">
                  <h3 className="bottom-widget-title">Contact Info</h3>
                  <div className="contact-info-content">
                    <p className="footer-ci-col-desc">
                      {" "}
                      <span>
                        <i
                          className="fas fa-building"
                          style={{ marginRight: "10px", color: "#00a55e" }}
                        />
                        <span style={{ fontWeight: "bold" }}>
                          Auto 51 PTE. LTD.
                        </span>
                      </span>
                      <span>
                        <i
                          className="fas fa-map-marked"
                          style={{ marginRight: "10px", color: "#00a55e" }}
                        />
                        Win5, 15 Yishun Industrial Street 1
                      <br /> #01-05, Singapore 768091
                      </span>
                      <span>
                        <i
                          className="fas fa-phone"
                          style={{ marginRight: "10px", color: "#00a55e" }}
                        />
                        +65 67351551 <br/>
                       +65 91509055
                      </span>
                      <span>
                        <i
                          className="fas fa-envelope"
                          style={{ marginRight: "10px", color: "#00a55e" }}
                        />
                        sales@auto51.biz
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MiddleContact;
