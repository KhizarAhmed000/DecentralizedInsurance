// src/insurance.js
import web3 from './web3';
import Insurance from './Insurance.json';

const contractAddress = '0x469A8A654e9186dDD8Cbd111e79ddD1b29031B86'; // Replace with your contract's deployed address
const insuranceContract = new web3.eth.Contract(Insurance, contractAddress);

export default insuranceContract;
