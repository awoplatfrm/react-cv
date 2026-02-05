import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './navigation';
import Home from './sections/Home';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const CVLayout = () => {
    return (
        <div className="cv-container">
            <Navigation />
            <div className="content-area">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
};

export default CVLayout;