import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <main className="home-container">
                <section className="hero">
                    <h1>Welcome to Our Platform</h1>
                    <p>Discover amazing features that will help you grow</p>
                    <div className="cta-buttons">
                        <Link to="/auth/login" className="btn btn-primary">Login</Link>
                        <Link to="/auth/signup" className="btn btn-outline">Sign Up</Link>
                    </div>
                </section>

                <section className="features">
                    <div className="feature-card">
                        <h3>Easy to Use</h3>
                        <p>Intuitive interface designed for all users</p>
                    </div>
                    <div className="feature-card">
                        <h3>Secure</h3>
                        <p>Your data is always protected</p>
                    </div>
                    <div className="feature-card">
                        <h3>Powerful</h3>
                        <p>All the tools you need in one place</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;