import React, { useState } from 'react';
import useForm from '../../custom-hooks/useForm';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import { signWithGoogle } from '../../firebase/firebase-utils';
import './signIn.scss';
import { useAuth } from '../../firebase/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import SignUp from '../sign-up/SignUp';
const SignIn = ({ noRedirect }) => {
    let history = useHistory();
    const { currentUser, signIn } = useAuth();
    const [email, setEmail, resetEmail] = useForm('');
    const [password, setPassword, resetPassword] = useForm('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        resetEmail();
        resetPassword();
        try {
            await signIn(email, password);
            history.push('/');
        } catch (e) {}
    };

    const handleGoogle = async () => {
        await signWithGoogle();
        if (noRedirect === true) {
            return;
        } else {
            history.push('/');
        }
    };
    return (
        <div className='sign-in' onSubmit={handleSubmit}>
            <h2>Have an Account</h2>
            <span>Sign In with your email and password</span>
            <form>
                <FormInput
                    name='Email'
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
                <Link to='./forget-password' className='link-primary pt-1 small'>
                    Forgot Password?
                </Link>
            </form>
        </div>
    );
};

export default SignIn;
