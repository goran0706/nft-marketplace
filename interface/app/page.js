"use client";
import {
  Container,
  Row,
  Section as StyledSection,
  SectionTitle,
} from "../components/styled";
import {
  ArticleList,
  CollectionList,
  CreatorList,
  GuideList,
  NFTList,
} from "../components/List";
import { articles, collections, nfts, steps, creators } from "../fakeData/fake";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { ButtonGroup, Button } from "../components/Button";
import { colors } from "../theme";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import styled from "@emotion/styled";

const BannerBackground = styled.section`
  background-image: url(banner-bg.jpg);
  background-position: top center;
  background-size: cover;
  filter: hue-rotate(45deg);
  height: 85vh;
  position: relative;
  clip-path: polygon(
    100% 0%,
    0% 0%,
    0% 94.37%,
    2% 95.09%,
    4% 95.75%,
    6% 96.31%,
    8% 96.73%,
    10% 96.98%,
    12% 97.06%,
    14% 96.95%,
    16% 96.66%,
    18% 96.21%,
    20% 95.63%,
    22% 94.96%,
    24% 94.23%,
    26% 93.5%,
    28% 92.8%,
    30% 92.19%,
    32% 91.7%,
    34% 91.36%,
    36% 91.19%,
    38% 91.21%,
    40% 91.41%,
    42% 91.78%,
    44% 92.3%,
    46% 92.93%,
    48% 93.64%,
    50% 94.37%,
    52% 95.09%,
    54% 95.75%,
    56% 96.31%,
    58% 96.73%,
    60% 96.98%,
    62% 97.06%,
    64% 96.95%,
    66% 96.66%,
    68% 96.21%,
    70% 95.63%,
    72% 94.96%,
    74% 94.23%,
    76% 93.5%,
    78% 92.8%,
    80% 92.19%,
    82% 91.7%,
    84% 91.36%,
    86% 91.19%,
    88% 91.21%,
    90% 91.41%,
    92% 91.78%,
    94% 92.3%,
    96% 92.93%,
    98% 93.64%,
    100% 94.37%
  );
`;

const BannerArea = styled.div`
  padding: 280px 0 280px;
`;

const BannerContent = styled.div`
  width: 50%;
`;

const Heading = styled.h2`
  font-size: 70px;
  font-weight: 600;
  line-height: 1.22;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Attribution = styled.a`
  color: ${colors.text3};
  left: 0;
  position: relative;
  top: 6rem;
`;

const Banner = ({ title, subtitle }) => {
  return (
    <BannerBackground>
      <BannerArea>
        <Container>
          <BannerContent>
            <Heading>{title}</Heading>
            <SubHeading>{subtitle}</SubHeading>
            <ButtonGroup>
              <Button
                as="link"
                ghost="true"
                outline="true"
                href="/products"
                label="Explore"
                Icon={<BsFillRocketTakeoffFill />}
              />
              <Button
                as="link"
                ghost="true"
                outline="true"
                href="/create"
                label="Create"
                Icon={<IoIosCreate />}
              />
            </ButtonGroup>
            <Attribution
              href="https://www.freepik.com/free-photo/closeup-woman-vr-glasses-float-neon-space-with-cables-attached-her-metaverse-avatar-concept_20113577.htm#query=metaverse%203d&position=16&from_view=keyword&track=ais"
              target="_blank"
              rel="noopener noreferrer"
              children="Image by GarryKillian on Freepik"
            />
          </BannerContent>
        </Container>
      </BannerArea>
    </BannerBackground>
  );
};

const Section = ({ title, showViewLink, route = "", children }) => (
  <StyledSection>
    <Container>
      <Row align="baseline" justify="space-between">
        <SectionTitle>{title}</SectionTitle>
        {showViewLink && (
          <Button
            as="link"
            href={route}
            ghost="true"
            compact="true"
            outline="true"
            outlinecolor={colors.bg3}
            label="View All"
            Icon={<FaArrowRight />}
          />
        )}
      </Row>
      {children}
    </Container>
  </StyledSection>
);

const Home = () => (
  <main>
    <Banner
      title="Buy and sell digital art NFT collection"
      subtitle="Marketplace for digital arts and NFT collection. Discover, buy and sell NFTs"
    />
    <Section title="Newest Items" showViewLink={true} route="/products">
      <NFTList items={nfts} />
    </Section>
    <Section title="Top Collections" showViewLink={true} route="/collections">
      <CollectionList items={collections} />
    </Section>
    <Section title="Top Creators" showViewLink={true} route="/creators">
      <CreatorList items={creators} />
    </Section>
    <Section title="Helpful Articles" showViewLink={true} route="/articles">
      <ArticleList items={articles} />
    </Section>
    <Section title="How It Works?">
      <GuideList items={steps} />
    </Section>
  </main>
);

export default Home;
