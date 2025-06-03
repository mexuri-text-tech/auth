import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/auth" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/auth/login" className="navbar-link">Login</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/auth/signup" className="navbar-link">Sign up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;