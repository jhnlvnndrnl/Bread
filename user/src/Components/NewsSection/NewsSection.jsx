import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsSection.css';

const NewsSection = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleButtonClick = () => {
    navigate('/'); //for future articles
  };

  return (
    <div className="fifth-layer">
      <section id="news" className="news-section">
        <h1>Bread News</h1>
        <p>Stay updated with the latest from Bread. Read about our recent donations, community stories, and more!</p>
        <main className="news-box">
          <div className="news-container">
            <div className="news-box-1"></div>
            <p className="news-text">
              Expanding the Impact of Bread Donations: Empowering Communities with New Donation Programs Launching Across the Philippines.
            </p>
            <div className="news-footer">
              <span className="news-date">November 8, 2024</span>
              <button className="news-btn" onClick={handleButtonClick}>Read More</button>
            </div>
          </div>

          <div className="news-container">
            <div className="news-box-2"></div>
            <p className="news-text">
              Join Us in Making a Difference: Donate to Support Hunger Relief This World Food Day!
            </p>
            <div className="news-footer">
              <span className="news-date">November 8, 2024</span>
              <button className="news-btn" onClick={handleButtonClick}>Read More</button>
            </div>
          </div>

          <div className="news-container">
            <div className="news-box-3"></div>
            <p className="news-text">
              Strengthening Our Partnerships with Local Organizations through Bread's New Volunteer Recognition Program.
            </p>
            <div className="news-footer">
              <span className="news-date">November 8, 2024</span>
              <button className="news-btn" onClick={handleButtonClick}>Read More</button>
            </div>
          </div>

          <div className="news-container">
            <div className="news-box-4"></div>
            <p className="news-text">
              Partnering with Schools: Bread Launches New Educational Program to Raise Awareness on Food Insecurity Among Students.
            </p>
            <div className="news-footer">
              <span className="news-date">November 8, 2024</span>
              <button className="news-btn" onClick={handleButtonClick}>Read More</button>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default NewsSection;
