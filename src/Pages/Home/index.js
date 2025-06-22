// Libraries
import React, { Fragment } from "react";
import { Route, Switch } from 'react-router-dom';
// page 
import IndexNotFound from "../404"
import Home from "./Sub/Home";

const HomeIndex = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/`} component={Home}/>
        <Route exact path={`/home`} component = {Home}/>
        <Route path="*" component={IndexNotFound} />
      </Switch>
    </Fragment>
  )
}
export default HomeIndex;