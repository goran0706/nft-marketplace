"use client";
import { BaseButton } from "../Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styled from "@emotion/styled";

const ConnectorWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: ${({ block }) => block && "100% !important"};

  > div {
    width: ${({ block }) => block && "100% !important"};
  }

  button {
    ${BaseButton}
    border-radius: 6px !important;
    height: 47px !important;
    :hover {
      transform: scale(1) !important;
    }
  }
`;

const WalletConnect = ({ block }) => {
  return (
    <ConnectorWrapper block={block}>
      <ConnectButton />
    </ConnectorWrapper>
  );
};

export default WalletConnect;
