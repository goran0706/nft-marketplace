"use client";
import { colors } from "../../theme";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styled from "@emotion/styled";

const NavigationMenu = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;
  margin-left: auto;
  margin: 0px;
`;

const MenuItem = styled.li`
  display: block;
  list-style: none;
  position: relative;
`;

const MenuLink = styled(Link)`
  background-color: ${({ active }) => active === "true" && colors.blue1};
  border-radius: 6px;
  color: ${colors.text1};
  display: block;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  padding: 1rem;
  position: relative;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  :hover {
    background-color: ${colors.blue1};
  }
`;

const NavigationItem = ({ route, label }) => {
  const pathname = usePathname();
  const isActiveStr = pathname === route ? "true" : "false";

  return (
    <MenuItem>
      <MenuLink href={route} active={isActiveStr}>
        {label}
      </MenuLink>
    </MenuItem>
  );
};

const NavigationLinks = () => {
  return (
    <NavigationMenu>
      <NavigationItem route="/" label="Home" />
      <NavigationItem route="/products" label="Explore" />
      <NavigationItem route="/collections" label="Collections" />
      <NavigationItem route="/create" label="Create" />
    </NavigationMenu>
  );
};

export default NavigationLinks;
