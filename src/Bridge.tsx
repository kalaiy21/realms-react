import { useState } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

import { UserRejectedRequestError } from "@web3-react/walletconnect-connector";

import {
  connectWallet,
  isWalletConnected,
  walletAddress,
} from "../src/l2wallet";
import Button from "../src/shared/Button";
import UserAgentConnector from "./shared/UserAgentConnector";

const Bridge: React.FC = () => {
  const [isL2Connected, setIsL2Connected] = useState(isWalletConnected());
  const [l2Address, setL2Address] = useState<string>();

  const web3React = useWeb3React();

  if (web3React.error instanceof UserRejectedRequestError) {
    console.log("TODO: Handle user rejection");
  }
  if (web3React.error instanceof UnsupportedChainIdError) {
    console.log("TODO: Handle unsupported chain");
  }

  const handleL2ConnectClick = async () => {
    try {
      await connectWallet();
      setIsL2Connected(isWalletConnected());
      setL2Address(await walletAddress());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {web3React.active ? (
        <code>{web3React.account}</code>
      ) : (
        <UserAgentConnector>
          {(connector: any) => (
            <Button
              onClick={() => {
                web3React.activate(connector);
              }}
            >
              Connect Ethereum
            </Button>
          )}
        </UserAgentConnector>
      )}

      {isL2Connected ? (
        <>
          <code>{l2Address}</code>
          {/* Dapp here */}
        </>
      ) : (
        <>
          <Button onClick={handleL2ConnectClick}>Connect StarkNet</Button>
        </>
      )}

      {web3React.active && isL2Connected ? <div>Ready to bridge</div> : null}
    </>
  );
};

export default Bridge;
