import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    Mexuri Auth Test
                </a>

                {/* Mobile Menu Button */}
                <button
                    className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggle-icon"></span>
                    <span className="navbar-toggle-icon"></span>
                    <span className="navbar-toggle-icon"></span>
                </button>

                {/* Navigation Links */}
                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/login" className="navbar-link">Login</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/signup" className="navbar-link">Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;