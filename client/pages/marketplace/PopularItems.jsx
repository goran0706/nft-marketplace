import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselWrapper, Section, SectionTitle } from "../../styles";
import data from "../../data/arts.json";
import ItemCard from "../../components/ItemCard";

const carouselConfig = {
  dots: true,
  arrows: true,
  draggable: true,
  infinite: false,
  pauseOnHover: true,
  // autoplay: true,
  autoplaySpeed: 1000,
  speed: 2000,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <LeftOutlined />,
  nextArrow: <RightOutlined />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PopularItems = () => {
  return (
    <Section>
      <SectionTitle level={2}>Popular Items</SectionTitle>
      <CarouselWrapper align="center">
        <Carousel {...carouselConfig}>
          {data.map((item) => (
            <ItemCard key={item.artId} item={item} />
          ))}
        </Carousel>
      </CarouselWrapper>
    </Section>
  );
};

export default PopularItems;
