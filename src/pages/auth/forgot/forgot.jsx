import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgot.css';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic
        console.log('Forgot password submitted:', email);
        setMessage(`Password reset link has been sent to your email : ${email}`);
    };

    return (
        <div className="forgot-password-page">
            <main className="auth-container">
                <div className="auth-card">
                    <h2>Reset Your Password</h2>
                    {message ? (
                        <div className="success-message">{message}</div>
                    ) : (
                        <>
                            <p>Enter your email and we'll send you a link to reset your password.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Send Reset Link
                                </button>
                            </form>
                        </>
                    )}
                    <div className="auth-footer">
                        <p>Remember your password? <Link to="/auth/login">Login</Link></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ForgotPasswordPage;