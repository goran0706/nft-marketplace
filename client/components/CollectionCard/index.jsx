import Link from "next/link";
import Image from "next/image";
import Meta from "antd/lib/card/Meta";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Space, Statistic } from "antd";
import { Card, Flex, Text } from "../../styles";
import { green } from "../../styles/colors";

const CollectionCard = ({ collection }) => {
  const { name, picture, title, price, volume } = collection;

  return (
    <Link href={`/collections/${name}`}>
      <Card
        hoverable
        width="300px"
        cover={<Image alt={title} src={picture} width={300} height={200} />}
      >
        <Meta
          title={title}
          description={
            <Flex justify="space-between">
              <Space direction="vertical" size="0" block="true">
                <Statistic
                  value={3.28}
                  precision={2}
                  valueStyle={{ color: green }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
                <Space
                  direction="vertical"
                  size="0"
                  align="baseline"
                  block="true"
                >
                  <Text.Grey>Floor: </Text.Grey>
                  <Text.White>{price} ETH</Text.White>
                </Space>
              </Space>
              <Space direction="vertical" block="true">
                <Statistic
                  value={3.28}
                  precision={2}
                  valueStyle={{ color: green, textAlign: "right" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
                <Space
                  direction="vertical"
                  size="0"
                  align="baseline"
                  block="true"
                >
                  <Text.Grey>Volume: </Text.Grey>
                  <Text.White>{volume} ETH</Text.White>
                </Space>
              </Space>
            </Flex>
          }
        />
      </Card>
    </Link>
  );
};

export default CollectionCard;
