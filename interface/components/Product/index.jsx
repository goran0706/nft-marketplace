"use client";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShareAlt,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { Button } from "../Button";
import { colors } from "../../theme";
import { Flex, Grid, RoundImage, Text } from "../styled";
import { FaEthereum } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { useAccount } from "wagmi";
import BaseCard from "../Card/BaseCard";
import Identicon from "../Identicon";
import styled from "@emotion/styled";
import Thumbnail from "../Thumbnail";
import useShortenAddress from "@/hooks/useShortenAddress";
import WalletConnect from "../WalletConnect";

const PriceInfo = styled(Flex)`
  border-radius: 6px;
  background-color: ${colors.bg1};
  padding: 1rem;
`;

const Product = ({ productInfo }) => {
  const { isConnected } = useAccount();
  const previewSrc = "/pumpkin-nft.jpeg";
  const imgSrc = "/pumpkin-nft.jpeg";
  const collectionName = "Bored Ape Yacht Club";
  const isVerified = true;
  const tokenName = "BoredApeYachtClub";
  const tokenIdx = 2837;
  const creatorAddress = "0xb53349160e38739b37e4bbfcf950ed26e26fcb41";
  const creatorAddressShort = useShortenAddress(creatorAddress);
  const ownerAddress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
  const ownerAddressShort = useShortenAddress(ownerAddress);
  const description = `The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.
   Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, 
   a collaborative graffiti board.`;
  const price = 2.3;
  const royalty = 10;
  const usdPrice = 2.3 * 1800;
  const royaltyUsdPrice = (2.3 * 1800) / royalty;

  return (
    <Grid columns={2}>
      <Flex dir="column" gap="1rem">
        <Thumbnail preview={previewSrc} height="521px" />
        <Flex dir="column" gap="10px">
          <Text fontSize="1rem" fontWeight="bold">
            Description
          </Text>
          <Text fontSize="14px" color={colors.gray}>
            {description}
          </Text>
        </Flex>
        <Flex dir="column" gap="4px">
          <Text fontSize="1rem" fontWeight="bold">
            Details
          </Text>
          <Flex justify="space-between">
            <Text fontSize="14px" color={colors.gray}>
              Contract Address
            </Text>
            <Text fontSize="14px" color={colors.gray}>
              0xe1dc516b1486aba548eecd2947a11273518434a4
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontSize="14px" color={colors.gray}>
              Token ID
            </Text>
            <Text fontSize="14px" color={colors.gray}>
              {tokenIdx}
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontSize="14px" color={colors.gray}>
              Token Standard
            </Text>
            <Text fontSize="14px" color={colors.gray}>
              Ethereum (ERC-721)
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex dir="column" gap="4rem">
        <Flex dir="column" gap="1rem">
          <Flex gap="10px" align="center">
            <RoundImage
              src={imgSrc}
              width={28}
              height={28}
              alt="collection image"
            />
            <Text>{collectionName}</Text>
            {isVerified && <GoVerified size={28} fill={colors.blue1} />}
          </Flex>
          <Flex gap="1rem" align="center">
            <Text fontSize="2rem" fontWeight="bold">
              {tokenName}
            </Text>
            <Text fontSize="2rem" fontWeight="bold">
              #{tokenIdx}
            </Text>
          </Flex>
          <Flex gap="2rem" align="center">
            <Flex gap="1rem" align="center" justify="flex-start">
              <Identicon size={40} seed={creatorAddress} />
              <Flex dir="column">
                <Text fontSize="0.8rem" color={colors.gray}>
                  Creator
                </Text>
                <Text>{creatorAddressShort}</Text>
              </Flex>
            </Flex>
            <Flex gap="1rem" align="center" justify="flex-start">
              <Identicon size={40} seed={ownerAddress} />
              <Flex dir="column">
                <Text fontSize="0.8rem" color={colors.gray}>
                  Current Owner
                </Text>
                <Text>{ownerAddressShort}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex dir="column" gap="1rem">
          <Flex gap="8px" align="center">
            <Button
              Icon={<AiOutlineHeart />}
              label={10}
              compact
              outline
              outlinecolor={colors.bg3}
              ghost
              fontSize="0.8rem"
            />
            <Button
              Icon={<AiOutlineShareAlt />}
              label="Share"
              compact
              outline
              outlinecolor={colors.bg3}
              ghost
              fontSize="0.8rem"
            />
            <Button
              Icon={<AiOutlineShoppingCart />}
              label="Buy"
              compact
              outline
              outlinecolor={colors.bg3}
              ghost
              fontSize="0.8rem"
            />
            <Button
              as="link"
              href="https://etherscan.io/tx/0x08ce28a57153b3f16c8ad28e716dec2a66a8472a2382e2fb88b3cf3cb72aa154"
              target="_blank"
              rel="noopener noreferrer"
              Icon={<FaEthereum />}
              label="View on Etherscan"
              compact
              outline
              outlinecolor={colors.bg3}
              ghost
              fontSize="0.8rem"
            />
            <Button
              Icon={<BiRefresh />}
              label="Refresh Metadata"
              compact
              outline
              outlinecolor={colors.bg3}
              ghost
              fontSize="0.8rem"
            />
          </Flex>
          <BaseCard>
            <Flex dir="column" gap="1rem">
              <PriceInfo justify="space-between">
                <Flex dir="column">
                  <Text fontSize="0.75rem" color={colors.gray}>
                    Current Price
                  </Text>
                  <Flex gap="6px" justify="flex-start" align="baseline">
                    <Text
                      fontSize="1.5rem"
                      fontWeight="600"
                      color={colors.blue3}
                    >
                      {price}ETH
                    </Text>
                    <Text color={colors.gray}>(${usdPrice})</Text>
                  </Flex>
                </Flex>
                <Flex dir="column">
                  <Text fontSize="0.75rem" color={colors.gray}>
                    Royalties
                  </Text>
                  <Flex gap="6px" justify="flex-start" align="baseline">
                    <Text
                      fontSize="1.5rem"
                      fontWeight="600"
                      color={colors.blue3}
                    >
                      {royalty}%
                    </Text>
                    <Text color={colors.gray}>${royaltyUsdPrice}</Text>
                  </Flex>
                </Flex>
              </PriceInfo>
              {isConnected ? (
                <Button block label="Buy" />
              ) : (
                <WalletConnect block />
              )}
            </Flex>
          </BaseCard>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Product;
