import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../firebase/AuthContext';
import './forgotPassword.scss';

export default function ForgotPassword() {
    const [resetEmail, setResetEmail] = useState('');
    const [notice, setNotice] = useState({});
    const { resetPassword } = useAuth();
    const handleSubmit = async () => {
        setNotice();
        try {
            await resetPassword(resetEmail);
            setNotice({
                message: 'Please check email for reset link',
                variant: 'success',
            });
        } catch (error) {
            setNotice({
                message: 'Unable to reset email. Please verify or try again later',
                variant: 'danger',
            });
        }
    };
    return (
        <>
            {notice && notice.message && (
                <Alert variant={notice.variant}>{notice.message}</Alert>
            )}
            <Form className='vh-100 d-flex justify-content-center align-items-center gradient-bg'>
                <Form.Group className='d-flex' controlId='formBasicEmail'>
                    <Form.Control
                        type='email'
                        style={{ minWidth: '450px' }}
                        placeholder='Enter email to reset password'
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                    />
                    <Button className='pl-3' onClick={handleSubmit}>
                        Reset Password
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
}
