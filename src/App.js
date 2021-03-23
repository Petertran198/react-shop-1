import React from 'react';
import './app.scss';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Homepage} />
            </Switch>
        </>
    );
}

export default App;
