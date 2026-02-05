import React from 'react';

const Skills = () => {

    return (
        <div className="section skills-section">
            <div className="section-header">
                <h2><i className="fas fa-code"></i> Skills</h2>
                <p className="section-subtitle">My technical abilities and proficiency levels</p>
            </div>
            <div className="additional-skills">
                <div className="skill-tags">
                    <span className="additional-skill-tag">REST APIs</span>
                    <span className="additional-skill-tag">Microsoft Packages</span>
                    <span className="additional-skill-tag">Figma Design</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;