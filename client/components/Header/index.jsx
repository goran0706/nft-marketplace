import { Layout } from "antd";
import styled from "@emotion/styled";
import Navbar from "../Navbar";
import navMenuProps from "../../data/navMenuProps.json";

const { Header: AntHeader } = Layout;

const HeaderWrapper = styled(AntHeader)`
  padding: 0 160px !important;
  background-color: transparent !important;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar menuProps={navMenuProps} />
    </HeaderWrapper>
  );
};

export default Header;
