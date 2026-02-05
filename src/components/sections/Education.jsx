import React from 'react';

const Education = () => {

    return (
        <div className="section education-section">
            <div className="section-header">
                <h2><i className="fas fa-graduation-cap"></i> Education</h2>
                <p className="section-subtitle">My academic background and qualifications</p>
            </div>

            <div className="education-cards">

                <div className="education-card">
                    <div className="card-header">
                        <h3>Industrial maintenance Engineering</h3>
                        <span className="school">Yaba college of tecchnology</span>
                        <div className="education-meta">
                            <span className="period">2</span>
                            <span className="location">Yaba Lagos</span>
                            <span className="gpa">GPA:3.05</span>
                        </div>
                    </div>
                </div>
                <div className="education-card">
                    <div className="card-header">
                        <h3>Marine Engineering</h3>
                        <span className="school">Federal College of Fisheries And Marine Technology</span>
                        <div className="education-meta">
                            <span className="period">2</span>
                            <span className="location">Victoria Island, Lagos</span>
                            <span className="gpa">GPA:2.50</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;