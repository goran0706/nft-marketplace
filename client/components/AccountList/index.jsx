import { List } from "antd";
import AccountCard from "../AccountCard";

const AccountList = ({ data }) => {
  const renderItems = (item, index) => (
    <List.Item>
      <AccountCard account={item} index={index + 1} />
    </List.Item>
  );

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={renderItems}
    />
  );
};

export default AccountList;
