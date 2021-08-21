import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './signInAndSignUp.scss';
const SignInAndSignUp = () => {
    return (
        <>
            <div className='sign-in-and-sign-up'>
                <SignIn noRedirect={false} />
                <SignUp />
            </div>
        </>
    );
};

export default SignInAndSignUp;
