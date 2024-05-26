import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import './about.css';

const About = () => {
  return (
    <div id="about" className="section">
      <h2 className="about-heading">About Us</h2>
      <div className="about-container">
        <div className="vision-container">
          <div className="icon-container">
            <FontAwesomeIcon icon={faEye} size="2x" color="pink" /> {/* Adjust size and color */}
          </div>
          <h3>Our Vision</h3>
          <p>
            To create a decentralized energy marketplace that empowers individuals and communities by providing a transparent, efficient, and sustainable platform for buying, selling, and trading energy.
          </p>
        </div>
        <div className="mission-container">
          <div className="icon-container">
            <FontAwesomeIcon icon={faBullseye} size="2x" color="yellow" /> {/* Adjust size and color */}
          </div>
          <h3>Our Mission</h3>
          <p>
            To revolutionize the energy industry by leveraging blockchain technology to enable peer-to-peer energy transactions, ensuring energy security, affordability, and accessibility for all, while promoting the use of renewable energy sources and reducing carbon emissions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
