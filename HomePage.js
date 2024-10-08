import React, { useRef, useEffect } from 'react';
import Footer from './Footer'; // Import Footer component
import "./homepage.css"; // Import your CSS file
import AboutUs from './AboutUs';

function HomePage() {
    const aboutUsRef = useRef(null);

    // Scroll to AboutUs section if needed
    useEffect(() => {
        if (window.location.hash === '#aboutus') {
            aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="homepage">
            <div className="content-wrapper">
                <div className="content">
                    <h2>UNLOCK YOUR EDUCATIONAL OPPORTUNITIES</h2>
                    <p>
                        Our platform is dedicated to helping students find the right scholarships and financial aid to support their educational journey. 
                        Explore a variety of opportunities tailored to your needs and track your applications seamlessly.
                    </p>
                    <button onClick={() => window.location.href = '/aboutus'}>Discover More</button>
                </div>
            </div>

            <Footer /> {/* Footer should be below the content */}
        </div>
    );
}

export default HomePage;
