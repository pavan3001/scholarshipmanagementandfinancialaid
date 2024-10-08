// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';  // Import the CSS file

const AdminLogin = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);  // State to track successful login
  const navigate = useNavigate();

  // Hardcoded admin credentials
  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password123';

  const handleAdminLogin = (event) => {
    event.preventDefault();

    // Check if the provided username and password match the hardcoded credentials
    if (adminUsername === hardcodedUsername && adminPassword === hardcodedPassword) {
      sessionStorage.setItem('adminUsername', adminUsername); // Store admin username in sessionStorage
      setSuccess(true);  // Set success state to true
      setError('');  // Clear any previous error messages

      // Simulate a delay for the user to see the success message before redirection
      setTimeout(() => {
        navigate('/adminhome');  // Redirect to the admin dashboard/home page after 2 seconds
      }, 2000);
    } else {
      setError('Invalid username or password');  // Set error message for invalid credentials
      setSuccess(false);  // Ensure success state is false if login fails
    }
  };

  return (
    <div className="admin-login-container">
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h2>Admin Login</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if login fails */}
      {success && <p style={{ color: 'green' }}>Login Successful! Redirecting...</p>} {/* Show success message */}

      <form onSubmit={handleAdminLogin}>
        <div>
          <label htmlFor="adminUsername">Username:</label>
          <input
            type="text"
            id="adminUsername"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="adminPassword">Password:</label>
          <input
            type="password"
            id="adminPassword"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;