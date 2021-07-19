import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const DATA='jwt'
export const PrivateRoute = ({
                                 isAuthenticated,
                                 component: Component,
                                 ...rest
                             }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ||   ( localStorage.getItem(DATA)!==null) ? (
            <div>

                <Component {...props} />
            </div>
        ): (
            <Redirect to="/SignIn" />

        )
    )} />
)

const mapStateToProps = (state) => ({

    isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);

