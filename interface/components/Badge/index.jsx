"use client";
import { colors } from "../../theme";
import styled from "@emotion/styled";

const BadgeFrame = styled.div`
  align-items: center;
  background-color: ${colors.bg3};
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 4px 8px;
  transition: 0.4s;
  :hover {
    background-color: ${colors.blue1};
  }
`;

const BadgeIcon = ({ children }) => {
  return children ? children : null;
};

const BadgeText = ({ children }) => {
  return children ? children : null;
};

const Badge = ({ className, Icon, label }) => {
  return (
    <BadgeFrame className={className}>
      <BadgeIcon>{Icon}</BadgeIcon>
      <BadgeText>{label}</BadgeText>
    </BadgeFrame>
  );
};

export default Badge;
