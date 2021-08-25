import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const { currentUser } = useAuth();
    return (
        // restricted is allowing us to see which public route to restricted for the currentUser to see.
        // Exmple Signin is a RESTRICTED route. Therefore if there is a currentUser this will redirect since restricted === true
        <Route
            {...rest}
            render={(props) =>
                currentUser && restricted ? (
                    <Redirect to='./' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PublicRoute;
