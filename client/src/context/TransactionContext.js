import { SettingsEthernetSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { contractABI, contractAddress } from '../utils/constants';
// import {ethers} from 'ethers';
const ethers = require("ethers");

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = ()=>{
    const provider =new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

console.log({
    provider,signer,transactionContract
})
}
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("please Install Metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts?.length) {
        setCurrentAccount(accounts[0]);
        //getAllTransactions();
      } else {
        console.log("NO Accounts Found.");
      }
      console.log(accounts);
    } catch (error) {
      console.log("error: ", error);
      throw new Error("No Ethereum Object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("please Install Metamask");
      const { addressTo, amount, keyword, message } = formData;
      getEthereumContract();
    } catch (error) {}
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  });
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("please Install Metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("error: ", error);
      throw new Error("No Ethereum Object.");
    }
  };
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};