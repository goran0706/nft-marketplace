"use client";
import { colors } from "../../theme";
import BaseCard from "./BaseCard";
import styled from "@emotion/styled";

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CardTitle = styled.h3`
  margin-bottom: 6px;
`;

const CardText = styled.p`
  font-size: 12px;
  color: ${colors.text2};
`;

const CardIcon = styled.div`
  position: absolute;
  top: -30px;
  right: 0;
  height: 60px;
  width: 60px;
`;

const StepCount = styled.h5``;

const GuideCard = ({ guide }) => {
  const { Icon, step, title, description } = guide;

  return (
    <BaseCard>
      <CardIcon>{Icon && Icon}</CardIcon>
      <StepCount>Step-{step}</StepCount>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </BaseCard>
  );
};

export default GuideCard;
