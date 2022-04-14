import { formatEther } from "@ethersproject/units";
import { ethers } from "ethers";

// contract method handlers
export const getContractBalance = async (
  contractInstance: ethers.Contract,
  address: string
) => {
  try {
    const contractBalanceRaw = await contractInstance.balanceOf(address);
    return Number.parseFloat(formatEther(contractBalanceRaw));
  } catch (error) {
    console.error(error);
    return 0;
  }
};
export const getAccountBalance = async (
  provider: ethers.providers.JsonRpcProvider,
  account: string
) => {
  try {
    const accountBalance = await provider.getBalance(account);
    return Number.parseFloat(formatEther(accountBalance));
  } catch (error) {
    console.error(error);
    return 0;
  }
};
export const getAccountChips = async (
  contractInstance: ethers.Contract,
  account: string
) => {
  try {
    const myMinersRaw = await contractInstance.getMyMiners(account);
    return Number.parseFloat(myMinersRaw);
  } catch (error) {
    console.error(error);
    return 0;
  }
};
export const getAccountRewards = async (
  contractInstance: ethers.Contract,
  account: string
) => {
  try {
    const accountRewardsRaw = await contractInstance.beanRewards(account);
    return Number.parseFloat(formatEther(accountRewardsRaw));
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export const buyChipsHandler = async () => {
  try {
  } catch (error) {}
};
export const compoundChipsHandler = async () => {
  try {
  } catch (error) {}
};
export const sellChipsHandler = async () => {
  try {
  } catch (error) {}
};
