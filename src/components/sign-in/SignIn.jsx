import React from 'react';
import useForm from '../../custom-hooks/useForm';
import { signWithGoogle } from '../../firebase/firebase-utils';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import './signIn.scss';
const SignIn = () => {
    const [email, setEmail, resetEmail] = useForm('');
    const [password, setPassword, resetPassword] = useForm('');
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
                <Button onClick={signWithGoogle}>Sign In With Google</Button>
            </form>
        </div>
    );
};

export default SignIn;
