import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useEtherBalance, useEthers, Kovan } from "@usedapp/core";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { ethers } from "ethers";
import { Metamask } from "./models/metamask";
import detectEthereumProvider from "@metamask/detect-provider";

function App() {
  const { activateBrowserWallet, account } = useEthers();

  // const connectMetamask = async () => {
  //   try {
  //     const windowEthereum = await (detectEthereumProvider() as any);
  //     if (!windowEthereum) throw "Could not connect to MetaMask! Try Again!";
  //     const provider = new ethers.providers.Web3Provider(windowEthereum);
  //     await provider.send("eth_requestAccounts", []);
  //     const signer = provider.getSigner();
  //     const metamask: Metamask = {
  //       provider: provider,
  //       signer: signer,
  //     };
  //     return metamask;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // set event listener to re-render on account change
  // useEffect(() => {
  //   (window.ethereum as any).on("accountsChanged", (accounts: string[]) => {
  //     if (accounts[0] === undefined) setIsConnected(false);
  //     else setselectedAccount(accounts[0]);
  //   });
  // }, []);

  // reconnect to metamask on every account change
  // useEffect(() => {
  //   connectMetamask().then((metamask) => {
  //     setMetamask(metamask);
  //   });
  // }, [selectedAccount]);

  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
