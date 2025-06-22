//libraries
import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { connect } from "react-redux";
//CSS
import "./styles/TopHeader.css";

function TopHeader(props) {
  const isloggedIn = props.getLogin;

  return (
    <div className="top-header">
      <Container>
        <Row>
          <Col md="6" className="top-header-left">
            <div className="textwidget">
              <ul>
                <li>
                  <i style={{ paddingRight: "5px" }}>
                    <FaPhone color="#222222" fontSize="15px" />
                  </i>
                  Call Us Now : +65-6735-1551
                </li>
                <li>
                  <i style={{ paddingLeft: "10px" }}>
                    <HiOutlineMail color="#222222" fontSize="20px" />
                  </i>
                  E-mail: sales@auto51.biz
                </li>
              </ul>
            </div>
          </Col>
          <Col md="6" className="top-header-right">
            {!isloggedIn && (
              <div className="textwidget" style={{ marginTop: "10px" }}>
                <p>
                  <AiOutlineUser />
                  Welcome to Auto 51
                  <a href="/login" className="welcome-css">
                    Login 
                  </a>
                  <span style={{ marginLeft: "3px" }}> or </span>
                  <a href="/register" className="welcome-css">
                    Register
                  </a>
                </p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
  getLogin: state.UserActions.GetLogin,
});

export default connect(mapStateToProp)(TopHeader);
