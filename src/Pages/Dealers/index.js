import React, {Fragment} from "react";
import { Route, Switch} from 'react-router-dom';
// page 
import IndexNotFound from "../404";
import Dealers from "./Sub/Dealers";
//Component

const Dealer = () => {
    return(
        <Fragment>
            <Switch>
                <Route exact path={`/dealers`} component={Dealers}></Route>
                <Route path="*" component={IndexNotFound} />
            </Switch>
        </Fragment>
    )
}

export default Dealer;