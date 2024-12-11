import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <div>
      <div className="career-layer">
        <section className="main-section">
          <h2>Join the Movement</h2>
          <p>
            Bread is where your passion for giving transforms into action. If you’re eager to <span>drive impactful initiatives,</span>
            <span> inspire change,</span> or <span>build lasting connections,</span> explore a fulfilling career with us. Together, we can make a
            meaningful difference in the community.
          </p>
          <button className="join-button"><a href="#contact"> Join Us </a>
          </button>
        </section>
      </div>

      <div className="career-second-layer" id="career-second-layer">
        <section className="second-section">
         
        </section>
        <div className="grid-container">
          <div className="grid-item">
            <h1>Volunteer</h1>
            <p>Be a part of something bigger volunteer with us and help make a lasting impact in our community. Your time and passion can bring positive change to those in need. Join our mission to spread hope, support, and opportunity together, we can achieve more!</p>
          </div>
          
          <div className="grid-item">
            <h1>Finance & Accounting</h1>
            <p>Help us build a stronger foundation volunteer with our Finance and Accounting team to ensure transparency, efficiency, and growth in our projects. Your expertise can make a vital difference in managing resources and supporting our mission. Join us in shaping a sustainable future!</p>
          </div>
          <div className="grid-item">
            <h1>Software Engineer</h1>
            <p>Join our tech team and help build innovative solutions that drive change. As a volunteer software engineer, your skills will help create impactful software that powers our mission. Be a part of something exciting and meaningful—together, we can shape the future with technology!</p>
          </div>          
          <div className="grid-item">
            <h1>Marketing & Social Media</h1>
            <p>Help amplify our message by joining the Marketing & Social Media team! As a volunteer, you'll create content, manage social media accounts, and engage with followers to raise awareness about Bread. Your creativity and digital skills will help attract donors and spread our message of hope and support.</p>
          </div> 
          <div className="grid-item">
            <h1>Community Outreach</h1>
            <p>Help spread the word and build relationships within the community as a Community Outreach volunteer. Your role will be to connect with local organizations, schools, and businesses, raising awareness about Bread's mission. With your passion and networking skills, you can help expand our reach and bring more people into our cause.</p>
          </div> 
          <div className="grid-item">
            <h1>Customer Support</h1>
            <p>Provide a warm and helpful experience to donors, partners, and community members as a Customer Support volunteer. You'll be the first point of contact for inquiries, assisting with questions and helping people navigate Bread’s platform. Your people skills and patience will help foster a positive experience for everyone interacting with Bread.</p>
          </div>       
        </div>
      </div>
    </div>
  );
};

export default MainSection;
