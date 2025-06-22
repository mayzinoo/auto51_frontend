//libraries
import React, { Fragment, useEffect, useState } from "react";
//components
import { Row, Col, Container } from "react-bootstrap";
//css
import "./styles/services.css";
//API
import { ServiceApi } from "../../../Api/api";

function Services(props) {
  const [service, setService] = useState([]);

  useEffect(() => {
    ServiceApi()
      .then((serviceData) => {
        setService(serviceData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <Fragment>
      <div className="business-container-wrap">
        <Container className="se-container">
          <h1 className="se-mainheader">Included in every car:</h1>
          <Row style={{ padding: "0px 10px", marginBottom: "24px" }}>
            {service.map((service, index) => {
              return (
                <Col md={6} key={index}>
                  <Row>
                    <div className="se-listItem">
                      <p className="se-listItemName">
                        <i className="fa fa-check-circle"></i>
                        {service.name}
                      </p>
                    </div>
                  </Row>
                </Col>
              );
            })}
          </Row>
          <p className="se-listItem" style={{ marginBottom: "0px" }}>
            Subscribe from&nbsp;<strong>1 to 24 months</strong>&nbsp;and &nbsp;
            <strong>pay only one flat monthly fee.</strong>&nbsp;
          </p>
        </Container>
      </div>
    </Fragment>
  );
}

export default Services;
