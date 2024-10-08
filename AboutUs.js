import React from 'react';
import "./aboutus.css"; // Import the CSS for styling

function AboutUs() {
    return (
        <div className="aboutus-container">
            <div className="aboutus-content">
                <h2>About Our Platform</h2>
                <p>
                    Welcome to our Scholarship Management System! Our platform is dedicated to helping students unlock their educational potential by providing access to a wide range of scholarships and financial aid options. We believe that education should be accessible to everyone, and our mission is to empower students to pursue their dreams without the financial burden.
                </p>
                <h3>Our Vision</h3>
                <p>
                    We envision a world where every student, regardless of their financial situation, has the opportunity to achieve their academic goals. Our platform aims to bridge the gap between students and available funding resources, simplifying the process of finding and applying for scholarships.
                </p>
                <h3>What We Offer</h3>
                <ul>
                    <li>A robust and updated database of scholarships and financial aid programs tailored to various needs.</li>
                    <li>User-friendly interface for managing applications and deadlines effectively.</li>
                    <li>Personalized recommendations to match students with the best funding opportunities.</li>
                    <li>Expert tips and resources to enhance application quality and increase chances of success.</li>
                </ul>
                <h3>Get in Touch</h3>
                <p>
                    We’re here to support you every step of the way! If you have any inquiries or require assistance, please don’t hesitate to contact us at 
                    <a href="mailto:support@scholarshipplatform.com"> support@scholarshipplatform.com</a>. Your educational journey is important to us, and we’re committed to helping you succeed.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
