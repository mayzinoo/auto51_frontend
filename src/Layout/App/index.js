import { Route } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import { Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../Layout/Footers/Footer";
import MenuHeader from "../../Layout/Headers/MenuHeader";
import TopHeader from "../../Layout/Headers/TopHeader";

import { connect } from "react-redux";

const Home = lazy(() => import("../../Pages/Home"));
const Vehicles = lazy(() => import("../../Pages/Vehicles"));
const Dealers = lazy(() => import("../../Pages/Dealers"));
const Account = lazy(() => import("../../Pages/Account"));
const Service = lazy(() => import("../../Pages/Service"));
const Contact = lazy(() => import("../../Pages/Contact/Contact"));
const AboutUs = lazy(() => import("../../Pages/AboutUs"));
const IndexNotFound = lazy(() => import("../../Pages/404"));
// smaller pages port
const Login = lazy(() => import("../../Pages/PreEmpt/Sub/login"));
const Register = lazy(() => import("../../Pages/PreEmpt/Sub/register"));
const Verify = lazy(() => import("../../Pages/PreEmpt/Sub/verify"));
const Reset = lazy(() => import("../../Pages/PreEmpt/Sub/reset"));
const ResetConfirm = lazy(() => import("../../Pages/PreEmpt/Sub/resetconfirm"));
const ChangePwd = lazy(() => import("../../Pages/PreEmpt/Sub/changepwd"));

const AppEc = (props) => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">
                <i className="fas fa-spinner fa-spin"></i> Please wait while we
                are loading the page
              </h6>
            </div>
          </div>
        }
      >
        <TopHeader />
        <MenuHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route strict path="/home" component={Home} />
          <Route strict path="/vehicles" component={Vehicles} />
          <Route strict path="/dealers" component={Dealers} />
          <Route strict path="/account" component={Account} />
          <Route strict path="/contact" component={Contact} />
          <Route strict path="/service" component={Service} />
          <Route strict path="/aboutus" component={AboutUs} />

          <Route strict path="/login" component={Login} />
          <Route strict path="/register" component={Register} />
          <Route strict path="/verify" component={Verify} />
          <Route strict path="/resetpassword" component={Reset} />
          <Route
            strict
            path="/resetconfirmpassword/:id"
            component={ResetConfirm}
          />
          <Route strict path="/changepassword" component={ChangePwd} />
          <Route strich path="*" component={IndexNotFound} />
        </Switch>
        <Footer />
      </Suspense>
      <ToastContainer />
    </Fragment>
  );
};

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp)(AppEc);

// export default AppEc;
