import { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from "@usedapp/core";
import { ethers } from "ethers";

const HomePage = () => {
  const { activateBrowserWallet, account } = useEthers();

  useEffect(() => {}, []);
  return (
    <div className="container-fluid">
      <div></div>
    </div>
  );
};

export default HomePage;
