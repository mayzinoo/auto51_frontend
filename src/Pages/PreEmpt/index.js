//Library
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//Component
import Login from "./Sub/login";
import Reset from "./Sub/reset";
import PageNotFound from "../404/index";

const PreEmpt = ({ match }) => (
  <Fragment>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path={`/reset`} component={Reset} />
      <Route from="*" component={PageNotFound} />
    </Switch>
  </Fragment>
);

export default PreEmpt;
