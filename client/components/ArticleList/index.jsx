import { List } from "antd";
import ArticleCard from "../ArticleCard";

const ArticleList = ({ data }) => {
  const renderItems = (item) => (
    <List.Item>
      <ArticleCard article={item} />
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

export default ArticleList;
