import "../styles/Navcomponent.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { connect } from "react-redux";
import { setLogin, setLogout, setGetUserApi } from "../../../reducers/userActionsStore";
import { FaUser } from "react-icons/fa";

function Navcomponent(props) {
  const isloggedIn = props.getLogin;

  const [navtoggleIcon, setNavtoggleIcon] = useState(
    <div className="NavToggleBtn">
      MENU <GiHamburgerMenu color="#00a55e" fontSize="20px" />
    </div>
  );
  const [navtoggle, setNavtoggle] = useState(true);

  const toggleNavbtn = () => {
    setNavtoggle(!navtoggle);
    if (navtoggle) {
      setNavtoggleIcon(
        <div className="NavToggleBtn">
          MENU <FaWindowClose color="#00a55e" fontSize="20px" />
        </div>
      );
    } else
      setNavtoggleIcon(
        <div className="NavToggleBtn">
          MENU <GiHamburgerMenu color="#00a55e" fontSize="20px" />
        </div>
      );
  };

  const handleLogout = (e) => {
    e.preventDefault();
    props.dispatch(setLogin(false));
    props.dispatch(setLogout());
    props.dispatch(setGetUserApi(null));
    window.location.assign("/login");
  };

  return (
    <div className="container">
      <Navbar
        sticky="top"
        style={{ padding: "0" }}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand className="navbar-brand">
          <div className="company-logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleNavbtn}
          style={{ padding: "0", border: "none" }}
        >
          {navtoggleIcon}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink className="navlink" exact to="/">
              HOME
            </NavLink>
            <NavLink className="navlink" exact to="/vehicles">
              VEHICLES
            </NavLink>
            <NavLink className="navlink" exact to="/dealers">
              DEALERS
            </NavLink>
            <NavLink className="navlink" exact to="/service">
              SERVICES
            </NavLink>
            <NavLink className="navlink" exact to="/contact">
              CONTACT
            </NavLink>
            {isloggedIn && (
              <NavDropdown
                title={
                  <span className="navToggleBtn-name">
                    <FaUser className="user-icon" />
                    MY ACCOUNT
                  </span>
                }
                id="nav-dropdown-autoclose-true"
              >
                <NavDropdown.Item eventKey="4.2" href="/account/profile">
                  <i
                    className="fas fa-address-card"
                    style={{ color: "#00a55e" }}
                  ></i>
                  <span className="profile-css-span"> PROFILE</span>
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="4.3" href="/account/booking">
                  <i
                    className="fas fa-sliders-h"
                    style={{ color: "#00a55e" }}
                  ></i>
                  <span className="profile-css-span">DASHBORD</span>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  eventKey="4.4"
                  onClick={(e) => handleLogout(e)}
                >
                  <i
                    className="fas fa-sign-out-alt"
                    style={{ color: "#dc3545" }}
                  ></i>
                  <span className="profile-css-span"> LOG OUT</span>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
  getLogin: state.UserActions.GetLogin,
});

export default connect(mapStateToProp)(Navcomponent);
