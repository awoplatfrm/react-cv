import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="section home-section">
            <div className="hero-content">
                <h2>Hello, My Name Is Samuel Awofadeju</h2>
                <p className="subtitle">Full Stack Developer with 1 year of experience</p>
                <p className="description">
                    Passionate about creating web applications with modern technologies.
                    Basic experience in React and Node.js. Always eager to
                    learn new technologies and tackle challenging problems.
                </p>

                <div className="quick-stats">
                    <div className="stat">
                        <h3>1</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat">
                        <h3>1</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat">
                        <h3>1</h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>

            <div className="featured-skills">
                <h3>Quick Links</h3>
                <div className="skill-tags">
                    <Link to="/Contact" className="skill-tag">
                        Contact
                    </Link>
                    <Link to="/education" className="skill-tag">
                        Education
                    </Link>
                    <Link to="/skills" className="skill-tag">
                        Technical Skills
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Home;