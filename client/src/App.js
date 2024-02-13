import { useEffect, useState } from "react";
import initializeWeb3Auth from "./utils/authService";
import "./App.css";

function App() {
  const [web3authInstance, setweb3authInstance] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        const web3authInstance = initializeWeb3Auth();
        console.log(web3authInstance);
        setweb3authInstance(web3authInstance);
        await web3authInstance.init();
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    initWeb3Auth();
  }, []);
  return <div className="App">react</div>;
}

export default App;
