import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Services from './components/services';
import About from './components/about';
import Team from './components/team';
import FAQ from './components/faq';
import Footer from './components/footer';
import logo from './components/logo.jpeg'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Green Grid Nexus</h1>
        <p>A decentralized Energy Marketplace for you!</p>
      </header>
      <Home />
      <Services />
      <About />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
