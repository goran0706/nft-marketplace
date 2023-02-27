import { List } from "antd";
import CollectionCard from "../CollectionCard";

const CollectionList = ({ data }) => {
  const renderItems = (item) => (
    <List.Item>
      <CollectionCard collection={item} />
    </List.Item>
  );

  return (
    <List
      grid={{ gutter: 16, column: 5 }}
      dataSource={data}
      renderItem={renderItems}
    />
  );
};

export default CollectionList;
