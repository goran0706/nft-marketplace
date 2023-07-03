"use client";
import { FaHeart } from "react-icons/fa";
import { Text } from "../styled";
import Badge from "../Badge";
import BaseCard from "./BaseCard";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

const Thumbnail = styled(Link)`
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  width: 224px;
  height: 224px;
  cursor: pointer;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CardTitle = styled.h4`
  text-align: start;
  margin-bottom: 8px;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const NFTCard = ({ nft }) => {
  const { image, name, price, likesCount } = nft;

  return (
    <BaseCard>
      <Thumbnail href={"/products/" + name}>
        <Image
          src={image}
          alt="nft"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </Thumbnail>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardContent>
          <Text>{price} wETH</Text>
          <Badge Icon={<FaHeart />} label={likesCount} />
        </CardContent>
      </CardBody>
    </BaseCard>
  );
};

export default NFTCard;
