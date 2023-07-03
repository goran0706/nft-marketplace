"use client";
import { colors } from "../../theme";
import { Text } from "../styled";
import BaseCard from "./BaseCard";
import Image from "next/image";
import styled from "@emotion/styled";

const Thumbnail = styled(Image)`
  border-radius: 100%;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const CreatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 130px;
`;

const CreatorName = styled.h4`
  word-break: break-word;
`;

const CreatorEarning = styled(Text)`
  word-break: break-word;
`;

const CreatorRank = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  color: ${colors.text3};
  opacity: 0.1;
`;

const CreatorCard = ({ creator }) => {
  const { avatar, name, totalEarned } = creator;

  return (
    <BaseCard>
      <CardBody>
        <Thumbnail src={avatar} alt="avatar" width={48} height={48} />
        <CreatorInfo>
          <CreatorName>@{name}</CreatorName>
          <CreatorEarning>{totalEarned} ETH</CreatorEarning>
        </CreatorInfo>
        <CreatorRank>1</CreatorRank>
      </CardBody>
    </BaseCard>
  );
};

export default CreatorCard;
