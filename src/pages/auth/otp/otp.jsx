import React, { useState } from 'react';
import './otp.css';
import { Link } from 'react-router-dom';

const OTPPage = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [message, setMessage] = useState('');

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus to next input
        if (value && index < 3) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpCode = otp.join('');
        // Handle OTP verification logic
        console.log('OTP submitted:', otpCode);
        setMessage('Verification successful!');
    };

    return (
        <div className="otp-page">
            <main className="auth-container">
                <div className="auth-card">
                    <h2>Verify Your Identity</h2>
                    {message ? (
                        <div className="success-message">{message}</div>
                    ) : (
                        <>
                            <p>We've sent a 4-digit code to your email. Please enter it below.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="otp-inputs">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`otp-${index}`}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleChange(e, index)}
                                            required
                                        />
                                    ))}
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Verify
                                </button>
                            </form>
                            <div className="resend-code">
                                <p>Didn't receive a code? <Link to="#">Resend</Link></p>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};

export default OTPPage;