import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './login.css';
import Footer from './Footer';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Authentication API call
        alert('Logged in successfully!');
    };

    return (
        <div className="login-page">
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button className="button" type="submit">Login</button>
                </form>

                {/* Sign Up and Forgot Password Links */}
                <div className="login-links">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    <p><Link to="/forgot">Forgot Password?</Link></p>
                </div>
            </div>{/* Make sure Footer is outside of the container */}
        </div>
    );
}

export default Login;
