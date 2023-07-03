"use client";
import { colors } from "@/theme";
import {
  FaCreativeCommons,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaSlack,
  FaTwitter,
} from "react-icons/fa";
import {
  Col,
  Container,
  ExternalLink,
  Flex,
  FooterTitle,
  InternalLink,
  Row,
  Text,
} from "../styled";
import Logo from "../Logo";
import styled from "@emotion/styled";

const FooterFrame = styled.footer`
  background: ${colors.bg2};
  margin-top: 80px;
  padding: 80px 0 80px;
  > div > div:first-of-type:after {
    content: "";
    display: block;
    border-bottom: 2px solid ${colors.purple1};
    margin: 32px 0;
    width: 100%;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterFrame>
      <Container>
        <Row align="flex-start" justify="space-between">
          <Col>
            <Flex dir="column">
              <Logo />
              <Text>
                A digital marketplace for crypto collectibles and non-fungible
                tokens (NFTs).
                <br />
                Buy, sell, and discover exclusive digital items.
              </Text>
            </Flex>
          </Col>
          <Col>
            <Flex dir="column">
              <FooterTitle>NFT Marketplace</FooterTitle>
              {[
                { href: "/explore", label: "Explore" },
                { href: "/collections", label: "Collections" },
                { href: "/create", label: "Create" },
              ].map(({ href, label }) => (
                <InternalLink href={href}>{label}</InternalLink>
              ))}
            </Flex>
          </Col>
          <Col>
            <Flex dir="column">
              <FooterTitle>Resources</FooterTitle>
              {[
                { href: "/", label: "Blog" },
                { href: "/", label: "Documents" },
                { href: "/", label: "New Settler" },
              ].map(({ href, label }) => (
                <ExternalLink
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </ExternalLink>
              ))}
            </Flex>
          </Col>
          <Col>
            <Flex dir="column">
              <FooterTitle>Learn</FooterTitle>
              {[
                { href: "/", label: "NFT - 101" },
                { href: "/", label: "Blockchain" },
                { href: "/", label: "Decentralized" },
              ].map(({ href, label }) => (
                <ExternalLink
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </ExternalLink>
              ))}
            </Flex>
          </Col>
          <Col>
            <Flex dir="column">
              <FooterTitle>Legal</FooterTitle>
              {[
                { href: "/", label: "Privacy Policy" },
                { href: "/", label: "Terms & Conditions" },
              ].map(({ href, label }) => (
                <ExternalLink
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </ExternalLink>
              ))}
            </Flex>
          </Col>
        </Row>
        <Row align="center" justify="space-between">
          <Col>
            <Flex gap="8px" align="center">
              <Text>{year}</Text>
              <FaCreativeCommons />
              <Text>NFT Marketplace</Text>
            </Flex>
          </Col>
          <Col>
            <Flex gap="1rem">
              <ExternalLink href="/" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} />
              </ExternalLink>
              <ExternalLink href="/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={32} />
              </ExternalLink>
              <ExternalLink href="/" target="_blank" rel="noopener noreferrer">
                <FaSlack size={32} />
              </ExternalLink>
              <ExternalLink href="/" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={32} />
              </ExternalLink>
              <ExternalLink href="/" target="_blank" rel="noopener noreferrer">
                <FaDiscord size={32} />
              </ExternalLink>
            </Flex>
          </Col>
        </Row>
      </Container>
    </FooterFrame>
  );
};

export default Footer;
