//libraries
import React, { Fragment } from "react";
//components
import { Container } from "react-bootstrap";

//css
import "./styles/header.css";

function SubHeader(props) {
  const subtitle = props.subtitle;

  return (
    <Fragment>
      <Container className="header-container">
        <h2 className="sub-header">{subtitle}</h2>
      </Container>
    </Fragment>
  );
}

export default SubHeader;
