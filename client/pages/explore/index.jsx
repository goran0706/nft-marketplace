import { Section, SectionTitle, StyledTabs, Text } from "../../styles";
import AccountList from "../../components/AccountList";
import CollectionList from "../../components/CollectionList";
import ItemList from "../../components/ItemList";
import collections from "../../data/collections.json";
import arts from "../../data/arts.json";
import accounts from "../../data/accounts.json";
import { useAccount, useContract } from "wagmi";

const items = [
  {
    key: 1,
    label: "Premium",
    children: <CollectionList data={collections} />,
  },
  {
    key: 2,
    label: "Trending",
    children: <CollectionList data={collections} />,
  },
  {
    key: 3,
    label: "Top",
    children: <CollectionList data={collections} />,
  },
  {
    key: 4,
    label: "Art",
    children: <ItemList data={arts} />,
  },
  {
    key: 5,
    label: "Photography",
    children: <ItemList data={arts} />,
  },
  {
    key: 6,
    label: "Music",
    children: <ItemList data={arts} />,
  },
  {
    key: 7,
    label: "Collectibles",
    children: <ItemList data={arts} />,
  },
  {
    key: 8,
    label: "Domain Names",
    children: <ItemList data={arts} />,
  },
  {
    key: 9,
    label: "Accounts",
    children: <AccountList data={accounts} />,
  },
];

const Explore = () => {
  return (
    <Section>
      <SectionTitle level={2}>Explore Collections</SectionTitle>
      <StyledTabs
        defaultActiveKey="1"
        type="card"
        size="middle"
        items={items}
      />
    </Section>
  );
};

export default Explore;
