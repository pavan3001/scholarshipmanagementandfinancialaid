import React, { useState } from 'react';
import './contactus.css'; // Import the CSS file for styling
import Footer from './Footer';

function ContactUs() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Simulate form submission (you would replace this with actual email sending logic)
        setIsSubmitted(true);

        // Show an alert message when the form is submitted
        alert('Mail has been sent successfully!');

        // Clear the form (optional, if you want to reset the form after submission)
        e.target.reset();
    };

    return (
        <div className='contactus'><br></br> <br></br>
            <div className="contactus-container">
                {/* Show "Mail sent successfully!" message on top after submission */}
                {isSubmitted && (
                    <div className="success-message">
                        Mail sent successfully!
                    </div>
                )}
                
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us. We're here to help!</p>

                <div className="contact-info">
                    <p><strong>Email:</strong> <a href="mailto:support@scholarshipplatform.com">support@scholarshipplatform.com</a></p>
                    <p><strong>Phone:</strong> +1-234-567-890</p>
                    <p><strong>Address:</strong> 123 Scholarship St, Education City, USA</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
