import { SettingsEthernetSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { contractABI, contractAddress } from '../utils/constants';
import {ethers} from 'ethers';


export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContext = ()=>{
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

export const TransactionProvider = ({children})=>{
    const [connectedAccount,setConnectedAccount] = useState("")
    const checkIfWalletIsConnected = async ()=>{
        if(!ethereum) return alert("please Install Metamask");
    const accounts = await ethereum.request({method:"eth_accounts"})
    console.log(accounts)
    }
    useEffect(()=>{
        checkIfWalletIsConnected();
    })
    const connectWallet = async ()=>{
        try {
            if(!ethereum) return alert("please Install Metamask");
            const accounts = await ethereum.request({method:"eth_requestAccounts"})
            setConnectedAccount(accounts[0]);
        } catch (error) {
            console.log('error: ', error);
            throw new Error("No Ethereum Object.")
            
        }
    }
    return (
        <TransactionContext.Provider value={{connectWallet}}>
            {children}
        </TransactionContext.Provider>
    )
}
