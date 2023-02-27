import { LinkOutlined } from "@ant-design/icons";
import { Section, SectionButton, SectionTitle, StyledTabs } from "../../styles";
import AccountList from "../../components/AccountList";
import accounts from "../../data/accounts.json";

const items = [
  {
    key: 1,
    label: "Top Sellers",
    children: <AccountList data={accounts} />,
  },
  {
    key: 2,
    label: "Top Buyers",
    children: <AccountList data={accounts} />,
  },
];

const TopAccounts = () => {
  return (
    <Section>
      <SectionTitle level={2}>Top Accounts</SectionTitle>
      <StyledTabs
        defaultActiveKey="1"
        type="card"
        size="middle"
        items={items}
      />
      <SectionButton href="/top-buyers" icon={<LinkOutlined />}>
        View all accounts
      </SectionButton>
    </Section>
  );
};

export default TopAccounts;
