import Meta from "antd/lib/card/Meta";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../../styles";

const ArticleCard = ({ article }) => {
  const { id, picture, title, description } = article;

  return (
    <Link href={`/articles/${id}`}>
      <Card
        hoverable
        cover={<Image alt={title} src={picture} width={380} height={180} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </Link>
  );
};

export default ArticleCard;
