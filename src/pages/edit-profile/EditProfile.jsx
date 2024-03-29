import React, { useEffect, useState } from 'react';
import FormInput from '../../components/form-input/FormInput';
import { useAuth } from '../../firebase/AuthContext';
import { useHistory } from 'react-router';
import { firestore } from '../../firebase/firebase-utils';
import { Alert } from 'react-bootstrap';

function EditProfile() {
    const history = useHistory();
    const { currentUser, updateUserProfile } = useAuth();
    const [profileInfo, setProfileInfo] = useState({
        displayName:
            currentUser && currentUser.displayName ? currentUser.displayName : '',
        email: currentUser && currentUser.email ? currentUser.email : '',
        shippingFirstName:
            currentUser && currentUser.shippingFirstName
                ? currentUser.shippingFirstName
                : '',
        shippingLastName:
            currentUser && currentUser.shippingLastName
                ? currentUser.shippingLastName
                : '',
        shippingStreetAddress:
            currentUser && currentUser.shippingStreetAddress
                ? currentUser.shippingStreetAddress
                : '',
        shippingCity:
            currentUser && currentUser.shippingCity ? currentUser.shippingCity : '',
        shippingZip:
            currentUser && currentUser.shippingZip ? currentUser.shippingZip : '',
        shippingState:
            currentUser && currentUser.shippingState
                ? currentUser.shippingState
                : '',
        password: '',
        passwordConfirm: '',
    });

    const [error, setError] = useState([]);
    //If error scroll up the form
    useEffect(() => {
        if (error.length > 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [error, setError]);

    // Takes in an object with the attribute and the value u want to change and change that portion of the profileInfo
    const handleChangeForAttributes = (changedAttr) => {
        setProfileInfo({ ...profileInfo, ...changedAttr });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError([]);
        if (window.confirm('Are you sure you want to update profile?') == true) {
            if (profileInfo.password !== profileInfo.passwordConfirm) {
                setError((err) => [...err, ' Password does not match']);
            }
            if (error.length < 0) {
                try {
                    await updateUserProfile(profileInfo);
                    history.push('./');
                } catch (error) {
                    setError((err) => [...err, error.message]);
                }
            }
        }
    };

    return (
        <>
            {error && error.length != 0 && <Alert variant='danger'>{error}</Alert>}
            <form className='container'>
                <h1 className='lead text-center border p-2 bg-light'>
                    Update Profile
                </h1>
                <FormInput
                    type='text'
                    name='displayName'
                    required
                    value={profileInfo.displayName}
                    handleChange={(e) =>
                        handleChangeForAttributes({ displayName: e.target.value })
                    }
                    label='Display Name'
                />
                <FormInput
                    type='text'
                    name='email'
                    required
                    value={profileInfo.email}
                    handleChange={(e) =>
                        handleChangeForAttributes({ email: e.target.value })
                    }
                    label='Email'
                />
                <h2 className='text-center small'>Primary Shipping Info</h2>
                <FormInput
                    type='text'
                    name='shippingFirst'
                    required
                    value={profileInfo.shippingFirstName}
                    handleChange={(e) =>
                        handleChangeForAttributes({
                            shippingFirstName: e.target.value,
                        })
                    }
                    label='First N.'
                />
                <FormInput
                    type='text'
                    name='shippingLastName'
                    required
                    value={profileInfo.shippingLastName}
                    handleChange={(e) =>
                        handleChangeForAttributes({
                            shippingLastName: e.target.value,
                        })
                    }
                    label='Last N.'
                />
                <FormInput
                    type='text'
                    name='shippingCity'
                    required
                    value={profileInfo.shippingStreetAddress}
                    handleChange={(e) =>
                        handleChangeForAttributes({
                            shippingStreetAddress: e.target.value,
                        })
                    }
                    label='Street Address'
                />
                <FormInput
                    type='text'
                    name='shippingCity'
                    required
                    value={profileInfo.shippingCity}
                    handleChange={(e) =>
                        handleChangeForAttributes({ shippingCity: e.target.value })
                    }
                    label='City'
                />{' '}
                <FormInput
                    type='text'
                    name='shippingZip'
                    required
                    value={profileInfo.shippingZip}
                    handleChange={(e) =>
                        handleChangeForAttributes({ shippingZip: e.target.value })
                    }
                    label='Zip'
                />
                <FormInput
                    type='text'
                    name='shippingState'
                    required
                    value={profileInfo.shippingState}
                    handleChange={(e) =>
                        handleChangeForAttributes({ shippingState: e.target.value })
                    }
                    label='State'
                />
                <h2 className='text-muted small text-center'>
                    (Edit only if you want to change password)
                </h2>
                <FormInput
                    type='password'
                    name='password'
                    required
                    value={profileInfo.password}
                    handleChange={(e) =>
                        handleChangeForAttributes({ password: e.target.value })
                    }
                    label='Password'
                />
                <FormInput
                    type='password'
                    name='passwordConfirm'
                    required
                    value={profileInfo.passwordConfirm}
                    handleChange={(e) =>
                        handleChangeForAttributes({
                            passwordConfirm: e.target.value,
                        })
                    }
                    label='Password Confirm'
                />
                <div className='d-flex justify-content-end'>
                    <button className='btn  btn-primary' onClick={handleSubmit}>
                        Update Profile
                    </button>
                </div>
            </form>
        </>
    );
}

export default EditProfile;
