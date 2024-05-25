import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div id="services" className="section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-container">
        <div className="service-box">
          <h3 className="service-heading">Listings Management</h3>
          <p className="service-description">Energy Listings: Producers can create detailed listings for the energy they are offering, including quantity, type (solar, wind, etc.), and price.</p>

          <p className="service-description">Search and Filter: Consumers can search for and filter listings based on their preferences such as location, type of energy, and price range.</p>

          <p className="service-description">Real-time Availability: Listings are updated in real-time to reflect the current availability of energy.</p>
          <button className="service-button">Take Me There</button>
        </div>
        <div className="service-box">
          <h3 className="service-heading">Escrow Services</h3>
          <p className="service-description">Smart Contracts: Automate transactions using blockchain-based smart contracts, ensuring that both parties meet their obligations before the transfer of energy and payment.</p>

          <p className="service-description">Dispute Resolution: A built-in mechanism for resolving disputes between producers and consumers to ensure fairness and transparency.</p>

          <p className="service-description">Payment Protection: Funds are held in escrow until both parties confirm the completion of the transaction.</p>
          <button className="service-button">Take Me There</button>
        </div>
        <div className="service-box">
          <h3 className="service-heading">Decentralized Payments</h3>
          <p className="service-description">Currency Integration: Support for various currencies to enable seamless, cross-border transactions.</p>

          <p className="service-description">Instant Settlement: Near-instantaneous settlement of payments thanks to blockchain technology, reducing the waiting time for producers to receive their funds.</p>

          <p className="service-description">Transaction History: Detailed records of all transactions for both producers and consumers, ensuring transparency and traceability.</p>
          <button className="service-button">Take Me There</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
