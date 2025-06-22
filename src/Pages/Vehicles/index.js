// Libraries
import React, {Fragment} from "react";
import { Route, Switch} from 'react-router-dom';
// page 
import IndexNotFound from "../404";
import Vehicles from './Sub/Vehicles';
import VehicleDetails from "./Sub/VehicleDetails";
// component 

const Vehicle = (props) => {
    return (
        <Fragment>
            <Switch>
                <Route exact path={`/vehicles`} component={Vehicles}/>
                <Route exact path={`/vehicles/details/:id`} component={VehicleDetails}/>
                <Route path="*" component={IndexNotFound} />
            </Switch>
        </Fragment>

    )
}

export default Vehicle;