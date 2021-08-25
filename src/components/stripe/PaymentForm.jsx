import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import SignIn from '../sign-in/SignIn';
import { useAuth } from '../../firebase/AuthContext';
import FormUserInfo from './FormUserInfo';
import FormBillingInfo from './FormBillingInfo';
import FormShippingInfo from './FormShippingInfo';
import PurchaseSuccessForm from './PurchaseSuccessForm';
import { useCartContext } from '../../contexts/CartContext';

//Style option for stripe
const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#001',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': { color: '#fce883' },
            '::placeholder': { color: '#87bbfd' },
        },
        invalid: {
            iconColor: 'red',
            color: 'red',
        },
    },
};
function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [whichFormToDisplay, setWhichFormToDisplay] = useState({
        userInfoForm: true,
        userBillingForm: false,
        userShippingForm: false,
    });
    //Form user info state
    const [emailInfo, setEmailInfo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    //Form billing info state
    const [firstNameBilling, setFirstNameBilling] = useState('');
    const [lastNameBilling, setLastNameBilling] = useState('');
    const [streetBilling, setStreetBilling] = useState('');
    const [zipBilling, setZipBilling] = useState('');
    const [cityBilling, setCityBilling] = useState('');
    //Form Shipping info
    const [firstNameShipping, setFirstNameShipping] = useState('');
    const [lastNameShipping, setLastNameShipping] = useState('');
    const [streetShipping, setStreetShipping] = useState('');
    const [zipShipping, setZipShipping] = useState('');
    const [cityShipping, setCityShipping] = useState('');

    //currentUser to fill form
    const { currentUser } = useAuth();
    // cartItem info
    const { cartItems } = useCartContext();
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('error----', error);
        } else {
            console.log('PaymentMethod-----', paymentMethod);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                {!currentUser ? (
                    <div className='col-md-6'>
                        <SignIn noRedirect={true} />
                    </div>
                ) : (
                    <h3
                        className='h-100 col-md-6 d-flex justify-content-center align-items-center text-muted'
                        style={{ minHeight: '350px' }}
                    >
                        Welcome {currentUser.email}
                    </h3>
                )}
                <div className='col-md-6'>
                    {whichFormToDisplay.userInfoForm === true && (
                        <FormUserInfo
                            currentUser={currentUser}
                            firstName={firstName}
                            setFirstName={setFirstName}
                            lastName={lastName}
                            setLastName={setLastName}
                            emailInfo={emailInfo}
                            setEmailInfo={setEmailInfo}
                            street={street}
                            setStreet={setStreet}
                            zip={zip}
                            setZip={setZip}
                            setCity={setCity}
                            city={city}
                            setWhichFormToDisplay={setWhichFormToDisplay}
                        />
                    )}
                    {whichFormToDisplay.userBillingForm === true && (
                        <FormBillingInfo
                            firstNameBilling={firstNameBilling}
                            setFirstNameBilling={setFirstNameBilling}
                            lastNameBilling={lastNameBilling}
                            setLastNameBilling={setLastNameBilling}
                            setWhichFormToDisplay={setWhichFormToDisplay}
                            streetBilling={streetBilling}
                            setStreetBilling={setStreetBilling}
                            zipBilling={zipBilling}
                            setZipBilling={setZipBilling}
                            setCityBilling={setCityBilling}
                            cityBilling={cityBilling}
                        />
                    )}
                    {whichFormToDisplay.userShippingForm === true && (
                        <FormShippingInfo
                            currentUser={currentUser}
                            firstNameShipping={firstNameShipping}
                            setFirstNameShipping={setFirstNameShipping}
                            lastNameShipping={lastNameShipping}
                            setLastNameShipping={setLastNameShipping}
                            setWhichFormToDisplay={setWhichFormToDisplay}
                            streetShipping={streetShipping}
                            setStreetShipping={setStreetShipping}
                            zipShipping={zipShipping}
                            setZipShipping={setZipShipping}
                            setCityShipping={setCityShipping}
                            cityShipping={cityShipping}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default PaymentForm;
