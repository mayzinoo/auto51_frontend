//libraries
import React, { Fragment } from "react";
//components
import { Container, Form, Row, Col, Button } from "react-bootstrap";
//import Button from "../../../CustomComponents/CButton";
//css
import "../components/styles/profile.css";

function Profile(props) {
  return (
    <Fragment>
      <Container className="profile-container">
        <div className="profile-form-wrap">
          <Form className="profile-form">
            <Form.Group className="mb-3" controlId="formGridFirstName">
              <Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="firstname" placeholder="" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridLastName">
              <Row>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="lastname" placeholder="" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridEmail">
              <Row>
                <Col>
                  <Form.Label>Email Address</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="email" placeholder="" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPnoneNo">
              <Row>
                <Col>
                  <Form.Label>Mobile Number</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="phoneno" placeholder="" />
                </Col>
              </Row>
            </Form.Group>

            <div className="profile-btn">
              <Button className="btn-css" href="/vehicles">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
}

export default Profile;
