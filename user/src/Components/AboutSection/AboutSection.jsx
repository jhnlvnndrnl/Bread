import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="third-layer">
      <section id="about" className="about-section">
        <h1>What we do?</h1>
        <p>Bread is dedicated to making a meaningful impact through various charitable efforts. Here are our key focus areas:</p>
        <ul className="about-subtext">
          <li>
            Community Support
            <div className="description">
              We provide support to local communities through various outreach programs.
            </div>
          </li>
          <li>
            Food Assistance
            <div className="description">
              We distribute food to those in need to combat hunger.
            </div>
          </li>
          <li>
            Education & Training
            <div className="description">
              We offer educational resources and training programs to empower individuals.
            </div>
          </li>
          <li>
            Health & Wellness
            <div className="description">
              We promote health and wellness by providing necessary medical resources and support.
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutSection;