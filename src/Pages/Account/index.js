//libraries
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
//components
import SideNavMenu from "./components/SideNavMenu";
import MyAccount from "./sub/MyAccount";
import EditProfile from "./components/EditProfile";
import MyBooking from "./sub/MyBooking";
import ConfrimBooking from "./components/ConfirmBooking";
import PageNotFound from "../404";
//css
import "./components/styles/index.css";

function Account() {
  return (
    <Fragment>
      <div className="account-wrap">
        <SideNavMenu />
        <Switch>
          <Route exact path={`/account/profile`} component={MyAccount} />
          <Route exact path={`/account/editprofile`} component={EditProfile} />
          <Route exact path={`/account/booking/`} component={MyBooking} />
          <Route
            exact
            path={`/account/confirmbooking/:id`}
            component={ConfrimBooking}
          />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});
export default connect(mapStateToProp)(Account);
