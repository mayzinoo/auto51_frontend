import React, { Fragment} from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// component
import AppEc from './Layout/App'
// css
import './assets/index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, date: new Date() };
    }
    LoadingPage() {
            return <div>Loading user information...</div>
    }

    render() {
        return (
            <Fragment>
                <AppEc />
            </Fragment>
        )
    }
}

const mapStateToProp = state => ({
});

export default withRouter(connect(mapStateToProp)(App));