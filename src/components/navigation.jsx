import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="cv-nav">
            <div className="profile-header">
                <div className="profile-image">
                    <img
                        src="../assets/IMG_9367 2.JPG"
                        alt="Profile"
                    />
                </div>
                <h1>Samuel Awofadeju</h1>
                <p className="title">Full Stack Developer</p>
            </div>
            <div className="contact-info">
                <p>09036952723</p>
                <p>awoplatfrm@yahoo.com</p>
                <p>Lagos Nigeria</p>
            </div>
        </nav>
    );
};

export default Navigation;