"use client";
import { colors } from "@/theme";
import { Container } from "../styled";
import Logo from "../Logo";
import NavigationLinks from "./NavigationLinks";
import Search from "../Search";
import styled from "@emotion/styled";
import WalletConnect from "../WalletConnect";

const HeaderFrame = styled.header`
  left: 50%;
  position: fixed;
  top: 15px;
  transform: translateX(-50%);
  width: 100%;
  z-index: 1;
`;

const HeaderElements = styled.div`
  background: ${colors.bg2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const HeaderControls = styled.div`
  display: flex;
  flex: 1;
  justify-self: flex-end;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;

const Header = () => {
  return (
    <HeaderFrame>
      <Container>
        <HeaderElements>
          <Logo />
          <Search />
          <HeaderControls>
            <NavigationLinks />
            <WalletConnect />
          </HeaderControls>
        </HeaderElements>
      </Container>
    </HeaderFrame>
  );
};

export default Header;
