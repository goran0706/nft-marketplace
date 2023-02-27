import { List } from "antd";
import ItemCard from "../ItemCard";

const ItemList = ({ data }) => {
  const renderItems = (item) => {
    return (
      <List.Item>
        <ItemCard item={item} />
      </List.Item>
    );
  };

  return (
    <List
      grid={{ gutter: 16, column: 5 }}
      dataSource={data}
      renderItem={renderItems}
    />
  );
};

export default ItemList;
