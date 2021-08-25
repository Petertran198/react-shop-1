import React from 'react';
import FormInput from '../form-input/FormInput';
import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
function FormUserInfo({
    currentUser,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    emailInfo,
    setEmailInfo,
    street,
    setStreet,
    zip,
    setZip,
    city,
    setCity,
    setWhichFormToDisplay,
}) {
    console.log(firstName);
    return (
        <form className=''>
            <h1>User Info</h1>
            <FormInput
                name='First Name'
                type='text'
                value={
                    currentUser && currentUser.firstName
                        ? currentUser.firstName
                        : firstName
                }
                required
                handleChange={(e) => setFirstName(e.target.value)}
                label='First Name'
            />
            <FormInput
                name='Last Name'
                type='text'
                value={
                    currentUser && currentUser.lastName
                        ? currentUser.lastName
                        : lastName
                }
                required
                handleChange={(e) => setLastName(e.target.value)}
                label='Last Name'
            />
            <FormInput
                name='Email'
                type='email'
                value={
                    currentUser && currentUser.email ? currentUser.email : emailInfo
                }
                required
                handleChange={(e) => setEmailInfo(e.target.value)}
                label='Email'
            />
            <FormInput
                name='Street Address'
                type='text'
                value={
                    currentUser && currentUser.street ? currentUser.street : street
                }
                required
                handleChange={(e) => setStreet(e.target.value)}
                label='Street Address'
            />
            <FormInput
                name='City'
                type='text'
                value={currentUser && currentUser.city ? currentUser.city : city}
                required
                handleChange={(e) => setCity(e.target.value)}
                label='City'
            />
            <FormInput
                name='Zip Code'
                type='text'
                value={currentUser && currentUser.zip ? currentUser.zip : zip}
                required
                handleChange={(e) => setZip(e.target.value)}
                label='Zip Code'
            />{' '}
            {/* <CardElement options={CARD_OPTIONS} /> */}
            <button
                className=' mb-3 btn btn-primary btn-lg btn-block w-100'
                onClick={(e) => {
                    e.preventDefault();

                    setWhichFormToDisplay({
                        userInfoForm: false,
                        userBillingForm: true,
                        userShippingForm: false,
                    });
                }}
            >
                <FontAwesomeIcon icon={faHandPointRight} />
                Billing Address
            </button>
            <ProgressBar animated now={33} />
        </form>
    );
}

export default FormUserInfo;
