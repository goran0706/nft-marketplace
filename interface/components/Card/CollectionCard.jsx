"use client";
import { FaHashtag } from "react-icons/fa";
import { Text } from "../styled";
import Badge from "../Badge";
import BaseCard from "./BaseCard";
import Image from "next/image";
import styled from "@emotion/styled";

const CardBody = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`;

const CollectionInfo = styled.div``;

const CollectionTitle = styled.h4`
  word-break: break-word;
`;

const CollectionCreator = styled(Text)`
  word-break: break-word;
`;

const CollectionCount = styled(Badge)`
  margin-left: auto;
  align-self: flex-start;
`;

const Avatar = styled(Image)`
  border-radius: 6px;
`;

const Thumbnails = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
  height: 100%;
`;

const Thumbnail = styled.div`
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`;

const ThumbnailA = styled(Thumbnail)`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 3;
  min-width: 200px;
  min-height: 200px;
  width: 100%;
  height: 100%;
`;

const ThumbnailB = styled(Thumbnail)`
  grid-row-start: 1;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-column-end: 4;
  width: 100%;
  height: 100%;
`;

const ThumbnailC = styled(Thumbnail)`
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: 3;
  grid-column-end: 5;
  width: 100%;
  height: 100%;
`;

const ThumbnailD = styled(Thumbnail)`
  grid-row-start: 1;
  grid-column-start: 4;
  grid-row-end: 2;
  grid-column-end: 5;
  width: 100%;
  height: 100%;
`;

const CollectionCard = ({ collection }) => {
  const { collectionName, creatorAvatar, creatorName, items } = collection;

  return (
    <BaseCard>
      <CardBody>
        <Avatar src={creatorAvatar} alt="avatar" width={48} height={48} />
        <CollectionInfo>
          <CollectionTitle>{collectionName}</CollectionTitle>
          <CollectionCreator>@{creatorName}</CollectionCreator>
        </CollectionInfo>
        <CollectionCount Icon={<FaHashtag />} label={items.length} />
      </CardBody>
      <Thumbnails>
        <ThumbnailA>
          <Image
            src={items[0]}
            alt="nft"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </ThumbnailA>
        <ThumbnailB>
          <Image
            src={items[1]}
            alt="nft"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </ThumbnailB>
        <ThumbnailC>
          <Image
            src={items[2]}
            alt="nft"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </ThumbnailC>
        <ThumbnailD>
          <Image
            src={items[3]}
            alt="nft"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </ThumbnailD>
      </Thumbnails>
    </BaseCard>
  );
};

export default CollectionCard;
