import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    // Function to handle scrolling effect
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle About Us click and navigate to the section
    const handleAboutUsClick = () => {
        navigate('/aboutus');
        window.location.reload(); // Navigate to Home and scroll to #aboutus section
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link onClick={handleAboutUsClick} className="nav-button">About Us</Link></li>
                <li><Link to="/scholarships">Scholarships</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <h2 className="navbar-title">SCHOLARSHIP MANAGEMENT SYSTEM</h2>
        </nav>
    );
}

export default Navbar;
