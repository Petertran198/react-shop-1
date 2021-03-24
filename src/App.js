import React from 'react';
import './app.scss';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

const Hat = () => {
    return <div>Hats Page</div>;
};
function App() {
    return (
        <>
            <Switch>
                {/* Have access to route prop object(history, location, match) */}
                <Route exact path='/' component={Homepage} />
                <Route exact path='/hats' component={Hat} />
            </Switch>
        </>
    );
}

export default App;
