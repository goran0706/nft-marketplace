"use client";
import { colors } from "../../theme";
import BaseCard from "./BaseCard";
import Image from "next/image";
import styled from "@emotion/styled";

const Thumbnail = styled.a`
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 296px;
  min-height: 150px;
  cursor: pointer;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CardTitle = styled.h5`
  margin-bottom: 6px;
`;

const CardText = styled.p`
  font-size: 12px;
  color: ${colors.text2};
`;

const ArticleCard = ({ article }) => {
  const { src, title, text } = article;
  return (
    <BaseCard>
      <Thumbnail>
        <Image
          src={src}
          alt="nft"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </Thumbnail>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
    </BaseCard>
  );
};

export default ArticleCard;
