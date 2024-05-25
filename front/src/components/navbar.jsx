import React from 'react';
import { FaWallet } from 'react-icons/fa'; // Import the wallet icon from React Icons
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <div className="navbar-icons">
        <FaWallet className="wallet-icon" /> {/* Use the FaWallet icon */}
        
      </div>
    </nav>
  );
}

export default Navbar;
