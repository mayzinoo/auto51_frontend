//libraries
import React, { Fragment } from "react";
//components
import { Container } from "react-bootstrap";

//css
import "./styles/header.css";

function Header(props) {
  
  return (
    <Fragment>
      <Container className="header-container">
        <h1 className="header">
            About Us
        </h1>
      </Container>
    </Fragment>
  );
}

export default Header;
