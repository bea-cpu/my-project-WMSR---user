import React from 'react';
import './About.css';

import { 
  IoRadioOutline, 
  IoHeartOutline, 
  IoLeafOutline, 
  IoPeopleOutline,
  IoShieldCheckmarkOutline,
  IoRibbonOutline,
  IoGlobeOutline,
  IoBulbOutline
} from 'react-icons/io5';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About EcoTrack</h1>
        <p>Building cleaner, greener communities through smart waste management</p>
      </header>

      <main className="about-content">
        
        <section className="mission-values-section">
          <div className="info-card">
            <div className="icon-container mission-icon-bg">
              <IoRadioOutline size={28} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To create a cleaner, more sustainable environment by empowering
              communities with modern tools for waste management. We believe that
              technology can bridge the gap between citizens and waste management
              services, making our cities cleaner and greener.
            </p>
          </div>

          <div className="info-card">
            <div className="icon-container values-icon-bg">
              <IoHeartOutline size={28} />
            </div>
            <h3>Our Values</h3>
            <p>
              We're committed to sustainability, transparency, and community
              engagement. Every report matters, every issue counts, and every user
              contributes to a cleaner environment. Together, we're building a better
              future for our planet.
            </p>
          </div>
        </section>

        <section className="core-principles-section">
          <h2>Our Core Principles</h2>
          <h3>These principles guide everything we do and shape our approach to waste management</h3>

          <div className="principles-grid">

            <div className="principle-card">
              <div className="icon-container principle-icon-bg">
                <IoLeafOutline size={25} />
              </div>
              <h4>Environmental Care</h4>
              <p>Committed to reducing waste and promoting sustainable practices in our communities.</p>
            </div>

            <div className="principle-card">
              <div className="icon-container principle-icon-bg">
                <IoPeopleOutline size={25} />
              </div>
              <h4>Community First</h4>
              <p>Empowering residents to take an active role in maintaining clean neighborhoods.</p>
            </div>

            <div className="principle-card">
              <div className="icon-container principle-icon-bg">
                <IoShieldCheckmarkOutline size={25} />
              </div>
              <h4>Transparency</h4>
              <p>We believe in open communication and provide real-time tracking and updates for all waste management activities.</p>
            </div>

            <div className="principle-card">
              <div className="icon-container principle-icon-bg">
                <IoRibbonOutline size={25} />
              </div>
              <h4>Reliability</h4>
              <p>Our commitment to consistent, dependable service ensures communities can count on us.</p>
            </div>

            <div className="principle-card">
              <div className="icon-container principle-icon-bg">
                <IoGlobeOutline size={25} />
              </div>
              <h4>Sustainability</h4>
              <p>We focus on long-term environmental impact, promoting recycling and responsible practices.</p>
            </div>

            <div className="principle-card">
              <div className="icon-container principle-icon-bg">
                <IoBulbOutline size={25} />
              </div>
              <h4>Innovation</h4>
              <p>We leverage cutting-edge technology to solve age-old waste management challenges.</p>
            </div>

            <div className="principle-card">
              <div className="icon-container principle-icon-bg">
                <IoRadioOutline size={25} />
              </div>
              <h4>Efficiency</h4>
              <p>Streamlining waste management processes for faster response and resolution.</p>
            </div>

            <div className="principle-card">
              <div className="icon-container principle-icon-bg">
                <IoHeartOutline size={25} />
              </div>
              <h4>Care & Quality</h4>
              <p>Dedicated to providing excellent service and maintaining high standards.</p>
            </div>

          </div>
        </section>

        <section className="how-it-works-section">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Report Issues</h3>
              <p>Spot a waste management problem? Report it instantly with details and location.</p>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Track Progress</h3>
              <p>Monitor your reported issues in real-time as they move from pending to resolved.</p>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Stay Informed</h3>
              <p>Check pickup schedules and stay updated on waste collection in your area.</p>
            </div>
          </div>
        </section>

        <section className="about-section get-in-touch">
          <h2>Get In Touch</h2>
          <p className="section-description">
            Have questions or feedback? We'd love to hear from you. Together, we can make
            our communities cleaner and greener.
          </p>
          <div className="contact-info">
            <a href="mailto:support@ecotrack.com">support@ecotrack.com</a>
            <span>|</span>
            <span>(+63) 9057583519</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
