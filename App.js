import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ScholarshipList from './components/ScholarshipList';
import ScholarshipDetail from './components/ScholarshipDetail';
import ApplicationForm from './components/ApplicationForm';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ForgotPassword from './components/ForgotPassword';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Home Page Route */}
                <Route path="/" element={<HomePage />} />
                
                
                {/* Scholarship Detail Route with Dynamic Parameter */}
                <Route path="/scholarships/:id" element={<ScholarshipDetail />} />
                
                {/* Scholarship List Route */}
                <Route path="/scholarships" element={<ScholarshipList />} />
                
                {/* About Us and Contact Us Routes */}
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/forgot" element={<ForgotPassword />} />
                
                {/* Application Form Route */}
                <Route path="/apply" element={<ApplicationForm />} />
                
                {/* Login Route */}
                <Route path="/login" element={<Login />} />
                
                {/* SignUp Route */}
                <Route path="/signup" element={<SignUp />} />
                
                
            </Routes>
        </Router>
    );
}

export default App;
