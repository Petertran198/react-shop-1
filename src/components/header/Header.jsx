import React from 'react';
//To bring in svg as a component
import { ReactComponent as Logo } from './crown.svg';
import { Link } from 'react-router-dom';
import './header.scss';
import { useAuth } from '../../firebase/AuthContext';
import { useCartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const { currentUser, signOut } = useAuth();
    const { itemCount } = useCartContext();
    const handleUpdate = () => {
        return;
    };
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
                {currentUser && currentUser.displayName ? (
                    <div className='option drop-down'>
                        <div className='dropdown-title'>
                            {/* capitalized Name */}
                            {currentUser.displayName.toUpperCase()[0] +
                                currentUser.displayName.slice(1)}
                        </div>
                        <div className='dropdown-content'>
                            <Link className='dropdown-link' to='./edit-profile'>
                                Edit Profile
                            </Link>

                            <hr />

                            <Link
                                to='./sign-in'
                                className='btn btn-block btn-danger mt-0'
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
                <Link className='option' to='./cart'>
                    <div className='position-relative'>
                        <span className='item-count position-absolute text-secondary small'>
                            {itemCount}
                        </span>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
