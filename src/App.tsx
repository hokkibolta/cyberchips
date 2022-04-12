import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { ethers } from "ethers";

function App() {
  //const []: [] = ;

  const connectProvider = async () => {
    await (window as any).ethereum.enable()
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
  };

  useEffect(() => {
    connectProvider().then(() => {
      console.log("metamask connected");
    });
  }, []);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
