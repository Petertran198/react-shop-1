import React from 'react';
import useForm from '../../custom-hooks/useForm';

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
                <input
                    name='email'
                    type='email'
                    value={email}
                    required
                    onChange={setEmail}
                />
                <label>Email</label>
                <input
                    name='password'
                    type='password'
                    value={password}
                    required
                    onChange={setPassword}
                />
                <label>Password</label>
                <input type='submit' value='submit' />
            </form>
        </div>
    );
};

export default SignIn;
