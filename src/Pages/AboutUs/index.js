//libraries
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//components
import AboutUs from "./sub/AboutUs";
//css

function AboutUsIndex(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/aboutus`} component={AboutUs} />
      </Switch>
    </Fragment>
  );
}

export default AboutUsIndex;
