import React, { useState } from 'react';
import useForm from '../../custom-hooks/useForm';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './signUp.scss';
import { useHistory } from 'react-router';

const SignUp = () => {
    const [signUpInfo, setSignUpInfo] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (signUpInfo.password !== signUpInfo.confirmPassword) {
            alert('password dont match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                signUpInfo.email,
                signUpInfo.password
            );
            await createUserProfileDocument(user, {
                displayName: signUpInfo.displayName,
            });
            history.push('/');
        } catch (error) {
            alert(error);
        }
        setLoading(false);
    };

    // Takes in an object with the attribute and the value u want to change and change that portion of the signUpInfo
    const handleChangeForAttributes = (changedAttr) => {
        setSignUpInfo({ ...signUpInfo, ...changedAttr });
    };

    return (
        <div className='sign-up'>
            <h2 className='title'>Create an Account</h2>
            <span>Sign Up with your Email and Password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    required
                    value={signUpInfo.displayName}
                    handleChange={(e) =>
                        handleChangeForAttributes({ displayName: e.target.value })
                    }
                    label='Display Name'
                />
                <FormInput
                    type='text'
                    name='email'
                    required
                    value={signUpInfo.email}
                    handleChange={(e) =>
                        handleChangeForAttributes({ email: e.target.value })
                    }
                    label='Email'
                />
                <FormInput
                    type='text'
                    name='password'
                    required
                    value={signUpInfo.password}
                    handleChange={(e) =>
                        handleChangeForAttributes({ password: e.target.value })
                    }
                    label='Password'
                />
                <FormInput
                    type='text'
                    name='confirmPassword'
                    required
                    value={signUpInfo.confirmPassword}
                    handleChange={(e) =>
                        handleChangeForAttributes({
                            confirmPassword: e.target.value,
                        })
                    }
                    label='Confirm Password'
                />
                <Button type='submit' value='submit' disabled={loading}>
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
