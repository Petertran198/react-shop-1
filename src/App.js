import React, { useState, useEffect } from 'react';
import './app.scss';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { AuthProvider } from './firebase/AuthContext';
function App() {
    return (
        <>
            <Header />
            <AuthProvider>
                <Switch>
                    {/* Have access to route prop object(history, location, match) */}
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/sign-in' component={SignInAndSignUp} />
                </Switch>
            </AuthProvider>
        </>
    );
}

export default App;
