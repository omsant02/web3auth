export const clientId = process.env.REACT_APP_CLIENT_ID;

export const chainConfig = {
  chainNamespace: "eip155",
  chainId: "0xAA36A7", //hexa format
  rpcTarget: process.env.REACT_APP_RPCTARGET,
  displayName: "Ethereum Testnet",
  blockExplorer: "https://sepolia.etherscan.io",
  ticker: "ETH",
  tickerName: "Ethereum",
};

export const contractAddress = "0xd964E79743B44599De93AAA7B8Da0F884b42E70b";
