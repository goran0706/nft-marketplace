"use client";
import { colors } from "@/theme";
import styled from "@emotion/styled";

const Card = styled.div`
  background: ${colors.bg2};
  border-radius: 6px;
  border: 1px solid ${colors.bg2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  gap: 1rem;
  padding: 1rem;
  position: relative;
  transition: 0.4s;
`;

const BaseCard = ({ className, children }) => {
  return <Card className={className}>{children}</Card>;
};

export default BaseCard;
