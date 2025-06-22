import React from "react";
import "../styles/Topfooter.css";

import { Row, Col } from "react-bootstrap";

function Topfooter() {
  return (
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <Row>
            <Col md={4} className="footermenu">
              <aside className="contact-info-widget">
                <h3 className="bottom-widget-title">Contact Info</h3>
                <div className="contact-info-content">
                  <p className="footer-ci-col-desc">
                    {" "}
                    <span>
                      <i
                        className="fas fa-building"
                        style={{ marginRight: "10px" }}
                      />
                      Auto 51 PTE. LTD.
                    </span>
                    <span>
                      <i
                        className="fas fa-map-marked"
                        style={{ marginRight: "10px" }}
                      />
                      Win5, 15 Yishun Industrial Street 1
                      <br /> #01-05, Singapore 768091
                    </span>
                    <span>
                      <i
                        className="fas fa-phone"
                        style={{ marginRight: "10px" }}
                      />
                      +65 67351551 <br />
                      +65 91509055
                    </span>
                    <span>
                      <i
                        className="fas fa-envelope"
                        style={{ marginRight: "10px" }}
                      />
                      sales@auto51.biz
                    </span>
                  </p>
                </div>
              </aside>
            </Col>
            <Col md={4} className="footermenu">
              <aside className="company-widget">
                <h3 className="bottom-widget-title">Our Company</h3>
                <div className="company-content">
                  <p>
                    <a href="/aboutus">About Us</a>
                  </p>
                  <p>
                    <a href="/contact">Contact Us</a>
                  </p>
                  <p>
                    <a href="/service">Our Service</a>
                  </p>
                </div>
              </aside>
            </Col>
            <Col md={4} className="footermenu">
              <aside className="openHour-widget">
                <h3 className="bottom-widget-title">Open Hours</h3>
                <div className="openHour-content">
                  <p>
                    <span style={{ color: "#e4e4e4" }}>
                      <strong>Sales Department</strong>
                    </span>
                  </p>
                  <p>
                    Mon-Sat : 08:00 - 18:00
                    <br />
                    Sunday is closed
                  </p>

                  <p>
                    <span style={{ color: "#e4e4e4" }}>
                      <strong>Service Department</strong>
                    </span>
                  </p>
                  <p>
                    Mon-Sat : 08:00 - 18:00
                    <br />
                    Sunday is closed
                  </p>
                </div>
              </aside>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Topfooter;
