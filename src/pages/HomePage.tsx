import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Contract } from "ethers";
import { useEthers } from "@usedapp/core";
import { ERC20Abi } from "./../models/ERC20Abi";
import { CyberChipsABI } from "./../models/CyberChipsABI";
import {
  getContractBalance,
  getAccountChips,
  getAccountRewards,
} from "./../CyberChipsMethodHandler";
import UserForm from "./../components/UserForm";
import "./../style/UserForm.scss";

const HomePage = () => {
  const { account, library } = useEthers();
  const [isLoading, setIsLoading] = useState(false);

  // contract properties
  const [contractBalance, setContractBalance] = useState(0);
  const [accountChips, setAccountChips] = useState(0);
  const [accountRewards, setAccountRewards] = useState(0);

  const init = async () => {
    try {
      setIsLoading(true);
      if (account) {
        // contract instances
        const cyberChipsContract = new Contract(
          "0xe67a463283c0e5ce2d7383b8780d7a2391553433",
          CyberChipsABI,
          library
        );
        const cusdContract = new Contract(
          "0x4Bd0972f182Fac5F2ae742b390605f0cD75f6323",
          ERC20Abi,
          library
        );
        const contractBalance = await getContractBalance(
          cusdContract,
          "0xe67a463283c0e5ce2d7383b8780d7a2391553433"
        );
        const accountChips = await getAccountChips(cyberChipsContract, account);
        const accountRewards = await getAccountRewards(
          cyberChipsContract,
          account
        );
        setContractBalance(contractBalance);
        setAccountChips(accountChips);
        setAccountRewards(accountRewards);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    init().then(() => {
      console.log("initialized");
    });
  }, [account]);
  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-12 d-flex justify-content-center align-content-center text-center">
          <div className="row w-50">
            {!isLoading && account && (
              <div className="col-12">
                <UserForm
                  contractBalance={contractBalance}
                  accountChips={accountChips}
                  accountRewards={accountRewards}
                />
              </div>
            )}
            {isLoading && (
              <div className="col-12">
                {/* loading comp */}
                <div className="userFormBox">
                  <h1>Loading...</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
