import { FileImageOutlined, HeartOutlined } from "@ant-design/icons";
import { Avatar, Space, Statistic } from "antd";
import { Card, Flex, Text } from "../../styles";
import Meta from "antd/lib/card/Meta";
import Link from "next/link";

const AccountCard = ({ account, index }) => {
  const { id, picture, name, itemsCount, likesCount, volume } = account;

  return (
    <Link href={`/accounts/${id}`}>
      <Card hoverable>
        <Flex>
          <Text.White>{index}</Text.White>
          <Meta
            avatar={<Avatar src={picture} />}
            title={name}
            description={
              <Space
                block="true"
                align="center"
                direction="horizontal"
                size="middle"
              >
                <Statistic value={itemsCount} prefix={<FileImageOutlined />} />
                <Statistic value={likesCount} prefix={<HeartOutlined />} />
              </Space>
            }
          />
          <Text.White>{volume}</Text.White>
        </Flex>
      </Card>
    </Link>
  );
};

export default AccountCard;
