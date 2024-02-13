import { useEffect, useState } from "react";
import { WALLET_ADAPTERS } from "@web3auth/base";
import intializeWeb3State from "../utils/Web3State";

let web3authProvider = null;

const Login = ({ web3authInstance, isLoggedIn, setIsLoggedIn }) => {
  const [web3State, setWeb3State] = useState({
    web3: null,
    contract: null,
    connectedAccount: "not connected",
  });

  const handleLogin = async () => {
    try {
      if (!web3authProvider) {
        //this is the main thing in order to connect with linkedIn
        web3authProvider = await web3authInstance.connectTo(
          WALLET_ADAPTERS.OPENLOGIN,
          {
            loginProvider: "linkedin",
          }
        );
      }
      const { web3, contract, connectedAccount } = await intializeWeb3State(
        web3authProvider
      );
      console.log(web3, contract, connectedAccount);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Login;
