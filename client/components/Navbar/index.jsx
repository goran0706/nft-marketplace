import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Menu, Row, Space } from "antd";
import { blue, gray5, grayGlass, text } from "../../styles/colors";
import {
  ShoppingCartOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import Searchbar from "../Searchbar";
import logo from "../../assets/logo.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavbarWrapper = styled(Row)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${gray5};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  line-height: 64px;
  padding: 0px 160px;
  z-index: 10;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${gray5};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
`;

const NavMenu = styled(Menu)`
  border: none;
  background-color: transparent;
  color: ${text};
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  justify-content: flex-end;
  line-height: 22px;
`;

const NavMenuItem = styled(Menu.Item)`
  :hover {
    color: ${blue} !important;
  }
`;

const NavProfileMenu = styled(Avatar)`
  cursor: pointer;
  margin: 0 16px;
  background: ${grayGlass};
`;

const NavWalletMenu = styled(Avatar)`
  cursor: pointer;
  margin: 0 16px;
  background: ${grayGlass};
`;

const NavCartMenu = styled(Avatar)`
  cursor: pointer;
  margin: 0 16px;
  background: ${grayGlass};
`;

const Navbar = ({ menuProps }) => {
  const router = useRouter();
  const [activeRoute] = useState(() => router.pathname);

  return (
    <NavbarWrapper>
      <Space size="large" block="true" wrap>
        <Brand href="/">
          <Image src={logo} alt="brand" width={48} height={48} />
        </Brand>
        <Searchbar />
      </Space>
      <Space size="small" wrap>
        <NavMenu mode="horizontal" defaultSelectedKeys={[activeRoute]}>
          {menuProps.map(({ key, path, name }) => (
            <NavMenuItem key={key}>
              <Link href={path}>{name}</Link>
            </NavMenuItem>
          ))}
        </NavMenu>
        {/* <NavProfileMenu icon={<UserOutlined />} /> */}
        {/* <NavWalletMenu icon={<WalletOutlined />} /> */}
        <NavCartMenu icon={<ShoppingCartOutlined />} />
        <ConnectButton />
      </Space>
    </NavbarWrapper>
  );
};

export default Navbar;
