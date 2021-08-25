import React from 'react';
import FormInput from '../form-input/FormInput';
import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../contexts/CartContext';
import { useHistory } from 'react-router-dom';

export default function FormShippingInfo({
    currentUser,
    firstNameShipping,
    setFirstNameShipping,
    lastNameShipping,
    setLastNameShipping,
    setWhichFormToDisplay,
    streetShipping,
    setStreetShipping,
    zipShipping,
    setZipShipping,
    setCityShipping,
    cityShipping,
}) {
    const { cartItems, clearCart, total } = useCartContext();
    const history = useHistory();

    return (
        <form className=''>
            <h1>Shipping Info</h1>
            <FormInput
                name='First Name'
                type='text'
                value={
                    currentUser && currentUser.firstNameShipping
                        ? currentUser.firstNameShipping
                        : firstNameShipping
                }
                required
                handleChange={(e) => setFirstNameShipping(e.target.value)}
                label='First N.'
            />
            <FormInput
                name='Last Name'
                type='text'
                value={
                    currentUser && currentUser.lastNameShipping
                        ? currentUser.lastNameShipping
                        : lastNameShipping
                }
                required
                handleChange={(e) => setLastNameShipping(e.target.value)}
                label='Last N.'
            />
            <FormInput
                name='Street Address'
                type='text'
                value={
                    currentUser && currentUser.streetShipping
                        ? currentUser.streetShipping
                        : streetShipping
                }
                required
                handleChange={(e) => setStreetShipping(e.target.value)}
                label='Street Address'
            />
            <FormInput
                name='City'
                type='text'
                value={
                    currentUser && currentUser.cityShipping
                        ? currentUser.cityShipping
                        : cityShipping
                }
                required
                handleChange={(e) => setCityShipping(e.target.value)}
                label='City'
            />
            <FormInput
                name='Zip Code'
                type='text'
                value={
                    currentUser && currentUser.zipShipping
                        ? currentUser.zipShipping
                        : zipShipping
                }
                required
                handleChange={(e) => setZipShipping(e.target.value)}
                label='Zip Code'
            />

            {/* <CardElement options={CARD_OPTIONS} /> */}
            <button
                className=' mb-3 btn btn-success btn-lg btn-block w-100'
                onClick={(e) => {
                    e.preventDefault();
                    history.push({
                        pathname: '/purchased-complete',
                        state: {
                            cartItems: cartItems,
                            total: total,
                        },
                    });
                    clearCart();
                }}
            >
                <FontAwesomeIcon icon={faHandPointRight} />
                Complete Purchase
            </button>
            <ProgressBar animated now={99} />
        </form>
    );
}
