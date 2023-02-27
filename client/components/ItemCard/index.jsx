import styled from "@emotion/styled";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Button, Skeleton } from "antd";
import { Card, Flex, Text } from "../../styles";
import { base, gray1, text } from "../../styles/colors";
import Image from "next/image";

const ShareButton = styled(Button)`
  color: ${text};
  background-color: ${base};
  border: none;
  position: absolute;
  top: 24px;
  left: 24px;
`;

const LikeButton = styled(Button)`
  color: ${text};
  background-color: ${base};
  border: none;
  position: absolute;
  top: 24px;
  right: 24px;
`;

const CartButton = styled(Button)`
  display: none;
  border: none;
  color: ${text};
  background-color: ${gray1};
  position: absolute;
  left: 50%;
  top: 140px;
  transform: translateX(-50%);
`;

const ItemCard = ({ item = {} }) => {
  const {
    collection,
    artId,
    artTitle,
    artPicture,
    price,
    floorPrice,
    likesCount,
    artistId,
    artistName,
    artistPicture,
  } = item;

  return (
    <Card
      width="300px"
      cover={<Image alt={artTitle} src={artPicture} width={300} height={260} />}
    >
      <Skeleton loading={false} avatar active>
        <Flex direction="column">
          <Flex justify="space-between">
            <Text.White>{collection}</Text.White>
            <Text.White>#{artId}</Text.White>
          </Flex>

          <Flex>
            <Flex>
              <Avatar src={artPicture} />
              <Text.White>{price} ETH</Text.White>
            </Flex>
            <Button size="small" href="somewhere" shape="round" ghost>
              Details
            </Button>
          </Flex>
        </Flex>
      </Skeleton>
      <ShareButton shape="circle">
        <ShoppingCartOutlined />
      </ShareButton>
      <LikeButton shape="round">
        <HeartOutlined />
        <Text.White>{likesCount}</Text.White>
      </LikeButton>
      <CartButton
        id="add-to-cart"
        icon={<ShoppingCartOutlined />}
        shape="round"
      >
        Add to Card
      </CartButton>
    </Card>
  );
};

export default ItemCard;
