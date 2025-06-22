import { React, useState } from "react";
import "../style/HeadContact.css";
import { Card, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import ModalComponent from "./ModalComponent";
import { AiOutlineWechat } from "react-icons/ai";

function HeadContact(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="headcontact-main-container">
      <section className="headcontact-section">
        <div className="headcontact-container">
          <div className="headcontact-content">
            <div className="headcontact-text">
              <h1 className="headcontact-h1">Contact Us</h1>
              <p className="headcontact-p">
                We'd love to show you how you can get more traffic and leads,
                increase your sales productivity, provide better customer
                service, or all of the above! Here are a few ways to reach out
                to our sales team.
              </p>
            </div>
            <div className="headcontact-contact-numbers">
              <Row className="row-css">
                <Col md={4} className="card-col">
                  <Card>
                    <Card.Body className="head-card-body">
                      <Card.Title className="card-title">
                        <div style={{ color: "#00a55e", height: "30px" }}>
                          <AiOutlineWechat size={35} />
                        </div>
                      </Card.Title>

                      <div className="head-card-p">
                        <p className="head-card-p"> Chat with our sales team</p>
                      </div>

                      <div className="head-button-div">
                        <button className="head-button">
                          <a
                            href="https://api.whatsapp.com/send/?phone=%2B6596996655&text=I'm%20interested%20in%20your%20car&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="head-button-link"
                          >
                            Chat with Sales
                          </a>
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="card-col">
                  <Card>
                    <Card.Body className="head-card-body">
                      <Card.Title className="card-title">
                        <div style={{ color: "#00a55e", height: "30px" }}>
                          <FaPhoneAlt size={30} />
                        </div>
                      </Card.Title>
                      <div className="head-card-p">
                        <p className="head-card-p"> Call Us Directly</p>
                      </div>
                      <div className="card-span">
                        <span className="card-span" href="#">
                          +65-9699-6655
                        </span>
                      </div>
                      <div className="card-text-link">
                        <ModalComponent
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeadContact;
