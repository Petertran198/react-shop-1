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
                <Link className='option' to='./'>
                    Categories
                </Link>
                <Link className='option' to='./shop'>
                    Shop
                </Link>
                <Link className='option' to='./shop'>
                    Contact
                </Link>

                {props.currentUser ? (
                    <div className='option drop-down'>
                        <div className='dropdown-title'>
                            {/* capitalized Name */}
                            {props.currentUser.displayName.toUpperCase()[0] +
                                props.currentUser.displayName.slice(1)}
                        </div>
                        <div className='dropdown-content'>
                            <Link
                                to='./sign-in'
                                className='dropdown-link'
                                onClick={signOut}
                            >
                                Sign Out
                            </Link>
                        </div>
                    </div>
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
