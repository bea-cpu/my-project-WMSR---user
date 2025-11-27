import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="left-column">
          <div className="logo">
            <div className="logo-icon-background">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="30" 
                height="30" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18.5 4c-4-1.5-9-1-12.5 2.5c-3.5 3.5-3 9-1 11c2 2 7.5 2.5 11-1c3.5-3.5 4-8.5 2.5-12.5Z" />
                <path d="M6 17.5c-2 2-3.5 4-3.5 4" />
                <path d="M6 17.5c3.5-3 7-7 10.5-11.5" />
              </svg>
            </div>
            <span className="logo-text">EcoTrack</span>
          </div>

          <p>
            Smart waste management solutions for a cleaner, more sustainable environment. 
            Efficient tracking, reporting, and collection services.
          </p>

          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-links-columns">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/report">Report Issue</Link></li>
              <li><Link to="/track-status">Track Status</Link></li>
              <li><Link to="/schedule">Collection Schedule</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><Link to="#">Waste Collection</Link></li>
              <li><Link to="#">Recycling Programs</Link></li>
              <li><Link to="#">Hazardous Waste</Link></li>
              <li><Link to="#">Bulk Pickup</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><Link to="#">Help Center</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Emergency Hotline</Link></li>
              <li><Link to="#">Feedback</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="banner-wrapper">
        <div className="hotline-banner">
          <div className="hotline-content">
            <FaPhoneAlt className="phone-icon" />
            <div>
              <div className="hotline-title">Emergency Waste Hotline</div>
              <div className="hotline-number">24/7 Support: (555) 123-WASTE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; 2025 WasteTrack. All rights reserved.</p>
        <div className="bottom-links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Website Builder</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
