import React from 'react';
//To bring in svg as a component
import { ReactComponent as Logo } from './crown.svg';
import { Link } from 'react-router-dom';
import './header.scss';
import { signOut } from '../../firebase/firebase-utils';

const Header = (props) => {
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
                {props.currentUser ? (
                    <Link className='option' onClick={signOut}>
                        Sign Out
                    </Link>
                ) : (
                    <Link className='option' to='./sign-in'>
                        Sign In
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
