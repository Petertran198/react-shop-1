import React from 'react';
import useForm from '../../custom-hooks/useForm';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import { signWithGoogle, logout } from '../../firebase/firebase-utils';
import './signIn.scss';
import { useAuth } from '../../firebase/AuthContext';

const SignIn = () => {
    const [email, setEmail, resetEmail] = useForm('');
    const { currentUser } = useAuth();
    const [password, setPassword, resetPassword] = useForm('');
    console.log();
    const handleSubmit = (e) => {
        e.preventDefault();
        resetEmail();
        resetPassword();
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
                <Button type='submit' value='submit'>
                    Sign In
                </Button>
                <Button onClick={signWithGoogle}>Google Auth</Button>
            </form>
        </div>
    );
};

export default SignIn;
