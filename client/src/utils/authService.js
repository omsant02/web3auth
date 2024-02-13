import { Web3AuthNoModal } from "@web3auth/no-modal";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { clientId, chainConfig } from "../config/config";

const initializeWeb3Auth = () => {
  try {
    //web3 auth instance
    const web3authInstance = new Web3AuthNoModal({
      clientId,
      web3AuthNetwork: "sapphire_devnet",
      chainConfig,
    });
    //private key
    const privateKeyProvider = new EthereumPrivateKeyProvider({
      config: { chainConfig },
    });

    const openloginAdapter = new OpenloginAdapter({
      privateKeyProvider,
    });

    web3authInstance.configureAdapter(openloginAdapter);
    return web3authInstance;
  } catch (error) {
    console.error("Error initializing web3Auth:", error);
    return null;
  }
};
export default initializeWeb3Auth;
