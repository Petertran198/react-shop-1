import React from 'react';
//To bring in svg as a component
import { ReactComponent as Logo } from './crown.svg';
import { Link } from 'react-router-dom';
import './header.scss';
import SignIn from '../../pages/sign-in-and-sign-up/SignInAndSignUp';
const Header = () => {
    return (
        <header className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='./shop'>
                    Shop
                </Link>
                <Link className='option' to='./shop'>
                    Contact
                </Link>
                <Link className='option' to='./sign-in'>
                    Sign In
                </Link>
            </div>
        </header>
    );
};

export default Header;
