//Libraries
import React, { Fragment } from "react";
//Components
import { Container, Row, Col } from "react-bootstrap";
//Css
import "./styles/ShowRoom.css";
import { MdOutlineSettingsAccessibility, MdAccessTime } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";

function ShowRoom() {
  return (
    <Fragment>
      <Container className="ShowRoom-container">
        <Row>
          <Col md={12} style={{ paddingLeft: "none" }}>
            <Row>
              <div className="showroom-description">
                <h2 className="showroomTitle">Welcome to Auto 51</h2>
                <p className="showroomParagraph">
                  AUTO 51 Pte Ltd was first incorporated in year 2010. Started as a small second hand car
                  dealer, over the years, AUTO 51 and its subsidiaries have expanded into selling a wide range of
                  vehicles namely from Japanese, Korea, Continental for 4-13 seater in the private sector as
                  well as covering commercial trucks.
                </p>
                <br />
                <p className="showroomParagraph">
                  Over the years, AUTO 51 have expanded into chauffeur limousine service, vehicle leasing, in-
                  house vehicle financial loans, logistics delivery for hypermarket and parcel industry sector.

                  Equipped with vast experience in the transport industry and our one-stop solution service
                  provided to each client, enable us to serve them with utmost professionalism. Their journey
                  with us goes beyond just one transaction.
                </p>
              </div>
            </Row>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-4" style={{ paddingBottom: "60px" }}>
                <span className="showroom-logos">
                  <MdOutlineSettingsAccessibility />
                </span>
                <h3 className="showroom-h3">HIGHLY-TRAINED STAFF</h3>
                <p className="showroom-p">
                  Support is always our highest priority. With support members
                  spread across the world, we provide all around support.
                </p>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4" style={{ paddingBottom: "60px" }}>
                <span className="showroom-logos">
                  <MdAccessTime />
                </span>
                <h3 className="showroom-h3">FAST & EFFECTIVE SERVICE</h3>
                <p className="showroom-p">
                  Default is 6 months Update & Support. Furthermore, you can
                  extend support to 12 months.
                </p>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4" style={{ paddingBottom: "60px" }}>
                <span className="showroom-logos">
                  <GiRotaryPhone />
                </span>
                <h3 className="showroom-h3">SUPPORT 24/7</h3>
                <p className="showroom-p">
                  Customers can get help and find answers to questions as soon
                  as they come up—24/7 and in real-time. Companies often offer
                  24/7 support through chatbots.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ShowRoom;
