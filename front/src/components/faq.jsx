import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  // State to track the open/closed state of each FAQ item
  const [isOpen, setIsOpen] = useState([false, false, false, false, false]);

  // Function to toggle the open/closed state of a FAQ item
  const toggleFAQ = index => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div id="faq" className="section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {/* FAQ items */}
        <div className={`faq-item ${isOpen[0] ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(0)}>
          Q1. What is Green Grid Nexus?
            <span className="toggle-icon">{isOpen[0] ? '-' : '+'}</span>
          </div>
          {isOpen[0] && <div className="faq-answer">Green Grid Nexus is a platform designed to create a secure and user-friendly peer-to-peer energy marketplace powered by blockchain technology. It connects renewable energy producers directly with consumers, facilitating seamless and transparent energy transactions.</div>}
        </div>
        <div className={`faq-item ${isOpen[1] ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(1)}>
          Q2. How does Green Grid Nexus benefit consumers and producers?
            <span className="toggle-icon">{isOpen[1] ? '-' : '+'}</span>
          </div>
          {isOpen[1] && <div className="faq-answer">For consumers, Green Grid Nexus offers access to locally produced renewable energy at potentially lower costs. For producers, it provides a marketplace to sell excess energy directly to consumers, maximizing their return on investment in renewable energy sources.</div>}
        </div>
        <div className={`faq-item ${isOpen[2] ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(2)}>
          Q3. What types of renewable energy can be traded on Green Grid Nexus?
            <span className="toggle-icon">{isOpen[2] ? '-' : '+'}</span>
          </div>
          {isOpen[2] && <div className="faq-answer">The platform supports various types of renewable energy including solar, wind, hydro, and biomass. Producers can list specific types of energy they have available, and consumers can choose the type of energy they wish to purchase.</div>}
        </div>
        <div className={`faq-item ${isOpen[3] ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(3)}>
          Q4. How are transactions secured on Green Grid Nexus?
            <span className="toggle-icon">{isOpen[3] ? '-' : '+'}</span>
          </div>
          {isOpen[3] && <div className="faq-answer">Transactions on Green Grid Nexus are secured using blockchain technology and smart contracts. This ensures that all trades are transparent, traceable, and immutable, providing security and trust for both producers and consumers.</div>}
        </div>
        <div className={`faq-item ${isOpen[4] ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(4)}>
          Q5. What payment methods are accepted on Green Grid Nexus?
            <span className="toggle-icon">{isOpen[4] ? '-' : '+'}</span>
          </div>
          {isOpen[4] && <div className="faq-answer">Green Grid Nexus supports various cryptocurrencies for transactions, leveraging the security and efficiency of blockchain technology. This allows for seamless, decentralized payments without the need for traditional banking intermediaries.</div>}
        </div>
        {/* Repeat for other FAQ items */}
        {/* Change index (0, 1, 2, 3, 4) and text accordingly */}
      </div>
    </div>
  );
};

export default FAQ;
