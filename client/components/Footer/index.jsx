import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { Col, Layout, List, Row, Space, Typography } from "antd";
import { StyledDivider } from "../../styles";
import { blue, text } from "../../styles/colors";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  MediumSquareFilled,
  SlackSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import data from "../../data/footerLinks.json";
import logo from "./../../assets/logo.svg";

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const socials = [
  {
    Icon: LinkedinFilled,
    url: "https://linkedin.com",
  },
  {
    Icon: MediumSquareFilled,
    url: "https://medium.com",
  },
  {
    Icon: FacebookFilled,
    url: "https://facebook.com",
  },
  {
    Icon: TwitterSquareFilled,
    url: "https://twitter.com",
  },
  {
    Icon: SlackSquareFilled,
    url: "https://slack.com=",
  },
  {
    Icon: GithubFilled,
    url: "https://github.com",
  },
];

const FooterWrapper = styled(AntFooter)`
  color: ${text} !important;
  background-color: #262626 !important;
  padding: 32px 160px !important;
`;

const FooterTitle = styled(Title)`
  color: ${text} !important;
  margin: 0 !important;
`;

const FooterDescription = styled(Text)`
  font-weight: 400;
  line-height: 22px;
  color: ${text};
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${text};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
`;

const Socials = styled(List)`
  a {
    color: ${text};
    font-size: 14px;
    text-align: center;
    :hover {
      color: ${blue};
    }
  }
  svg {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;

const ExternalLinks = styled(List)`
  a {
    color: ${text};
    font-size: 14px;
    text-align: center;
    :hover {
      color: ${blue};
    }
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Row justify="space-between">
        <Col span={12}>
          <Space direction="vertical" align="start" size="large" block="true">
            <Space direction="horizontal" align="center" size="large">
              <Brand>
                <Image src={logo} alt="brand" width={48} height={48} />
              </Brand>
              <FooterTitle level={4}>NFT Digital Marketplace</FooterTitle>
            </Space>
            <FooterDescription>
              A digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs).
              <br />
              Buy, sell, and discover exclusive digital items.
            </FooterDescription>
          </Space>
        </Col>
        <Col>
          <Space direction="vertical" align="start" size="large" block="true">
            <FooterTitle level={4}>Join the community</FooterTitle>
            <Socials
              grid={{
                gutter: 16,
              }}
              dataSource={socials}
              renderItem={({ url, Icon }, index) => (
                <List.Item key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Icon />
                  </a>
                </List.Item>
              )}
            />
          </Space>
        </Col>
      </Row>
      <StyledDivider />
      <Row>
        {data.map(({ label, links }, i) => (
          <Col flex="auto" key={i}>
            <Space direction="vertical" align="start" size="large" block="true">
              <FooterTitle level={5}>{label}</FooterTitle>
              <ExternalLinks
                dataSource={links}
                renderItem={({ url, name }, index) => (
                  <List.Item key={index}>
                    <Link href={url}>{name}</Link>
                  </List.Item>
                )}
              />
            </Space>
          </Col>
        ))}
      </Row>
      <StyledDivider />
      <Row justify="center" align="center">
        <Col align="center" flex="auto">
          <Space direction="horizontal" align="center" size="large">
            <div>{year} © NFT Marketplace</div>
          </Space>
        </Col>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
