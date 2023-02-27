import styled from "@emotion/styled";
import { Avatar, Button, Carousel, Col, Row, Space, Typography } from "antd";
import { CarouselWrapper } from "../../styles";
import brushStrokeUrl from "../../assets/brush-stroke-banner.svg";
import data from "../../data/arts.json";
import { gray1, text } from "../../styles/colors";
import Link from "next/link";
import Image from "next/image";

const { Title, Text } = Typography;

export const HeroContainer = styled.div`
  background-color: transparent !important;
  height: 100% !important;
  min-height: 100vh !important;
  padding: 140px 160px 0 160px !important;
`;

export const BrushStroke = styled.div`
  height: auto;
  position: absolute;
  right: 1.5rem;
  top: -12rem;
  width: 380px;
`;

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
`;

export const HeroTitle = styled.h1`
  color: ${text} !important;
  flex-grow: 0;
  flex: none;
  font-family: "Inter";
  font-size: 56px;
  font-style: normal;
  font-weight: 800;
  line-height: 64px;
  margin: 0;
  margin-top: 80px;
`;

export const HeroDescription = styled(Text)`
  color: ${text} !important;
  flex-grow: 0;
  flex: none;
  font-family: "Inter";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  margin-bottom: 32px;
`;

export const HeroCarousel = styled(Carousel)`
  width: 576px;
  margin-left: auto;

  .ant-carousel .slick-dots-bottom {
    bottom: -32px !important;
  }
`;

export const ArtContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;
`;

export const ArtImage = styled.img`
  border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  -ms-border-radius: 16px;
  -o-border-radius: 16px;
  height: 576px;
  width: 576px;
`;

export const ArtOverlay = styled.div`
  align-items: flex-start;
  background: rgba(29, 29, 29, 0.6);
  border-radius: 16px 0px 0px 16px;
  -moz-border-radius: 16px 0px 0px 16px;
  -ms-border-radius: 16px 0px 0px 16px;
  -o-border-radius: 16px 0px 0px 16px;
  -webkit-border-radius: 16px 0px 0px 16px;
  bottom: 48px;
  color: ${text};
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  line-height: 22px;
  padding: 16px;
  position: absolute;
  position: absolute;
  right: 0px;
  width: 50%;
  z-index: 1;
`;

export const ArtName = styled(Title)`
  color: ${text} !important;
  font-family: "Inter";
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 32px;
  margin: 0;
`;

export const ArtistAvatar = styled(Avatar)`
  height: 48px;
  margin-right: 10px;
  width: 48px;
`;

export const ArtistName = styled(Text)`
  color: ${text};
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

export const ExploreButton = styled(Button)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${gray1};
  background-color: ${text};
  padding: 8px 16px;
  height: auto;
`;

const CarouselCard = ({
  art: { artId, artTitle, artPicture, artistPicture, artistName },
}) => {
  return (
    <ArtContainer key={artId}>
      <ArtImage src={artPicture} alt={artTitle} />
      <ArtOverlay>
        <ArtName level={3}>{artTitle}</ArtName>
        <Space>
          <ArtistAvatar src={artistPicture} />
          <ArtistName>{artistName}</ArtistName>
        </Space>
      </ArtOverlay>
    </ArtContainer>
  );
};

const Hero = () => {
  return (
    <HeroContainer>
      <Row align="middle">
        <Col span={12}>
          <HeroContent>
            <BrushStroke>
              <Image alt="website logo" src={brushStrokeUrl} />
            </BrushStroke>
            <HeroTitle>Discover rare artworks by world class artist</HeroTitle>
            <HeroDescription>
              Discover the hottest NFT collections, marketplace rankings and top
              real-time sales.
            </HeroDescription>
            <Link href="/explore">
              <ExploreButton type="primary">Explore NFT market</ExploreButton>
            </Link>
          </HeroContent>
        </Col>
        <Col span={12}>
          <CarouselWrapper>
            <HeroCarousel draggable>
              {data.map((item) => (
                <CarouselCard key={item.artId} art={item} />
              ))}
            </HeroCarousel>
          </CarouselWrapper>
        </Col>
      </Row>
    </HeroContainer>
  );
};

export default Hero;
