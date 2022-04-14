import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const HomePage = () => {
  const { account, library, active } = useEthers();
  const [accountBalance, setAccountBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getContractBalance = async () => {
    try {
    } catch (error) {}
  };
  const getAccountBalance = async () => {
    try {
      setIsLoading(true);
      const accountBalance = await library.getBalance(account);
      setIsLoading(false);
      return Number.parseFloat(formatEther(accountBalance));
    } catch (error) {
      if (active) console.error(error);
      if (!active) console.warn(error);
      setIsLoading(false);
      return 0;
    }
  };
  const getAccountChips = async () => {
    try {
    } catch (error) {}
  };
  const getAccountRewards = async () => {
    try {
    } catch (error) {}
  };

  const buyChipsHandler = async () => {
    try {
    } catch (error) {}
  };
  const compoundChipsHandler = async () => {
    try {
    } catch (error) {}
  };
  const sellChipsHandler = async () => {
    try {
    } catch (error) {}
  };

  useEffect(() => {
    getAccountBalance().then((accountBalance) => {
      setAccountBalance(accountBalance);
    });
  }, [account]);
  return (
    <div className="container-fluid">
      {isLoading && account && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {!isLoading && (
        <div>
          <p>{accountBalance} ETH</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
