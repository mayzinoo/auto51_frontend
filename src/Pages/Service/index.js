import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
// pages
import Service from "./Sub/service";
// other components
import IndexNotFound from "../404";

const Misc = ({ match }) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/service`} component={Service} />
        <Route path="*" component={IndexNotFound} />
      </Switch>
    </Fragment>
  );
};

export default Misc;
