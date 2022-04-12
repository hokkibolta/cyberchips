import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { ethers } from "ethers";
import { Metamask } from "../models/metamask";

const HomePage = (props: { metamask: Metamask }) => {
  const [address, setAddress]: [string, Dispatch<SetStateAction<string>>] =
    useState("");
  const [balance, setBalance]: [number, Dispatch<SetStateAction<number>>] =
    useState(0);

  useEffect(() => {
    props.metamask.signer.getAddress().then((address) => {
      setAddress(address);
    });
    props.metamask.signer.getBalance().then((balance) => {
      const formattedBalance = Number.parseFloat(
        ethers.utils.formatUnits(balance, 18)
      );
      setBalance(formattedBalance);
    });
  });
  return (
    <div className="container-fluid">
      <div>
        <p>{address}</p>
        <p>{balance}</p>
      </div>
    </div>
  );
};

export default HomePage;
