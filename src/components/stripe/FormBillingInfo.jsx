import React from 'react';
import FormInput from '../form-input/FormInput';
import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

export default function FormBillingInfo({
    firstNameBilling,
    setFirstNameBilling,
    lastNameBilling,
    setLastNameBilling,
    setWhichFormToDisplay,
    streetBilling,
    setStreetBilling,
    zipBilling,
    setZipBilling,
    setCityBilling,
    cityBilling,
}) {
    return (
        <form className=''>
            <h1>Billing Info</h1>
            <FormInput
                name='Billing First Name'
                type='text'
                value={firstNameBilling}
                required
                handleChange={(e) => setFirstNameBilling(e.target.value)}
                label='Billing First N.'
            />
            <FormInput
                name='Billing Last Name'
                type='text'
                value={lastNameBilling}
                required
                handleChange={(e) => setLastNameBilling(e.target.value)}
                label='Billing Last N.'
            />
            <FormInput
                name='Street Address'
                type='text'
                value={streetBilling}
                required
                handleChange={(e) => setStreetBilling(e.target.value)}
                label='Billing Street Address'
            />
            <FormInput
                name='Billing City Address'
                type='text'
                value={cityBilling}
                required
                handleChange={(e) => setCityBilling(e.target.value)}
                label='Billing City Address'
            />
            <FormInput
                name='Billing Zip Code'
                type='text'
                value={zipBilling}
                required
                handleChange={(e) => setZipBilling(e.target.value)}
                label='Billing Zip Code'
            />
            {/* <CardElement options={CARD_OPTIONS} /> */}
            <button
                className=' mb-3 btn btn-primary btn-lg btn-block w-100'
                onClick={(e) => {
                    e.preventDefault();
                    setWhichFormToDisplay({
                        userInfoForm: false,
                        userBillingForm: false,
                        userShippingForm: true,
                    });
                }}
            >
                <FontAwesomeIcon icon={faHandPointRight} />
                Shipping Address
            </button>
            <ProgressBar animated now={66} />
        </form>
    );
}
