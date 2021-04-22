import React, { useState } from 'react';
import useForm from '../../custom-hooks/useForm';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import { signWithGoogle } from '../../firebase/firebase-utils';
import './signIn.scss';
import { useAuth } from '../../firebase/AuthContext';
import { useHistory } from 'react-router-dom';

const SignIn = (props) => {
    let history = useHistory();
    const { currentUser } = useAuth();
    const [email, setEmail, resetEmail] = useForm('');
    const [password, setPassword, resetPassword] = useForm('');

    const handleSubmit = (e) => {
        e.preventDefault();
        resetEmail();
        resetPassword();
    };

    const handleGoogle = async () => {
        await signWithGoogle();
        history.push('/');
    };
    return (
        <div className='sign-in' onSubmit={handleSubmit}>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>
            <form>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    required
                    handleChange={setEmail}
                    label='Email'
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    required
                    handleChange={setPassword}
                    label='Password'
                />
                <div className='buttons'>
                    <Button type='submit' value='submit'>
                        Sign In
                    </Button>
                    <Button isGoogleBtn={true} onClick={handleGoogle}>
                        Google Auth{' '}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
