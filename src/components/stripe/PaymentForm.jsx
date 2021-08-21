import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import SignIn from '../sign-in/SignIn';
import FormInput from '../form-input/FormInput';
import { useAuth } from '../../firebase/AuthContext';
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

    const [emailInfo, setEmailInfo] = useState('');

    //currentUser to fill form
    const { currentUser } = useAuth();

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
            {' '}
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
                <form onSubmit={handleSubmit} className='col-md-6'>
                    <h1>User Info</h1>
                    <FormInput
                        name='Email'
                        type='email'
                        value={currentUser ? currentUser.email : emailInfo}
                        required
                        handleChange={(e) => setEmailInfo(e.target.value)}
                        label='Email'
                    />
                    <CardElement options={CARD_OPTIONS} />
                    <button type='submit' className='order-button'>
                        Pay
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm;
