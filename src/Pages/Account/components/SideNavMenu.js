//Libraries
import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
//CSS
import "../components/styles/SideNavMenu.css";
import { BsFillPersonFill, BsList } from "react-icons/bs";
//import { BsReceiptCutoff } from "react-icons/bs";

import $ from "jquery";

function SideNavMenu(props) {
  const isMinimize = props.GetMinimize;

  $(window).resize(function () {
    if ($(window).width() < 1024) {
      $(".sidenavmenu").addClass("minimize");
    } else {
      $(".sidenavmenu").removeClass("minimize");
    }
  });

  useEffect(() => {
    const loc = window.location.pathname;
    const menuItems = document.querySelectorAll(".linkWrap");
    menuItems.forEach((el, index) => {
      let hrefValue = el.getAttribute("href");
      if (hrefValue === loc) {
        $(`#linkWrap-${index}`).addClass("active");
      } else {
        $(`#linkWrap-${index}`).removeClass("active");
      }
    });
  }, []);

  return (
    <Fragment>
      <div className={`sidenavmenu ${isMinimize ? "minimize" : ""}`}>
        <div className="topSection">
          <div id="nav">
            <a id="linkWrap-0" className="linkWrap" href="/account/profile">
              <div className="sideIcons">
                <i>
                  <BsFillPersonFill />
                </i>
              </div>
              <div className="sideNames">My Account</div>
            </a>
            <a id="linkWrap-1" className="linkWrap" href="/account/booking">
              <div className="sideIcons">
                <i>
                  <BsList />
                </i>
              </div>
              <div className="sideNames">My Booking</div>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetMinimize: state.UserActions.GetMinimize,
});

export default connect(mapStateToProp)(SideNavMenu);
