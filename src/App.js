import React, { useState } from 'react';
import './app.scss';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import PublicRoute from './routes/PublicRoute';
import SpecificCategory from './pages/specific-category/SpecificCategory';
import AddToCart from './pages/add-to-cart/AddToCart';
function App() {
    return (
        <>
            <Header />
            <Switch>
                {/* Have access to route prop object(history, location, match) */}
                <PublicRoute
                    restricted={false}
                    exact
                    path='/'
                    component={Homepage}
                />
                <PublicRoute
                    restricted={false}
                    exact
                    path='/cart'
                    component={AddToCart}
                />

                <PublicRoute
                    restricted={true}
                    component={SignInAndSignUp}
                    path='/sign-in'
                    exact
                />
                <Route exact path='/shop' component={ShopPage} />
                <PublicRoute
                    exact
                    restricted={false}
                    path='/:categoryURL'
                    component={SpecificCategory}
                />
            </Switch>
        </>
    );
}

export default App;
