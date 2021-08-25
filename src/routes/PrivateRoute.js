import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    // routes only accessiable if u log in
    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='./sign-in' />
                );
            }}
        />
    );
}

export default PrivateRoute;
