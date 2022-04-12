import { ethers } from "ethers";

export interface Metamask {
  provider: ethers.providers.Web3Provider,
  signer: ethers.providers.JsonRpcSigner
}