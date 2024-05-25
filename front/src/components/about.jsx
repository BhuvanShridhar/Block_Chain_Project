import React from 'react';
import './about.css';

const About = () => {
  return (
    <div id="about" className="section">
      <h2 className="about-heading">About Us</h2>
      <div className="about-container">
        <div className="vision-container">
          <h3>Our Vision</h3>
          <p>
            To create a decentralized energy marketplace that empowers individuals and communities by providing a transparent, efficient, and sustainable platform for buying, selling, and trading energy.
          </p>
        </div>
        <div className="mission-container">
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
