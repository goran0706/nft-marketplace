import { LinkOutlined } from "@ant-design/icons";
import { Section, SectionButton, SectionTitle } from "../../styles";
import CollectionList from "../../components/CollectionList";
import data from "../../data/collections.json";

const TrendingCollections = () => {
  return (
    <Section>
      <SectionTitle level={2}>Trending Collections</SectionTitle>
      <CollectionList data={data} />
      <SectionButton href="/trending-collections" icon={<LinkOutlined />}>
        View all collections
      </SectionButton>
    </Section>
  );
};

export default TrendingCollections;
