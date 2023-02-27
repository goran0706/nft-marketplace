import { LinkOutlined } from "@ant-design/icons";
import { Section, SectionButton, SectionTitle } from "../../styles";
import CollectionList from "../../components/CollectionList";
import data from "../../data/collections.json";

const TopCollections = () => {
  return (
    <Section>
      <SectionTitle level={2}>Top Collections</SectionTitle>
      <CollectionList data={data} />
      <SectionButton href="/top-collections" icon={<LinkOutlined />}>
        View all collections
      </SectionButton>
    </Section>
  );
};

export default TopCollections;
