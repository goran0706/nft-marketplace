import { LinkOutlined } from "@ant-design/icons";
import { Section, SectionButton, SectionTitle } from "../../styles";
import ArticleList from "../../components/ArticleList";
import data from "../../data/articles.json";

const Articles = () => {
  return (
    <Section>
      <SectionTitle level={2}>Helpful Articles</SectionTitle>
      <ArticleList data={data} />
      <SectionButton href="/articles" icon={<LinkOutlined />}>
        View all articles
      </SectionButton>
    </Section>
  );
};

export default Articles;
