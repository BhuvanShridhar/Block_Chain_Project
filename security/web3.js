const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

const sendTransaction = async () => {
    const accounts = await web3.eth.getAccounts();
    const receipt = await web3.eth.sendTransaction({
        from: accounts[0],
        to: 'recipient_address',
        value: web3.utils.toWei('1', 'ether')
    });
    console.log('Transaction receipt:', receipt);
};

sendTransaction();
