import React, { useState } from 'react';
import "./login.css"; // Import the CSS for styling
import Footer from './Footer';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        aadhar: '',
        dob: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        motherPhone: '',
        college: '',
        cgpa: '',
        password: '',
        confirmPassword: '',
        userType: 'Student', // Default user type
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate passwords
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Sign Up API call
        alert('Sign up successful!');
    };

    return (
        
        <div>
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                
                <label>Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                
                <label>Aadhar Number:</label>
                <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} required />
                
                <label>Date of Birth:</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                
                <label>Father's Name:</label>
                <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
                
                <label>Father's Phone:</label>
                <input type="tel" name="fatherPhone" value={formData.fatherPhone} onChange={handleChange} required />
                
                <label>Mother's Name:</label>
                <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
                
                <label>Mother's Phone:</label>
                <input type="tel" name="motherPhone" value={formData.motherPhone} onChange={handleChange} required />
                
                <label>College:</label>
                <input type="text" name="college" value={formData.college} onChange={handleChange} required />
                
                <label>CGPA:</label>
                <input type="number" step="0.01" name="cgpa" value={formData.cgpa} onChange={handleChange} required />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

                

                <button className="button" type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    );
}

export default SignUp;
