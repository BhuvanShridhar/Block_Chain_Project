import { useState } from 'react';
import Web3 from 'web3';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Services from './components/services';
import About from './components/about';
import Team from './components/team';
import FAQ from './components/faq';
import Footer from './components/footer';

function App() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    } else {
      console.log('MetaMask not detected');
    }
  };

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Green Grid Nexus</h1>
        <p>A decentralized Energy Marketplace for you!</p>
        <button onClick={connectWallet}>Connect Wallet</button>
        {account && <p>Connected Account: {account}</p>}
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